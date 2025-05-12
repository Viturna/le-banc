import { getOrCreateUserProfile } from '$lib/auth';

export const load = async ({ locals }) => {
	let userProfile = null;

	try {
		// Tente de récupérer le profil utilisateur
		userProfile = await getOrCreateUserProfile(locals);
	} catch (error) {
		console.error('Erreur lors de la récupération du profil utilisateur:', error);
	}

	return {
		userProfile,
		domains: userProfile ? await fetchDomains(userProfile.id) : [],
		roles: userProfile ? await fetchRoles(userProfile.id) : []
	};
};

function fetchDomains(_id: string) {
	console.log(`Fetching domains for user ID: ${_id}`);
	return [];
}
function fetchRoles(_id: string) {
	console.log(`Fetching domains for user ID: ${_id}`);
}
