<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
  
	const userProfileStore = derived(page, $page => $page.data.userProfile);
	const selectedDomainNames = derived(page, $page =>
	  $page.data.domains?.filter((d: { id: any; }) => $page.data.userProfile?.domains?.includes(d.id)).map((d: { name: any; }) => d.name) ?? []
	);
	const selectedRoleNames = derived(page, $page =>
	  $page.data.roles?.filter((r: { id: any; }) => $page.data.userProfile?.roles?.includes(r.id)).map((r: { name: any; }) => r.name) ?? []
	);
  </script>
  
  <h1>Profil utilisateur</h1>
  
  {#if $userProfileStore}
	  {#if $userProfileStore.photoUrl}
		  <img src={$userProfileStore.photoUrl} alt="{$userProfileStore.firstName} {$userProfileStore.lastName}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;" />
	  {/if}
  
	  <ul style="list-style: none; padding: 0;">
		  <li><strong>Prénom :</strong> {$userProfileStore.firstName}</li>
		  <li><strong>Nom :</strong> {$userProfileStore.lastName}</li>
		  <li><strong>Nom d'utilisateur :</strong> {$userProfileStore.username}</li>
		  <li><strong>Email :</strong> {$userProfileStore.email}</li>
		  <li><strong>Quote :</strong> {$userProfileStore.quote}</li>
		  <li><strong>Lieux :</strong> {$userProfileStore.locations?.join(', ')}</li>
		  <li><strong>Expériences :</strong> {$userProfileStore.experiences?.join(', ')}</li>
		  <li><strong>Téléphone :</strong> {$userProfileStore.phone}</li>
		  <li><strong>Coordonnées :</strong> {$userProfileStore.coordinates}</li>
		  <li><strong>Domaines :</strong> {$selectedDomainNames.join(', ')}</li>
		  <li><strong>Rôles :</strong> {$selectedRoleNames.join(', ')}</li>
	  </ul>
	  <a href="/profile/edit">Editer le profil</a>
  {:else}
	  <p>Aucun profil trouvé.</p>
  {/if}
  