<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	export let data: {
		userProfile?: {
			firstName: string;
			lastName: string;
			email: string;
			username: string;
			quote: string;
			domains: string[];
			roles: string[];
			locations: string[];
			experiences: string[];
			phone: string;
			coordinates: string;
		};
		domains: { id: number; name: string }[];
		roles: { id: number; name: string }[];
	};

	const { userProfile } = data;
</script>

<svelte:head>
	<title>Le Banc – Trouve ton équipe</title>
	<meta name="description" content="Plateforme collaborative pour créateurs de projets" />
	<meta property="og:title" content="Le Banc – Trouve ton équipe" />
	<meta property="og:description" content="Plateforme collaborative pour créateurs de projets" />
	<meta property="og:type" content="website" />
</svelte:head>

<section class="hero">
	<div class="container">
		<div class="hero-content">
			<h1>
				une idée.<br />
				<span class="opacity-60">une équipe.</span><br />
				<span class="opacity-30">un projet.</span>
			</h1>
			<p>bienvenue sur <span class="bold italic">le banc</span>, une plateforme utile.</p>
			{#if userProfile}
				<p>Vous êtes connecté</p>
				<Link color="red" href="/auth/logout">me déconnecter</Link>
			{:else}
				<p>You are not logged in</p>
				<Link color="red" href="/auth/register">m'inscrire</Link>
				<Link color="blue" href="/auth/login">me connecter</Link>
			{/if}
		</div>
		<div class="hero-image">
			<img src="/images/hero-image.png" alt="Illustration" />
		</div>
	</div>
</section>

<style>
	h1 {
		font-size: 4rem;
	}
	.hero {
		min-height: 600px;
	}
	.hero .container {
		display: flex;
		align-items: end;
		justify-content: space-between;
	}
	.hero-image {
		align-self: center;
	}
	.hero-image img {
		height: 550px;
	}
</style>
