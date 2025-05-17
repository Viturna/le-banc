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
				<Link color="red" href="/auth/register">m'inscrire →</Link>
				<Link color="blue" href="/auth/login">me connecter</Link>
			{/if}
		</div>
		<div class="hero-image">
			<img src="/images/hero-image.png" alt="Illustration" />
		</div>
	</div>
</section>
<section class="about-us">
	<div class="container">
		<div class="about-us-left">
			<h2>Le Banc, c’est <span class="color-red">quoi</span> exactement&nbsp;?</h2>
		</div>
		<div class="about-us-right">
			<p>
				Le Banc, c’est une <span class="color-red">plateforme</span> qui a pour unique objectif de
				faciliter la <span class="color-red">réalisation de projets</span>. Destiné à tout individu
				ayant une idée à réaliser, Le Banc permet de mettre en lien
				<span class="color-red">les créateurs de projets</span> de toutes tailles. Que vous ayez
				besoin d'un développeur pour une application, d'un graphiste pour une affiche de concert, ou
				d'un groupe de créatifs pour un projet communautaire, Le Banc est l'endroit où vous pouvez
				trouver les <span class="color-red">ressources</span> et le
				<span class="color-red">soutien</span> dont vous avez besoin.
			</p>
			<Link href="about-us">en savoir plus →</Link>
		</div>
	</div>
</section>
<section class="creators">
	<div class="container">
		<div class="creators-left">
			<p>
				Vous pouvez retrouvez ici des créateurs <span class="color-red">passionnés</span> ou
				simplement <span class="color-red">curieux</span>,
				<span class="color-red">expérimentés</span>
				ou
				<span class="color-red">apprentis</span>, <span class="color-red">spécialisés</span> dans un
				domaine ou <span class="color-red">touche à tout</span>… Un point commun unit ces profils :
				la volonté de créer, de contribuer d’une manière ou d’une autre à un projet, qu’il soit
				musical, cinématique, en ligne ou sur papier. Mais trêve de tergiversation, venez jeter un
				coup d’œil et, qui sait, rejoignez nous !
			</p>
			<Link href="about-us">en savoir plus →</Link>
		</div>
		<div class="creators-right">
			<h2>Les Créateurs</h2>
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

	/* about us */

	.about-us .container {
		display: flex;
		align-items: center;
	}
	.about-us .container > div {
		width: 50%;
	}
	.about-us-right {
		display: flex;
		flex-direction: column;
		gap: 140px;
	}
	.about-us .container p {
		line-height: 180%;
		font-size: 18px;
	}
	/* creators */
	.creators .container {
		display: flex;
		align-items: center;
	}
	.creators .container > div {
		width: 50%;
	}
	.creators-left {
		display: flex;
		flex-direction: column;
		gap: 140px;
	}
	.creators .container p {
		line-height: 180%;
		font-size: 18px;
		text-align: right;
	}
</style>
