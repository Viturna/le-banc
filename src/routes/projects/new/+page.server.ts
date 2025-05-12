import { error, json } from '@sveltejs/kit';
import { getOrCreateUserProfile } from '$lib/auth';
import { createProject } from '$lib/projects';
import { saveFile } from '$lib/utils/files';

export const actions = {
  default: async ({ request, locals }) => {
    const user = await getOrCreateUserProfile(locals);
    if (!user) throw error(401, "Non authentifié");

    const formData = await request.formData();
    const title = formData.get('title')?.toString();
    const description = formData.get('description')?.toString();
    const link = formData.get('link')?.toString();
    const image = formData.get('image') as File | null;

    if (!title || !description) throw error(400, "Titre et description requis");

    let imageUrl: string | undefined = undefined;
    if (image && image.size > 0) {
      imageUrl = await saveFile(image, title);
    }

    const projectId = await createProject({
      title,
      description,
      link,
      image: imageUrl,
      creator: {
        id: user.id,
        username: user.username ?? 'unknown'
      }
    });

    return json({ id: projectId });
  }
};
