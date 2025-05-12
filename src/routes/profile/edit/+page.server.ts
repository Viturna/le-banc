import { getOrCreateUserProfile } from "$lib/auth";
import { z } from 'zod';
import { db } from "$lib/db/index.js";
import {
profileTable,
domainTable,
roleTable,
profileToDomainTable,
profileToRoleTable,
} from "$lib/db/schema.js";
import { error } from "@sveltejs/kit";
import { eq, inArray } from "drizzle-orm";
import { zfd } from "zod-form-data";
import { mkdirSync, writeFileSync, existsSync } from 'fs';
import path from 'path';

export const load = async ({ locals }) => {
const userProfile = await getOrCreateUserProfile(locals);
if (!userProfile) throw error(401, "You need to be logged in!");

const domains = await db.select().from(domainTable);
const roles = await db.select().from(roleTable);

// Récupérer les IDs de domaines et rôles liés au profil
const profileDomains = await db
.select({ domainId: profileToDomainTable.domainId })
.from(profileToDomainTable)
.where(eq(profileToDomainTable.profileId, userProfile.id));

const profileRoles = await db
.select({ roleId: profileToRoleTable.roleId })
.from(profileToRoleTable)
.where(eq(profileToRoleTable.profileId, userProfile.id));

const selectedDomainIds = profileDomains.map((d) => d.domainId);
const selectedRoleIds = profileRoles.map((r) => r.roleId);

return {
userProfile: {
...userProfile,
domains: selectedDomainIds,
roles: selectedRoleIds,
photoUrl: userProfile.photoUrl ?? null,
},
domains,
roles,
};
};

export const actions = {
default: async ({ request, locals }) => {
const userProfile = await getOrCreateUserProfile(locals);
if (!userProfile) throw error(401, "You need to be logged in!");
const formData = await request.formData();
const file = formData.get('photo') as File | null;
const schema = zfd.formData({
firstName: zfd.text(),
lastName: zfd.text(),
email: zfd.text(),
username: zfd.text(),
quote: zfd.text(zfd.text().optional()),
locations: zfd.text(zfd.text().optional()),
experiences: zfd.text(zfd.text().optional()),
phone: zfd.text(zfd.text().optional()),
coordinates: zfd.text(zfd.text().optional()),
domains: z.array(zfd.text()).optional(),
roles: z.array(zfd.text()).optional(),
});

console.log("Form Data:", Object.fromEntries(formData));

const domains = formData.getAll("domains");
const roles = formData.getAll("roles");

const parsed = schema.safeParse({
  ...Object.fromEntries(formData),
  domains,
  roles,
});

if (!parsed.success) {
  console.error("❌ Invalid form data:", parsed.error);
  throw error(400, "Invalid form data");
}

const { data } = parsed;
const toArray = (input?: string) => input?.split(',').map(s => s.trim()).filter(Boolean) ?? [];

const locations = toArray(data.locations ?? '');
const experiences = toArray(data.experiences ?? '');
let photoUrl: string | undefined;

if (file && file.size > 0) {
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${userProfile.id}-${file.name}`;
  const uploadDir = path.resolve('static/uploads');

  if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, filename);
  writeFileSync(filePath, buffer);

  photoUrl = `/uploads/${filename}`;
}
await db.update(profileTable).set({
  firstName: data.firstName,
  lastName: data.lastName,
  username: data.username,
  quote: data.quote ?? '',
  locations,
  experiences,
  phone: data.phone ?? '',
  coordinates: data.coordinates ?? '',
  ...(photoUrl && { photoUrl }),
}).where(eq(profileTable.id, userProfile.id));

// Mettre à jour les domaines associés
if (data.domains) {
  const domainIds = await db
    .select({ id: domainTable.id })
    .from(domainTable)
    .where(inArray(domainTable.name, data.domains));

  if (domainIds.length > 0) {
    await db.delete(profileToDomainTable).where(eq(profileToDomainTable.profileId, userProfile.id));
    await db.insert(profileToDomainTable).values(
      domainIds.map(({ id }) => ({ profileId: userProfile.id, domainId: id }))
    );
  } else {
    console.warn("Aucun domaine correspondant trouvé pour:", data.domains);
  }
}

// Mettre à jour les rôles associés
if (data.roles) {
  const roleIds = await db
    .select({ id: roleTable.id })
    .from(roleTable)
    .where(inArray(roleTable.name, data.roles));

  if (roleIds.length > 0) {
    await db.delete(profileToRoleTable).where(eq(profileToRoleTable.profileId, userProfile.id));
    await db.insert(profileToRoleTable).values(
      roleIds.map(({ id }) => ({ profileId: userProfile.id, roleId: id }))
    );
  } else {
    console.warn("Aucun rôle correspondant trouvé pour:", data.roles);
  }
}

return { success: true };


},
};
