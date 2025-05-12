import { db } from '$lib/db';
import { eq } from 'drizzle-orm';
import { projectMemberTable, projectTable } from '$lib/db/schema';
import { redirect } from '@sveltejs/kit';

type CreateProjectInput = {
  title: string;
  description: string;
  link?: string;
  image?: string; // URL du fichier enregistré
  creator: {
    id: string;
    username: string;
  };
};

export const createProject = async ({
  title,
  description,
  link,
  image,
  creator,
}: CreateProjectInput): Promise<string> => {
  const projectId = crypto.randomUUID();

  await db.insert(projectTable).values({
    id: projectId,
    title,
    description,
    link: link ?? null,
    images: image ? [image] : [],
  });

  const creatorRole = await db.query.roleTable.findFirst({
    where: (r, { eq }) => eq(r.name, 'Créateur')
  });

  if (!creatorRole) throw new Error("Rôle 'Créateur' introuvable");

  await db.insert(projectMemberTable).values({
    projectId,
    profileId: creator.id,
    roleId: creatorRole.id
  });

  throw redirect(303, '/projects');
};

export async function getProjectById(id: string) {
  const result = await db
    .select()
    .from(projectTable)
    .where(eq(projectTable.id, id))
    .limit(1);

  return result[0] ?? null;
}
