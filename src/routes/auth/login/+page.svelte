<section class="hero">
	<div class="container">
		<div class="hero-content">
			<h1>Se connecter</h1>
			<p>bienvenue sur <span class="bold italic">le banc</span>, une plateforme utile.</p>
			<form method="POST" action="?/login">
				<label>
					Email
					<input name="email" type="email" />
				</label>
				<label>
					Password
					<input name="password" type="password" />
				</label>
				<button>Se connecter</button>
			</form>
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
