<script lang="ts">
    import { getUserProfileByUsername } from '$lib/auth';
	import { error } from '@sveltejs/kit';
  
    export let params: { username: string };
    
    let userProfile;
  
    // Récupérer le profil de l'utilisateur par son nom d'utilisateur (username)
    try {
      userProfile = await getUserProfileByUsername(params.username);
    } catch (err) {
      throw error(404, "User profile not found");
    }
  </script>
  
  {#if userProfile}
    <h1>{userProfile.firstName} {userProfile.lastName}</h1>
    <p>Email: {userProfile.email}</p>
    <p>Username: {userProfile.username}</p>
    <p>Quote: {userProfile.quote}</p>
  

  {:else}
    <p>Le profil demandé n'existe pas.</p>
  {/if}
  