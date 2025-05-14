<script lang="ts">
	import { enhance } from '$app/forms';
  import { page } from '$app/stores';
  import fs from 'fs';
  import path from 'path';


  // Récupération des données de la page
  let userProfile = $page.data.userProfile;
  let domains = $page.data.domains;
  let roles = $page.data.roles;

  // Variables de formulaire
  let firstName = '';
  let lastName = '';
  let username = '';
  let email = '';
  let quote = '';
  let locations = '';
  let experiences = '';
  let phone = '';
  let coordinates = '';
  let photoUrl = '';
  let selectedDomains: string[] = [];
  let selectedRoles: string[] = [];

  $: {
    userProfile = $page.data.userProfile;
    if (userProfile) {
      firstName = userProfile.firstName ?? '';
      lastName = userProfile.lastName ?? '';
      username = userProfile.username ?? '';
      email = userProfile.email ?? '';
      quote = userProfile.quote ?? '';
      locations = userProfile.locations?.join(', ') ?? '';
      experiences = userProfile.experiences?.join(', ') ?? '';
      phone = userProfile.phone ?? '';
      coordinates = userProfile.coordinates ?? '';
      photoUrl = userProfile.photoUrl ?? '';
      selectedDomains = userProfile.domains ?? [];
      selectedRoles = userProfile.roles ?? [];
    }
  }
</script>

  
  <h1>Modifier le profil</h1>
  <form method="POST" enctype="multipart/form-data" use:enhance style="display: flex; flex-direction: column; width: 40vw; gap: 24px;">

    {#if userProfile.photoUrl}
      <img src={userProfile.photoUrl} alt={`Photo de profil de ${userProfile.firstName} ${userProfile.lastName}`} style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%;" />
    {/if}

    <div style="display: flex; flex-direction: column; gap: 8px;">
      <label for="photo">Photo de profil</label>
      <input id="photo" name="photo" type="file" accept="image/*" />
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <label for="firstName">Prénom</label>
      <input id="firstName" name="firstName" type="text" bind:value={firstName} required />
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <label for="lastName">Nom</label>
      <input id="lastName" name="lastName" type="text" bind:value={lastName} required />
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <label for="username">Nom d'utilisateur</label>
      <input id="username" name="username" type="text" bind:value={username} required />
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" bind:value={email} required />
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <label for="quote">Citation</label>
      <textarea id="quote" name="quote" bind:value={quote}></textarea>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <label for="domains">Domaines</label>
      <select id="domains" name="domains" multiple bind:value={selectedDomains}>
        {#each domains as domain}
          <option value={domain.id}>{domain.name}</option>
        {/each}
      </select>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <label for="roles">Rôles</label>
      <select id="roles" name="roles" multiple bind:value={selectedRoles}>
        {#each roles as role}
          <option value={role.id}>{role.name}</option>
        {/each}
      </select>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
    <label for="locations">Lieux</label>
    <input id="locations" name="locations" type="text" bind:value={locations} />
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
    <label for="experiences">Expériences</label>
    <textarea id="experiences" name="experiences" bind:value={experiences}></textarea>
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
    <label for="phone">Téléphone</label>
    <input id="phone" name="phone" type="text" bind:value={phone} />
    </div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
    <label for="coordinates">Coordonnées</label>
    <input id="coordinates" name="coordinates" type="text" bind:value={coordinates} />
    </div>
    <button type="submit">Mettre à jour</button>
  </form>