<script>
	import Input from '$lib/components/Input.svelte';
</script>

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

				<button formaction="?/signup">m'inscrire</button>
			</form>
			<a href="/auth/register/github">S'inscrire avec github</a>
			<a href="/auth/register/google">S'inscrire avec google</a>
			<a href="/auth/login">Se connecter</a>
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
		gap: 1rem;
		margin-top: 70px;
	}
	.hero-image {
		align-self: center;
	}
	.hero-image img {
		height: 550px;
	}
</style>
