<section class="hero">
	<div class="container">
		<div class="hero-content">
			<h1>S'inscrire.</h1>
			<p>bienvenue sur <span class="bold italic">le banc</span>, une plateforme utile.</p>
			<form method="POST" action="?/login">
				<label>
					<label for="email">Email</label>
					<input name="email" type="email" />
				</label>
				<div style="display: flex; flex-direction: column; gap: 8px;">
					Password
					<input name="password" type="password" />
				</div>

				<button formaction="?/signup">Sign up</button>
				<a href="/auth/register/github">S'inscrire avec github</a>
				<a href="/auth/register/google">S'inscrire avec google</a>
			</form>
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
	}
	.hero-content form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.hero-image {
		align-self: center;
	}
	.hero-image img {
		height: 550px;
	}
</style>
