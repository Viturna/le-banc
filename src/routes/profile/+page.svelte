<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const userProfileStore = derived(page, ($page) => $page.data.userProfile);
	const selectedDomainNames = derived(
		page,
		($page) =>
			$page.data.domains
				?.filter((d: { id: any }) => $page.data.userProfile?.domains?.includes(d.id))
				.map((d: { name: any }) => d.name) ?? []
	);
	const selectedRoleNames = derived(
		page,
		($page) =>
			$page.data.roles
				?.filter((r: { id: any }) => $page.data.userProfile?.roles?.includes(r.id))
				.map((r: { name: any }) => r.name) ?? []
	);
</script>

{#if $userProfileStore}
	<section class="hero-profil">
		<div class="left-container">
			{#if $userProfileStore.photoUrl}
				<img
					src={$userProfileStore.photoUrl}
					alt="{$userProfileStore.firstName} {$userProfileStore.lastName}"
					style="width: 100px; height: 100px; object-fit: cover; "
				/>
			{/if}
			<div>
				<p>{$userProfileStore.username}</p>
				<h1>{$userProfileStore.firstName} {$userProfileStore.lastName}</h1>
				<p class="citation">{$userProfileStore.quote}</p>
			</div>
		</div>
		<div class="right-container">
			<div class="contact-container">
				<span>{$userProfileStore.phone}</span>
			</div>
			<div class="contact-container">
				<span>{$userProfileStore.email}</span>
			</div>
			<div class="contact-container">
				<span>{$userProfileStore.locations?.join(', ')}</span>
			</div>
		</div>
	</section>

	<p><strong>Nom d'utilisateur :</strong></p>
	<p><strong>Email :</strong></p>
	<p><strong>Quote :</strong></p>
	<p><strong>Lieux :</strong> {$userProfileStore.locations?.join(', ')}</p>
	<p><strong>Expériences :</strong> {$userProfileStore.experiences?.join(', ')}</p>
	<p><strong>Téléphone :</strong> {$userProfileStore.phone}</p>
	<p><strong>Coordonnées :</strong> {$userProfileStore.coordinates}</p>
	<p><strong>Domaines :</strong> {$selectedDomainNames.join(', ')}</p>
	<p><strong>Rôles :</strong> {$selectedRoleNames.join(', ')}</p>

	<a href="/profile/edit">Editer le profil</a>
{:else}
	<p>Aucun profil trouvé.</p>
{/if}

<style>
	.hero-profil {
		display: flex;
		align-items: center;
	}
	.hero-profil .left-container {
		display: flex;
		align-items: center;
		gap: 80px;
	}
	.hero-profil .right-container {
		display: flex;
		align-items: center;
		gap: 16px;
	}
</style>
