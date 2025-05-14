<script>
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Link from '$lib/components/Link.svelte';
</script>

<svelte:head>
	<title>Le Banc – M'inscrire à la plateforme</title>
	<meta name="description" content="Plateforme collaborative pour créateurs de projets" />
	<meta property="og:title" content="Le Banc – M'inscrire à la plateforme" />
	<meta property="og:description" content="Plateforme collaborative pour créateurs de projets" />
	<meta property="og:type" content="website" />
</svelte:head>

<section class="hero">
	<div class="container">
		<div class="hero-content">
			<h1>M’inscrire</h1>
			<form method="POST" action="?/login">
				<Input name="email" label="Email" type="email" placeholder="Adresse email" required />

				<Input
					name="password"
					label="Mot de passe"
					type="password"
					placeholder="Mot de passe"
					required
				/>

				<Button type="submit" formaction="?/signup" variant="fill">m'inscrire</Button>
			</form>
			<div class="flex-extauth">
				<Link href="/auth/register/google" variant="border" color="red"
					>m'inscrire avec Google →</Link
				>
				<Link href="/auth/register/github" variant="border" color="black"
					>m'inscrire avec Github →</Link
				>
			</div>

			<div class="container-connexion">
				<p>Vous avez déjà un compte ?</p>
				<Link href="/auth/login" variant="border" color="blue">me connecter</Link>
			</div>
		</div>
		<div class="hero-image">
			<img src="/images/hero-image.png" alt="Illustration" />
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 600px;
	}
	.hero .container {
		display: flex;
		justify-content: space-between;
	}
	.hero-content {
		margin-top: 124px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.hero-content form {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-top: 70px;
	}
	.hero-image {
		align-self: center;
	}
	.hero-image img {
		height: 550px;
	}
	.flex-extauth {
		width: 100%;
		margin-top: 64px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.container-connexion {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 100%;
		margin-top: 96px;
	}
</style>
