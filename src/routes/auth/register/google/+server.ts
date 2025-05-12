import { redirect } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase }, url }) => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: url.origin + '/auth/callback',
			queryParams: {
				access_type: 'offline',
				prompt: 'consent'
			}
		}
	});

	if (error) {
		console.error('Erreur OAuth:', error);
		throw redirect(307, '/auth/error');
	}

	if (data.url) {
		throw redirect(307, data.url);
	}

	throw redirect(307, '/auth/error');
};
