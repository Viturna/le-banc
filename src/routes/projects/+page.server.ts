// Voir tous les projets
import { db } from '$lib/db';
import { projectTable } from '$lib/db/schema.js';

export const load = async () => {
  const projects = await db
    .select()
    .from(projectTable);

  return { projects };
};
