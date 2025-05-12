import { getProjectById } from '$lib/projects';

export const load = async ({ params }) => {
  const project = await getProjectById(params.id);

  if (!project) {
    throw new Error('Projet introuvable');
  }

  return {
    project,
  };
};