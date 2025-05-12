// +page.server.ts
import { getOrCreateUserProfile } from "$lib/auth";
import { error } from "@sveltejs/kit";
import { db } from "$lib/db/index.js";
import {
  domainTable,
  roleTable,
  profileToDomainTable,
  profileToRoleTable,
} from "$lib/db/schema.js";
import { eq } from "drizzle-orm";

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

