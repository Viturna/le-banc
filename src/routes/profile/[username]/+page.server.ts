// src/routes/profile/[username]/+page.server.ts
import { getUserProfileByUsername } from '$lib/auth';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const username = params.username;

	try {
		const userProfile = await getUserProfileByUsername(username);
		return { userProfile };
	} catch {
		throw error(404, 'User profile not found');
	}
}
