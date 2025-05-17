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
				<p>*Champs obligatoires</p>
				<Input name="email" label="Email*" type="email" placeholder="Adresse email" required />

				<Input
					name="password"
					label="Mot de passe*"
					type="password"
					placeholder="Mot de passe"
					required
				/>

				<Button type="submit" formaction="?/signup" variant="fill">m'inscrire →</Button>
			</form>
			<div class="flex-extauth">
				<Link href="/auth/register/google" variant="border" color="red">
					<span slot="icon-left"
						><svg
							width="19"
							height="19"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<mask
								id="mask0_1790_68"
								style="mask-type:alpha"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="19"
								height="19"
							>
								<circle cx="9.02295" cy="9.80151" r="9" fill="#D9D9D9" />
							</mask>
							<g mask="url(#mask0_1790_68)">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M2.59438 0.801514C1.17422 0.801514 0.0229492 1.95278 0.0229492 3.37294V16.2301C0.0229492 17.6502 1.17422 18.8015 2.59438 18.8015H15.4515C16.8717 18.8015 18.0229 17.6502 18.0229 16.2301V3.37294C18.0229 1.95278 16.8717 0.801514 15.4515 0.801514H2.59438ZM9.13196 16.5592C13.0313 16.5592 15.6717 13.8153 15.6717 9.95956C15.6717 9.50995 15.6281 9.17752 15.5654 8.83146H9.13196V11.1558H12.9686C12.8105 12.1504 11.8078 14.0687 9.13196 14.0687C6.82671 14.0687 4.94382 12.1585 4.94382 9.80151C4.94382 6.00303 9.41807 4.25911 11.8241 6.58071L13.6634 4.81226C12.4836 3.71141 10.9522 3.04381 9.13196 3.04381C5.39342 3.04381 2.37426 6.06298 2.37426 9.80151C2.37426 13.54 5.39342 16.5592 9.13196 16.5592Z"
									fill="#F9353A"
								/>
							</g>
						</svg>
					</span>
					m'inscrire avec Google →</Link
				>
				<Link href="/auth/register/github" variant="border" color="black"
					><span slot="icon-left">
						<svg
							width="19"
							height="19"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<mask
								id="mask0_1790_72"
								style="mask-type:alpha"
								maskUnits="userSpaceOnUse"
								x="0"
								y="0"
								width="19"
								height="19"
							>
								<circle cx="9.02295" cy="9.80151" r="9" fill="#D9D9D9" />
							</mask>
							<g mask="url(#mask0_1790_72)">
								<path
									d="M18.0229 3.37294C18.0229 1.95464 16.8698 0.801514 15.4515 0.801514H2.59438C1.17607 0.801514 0.0229492 1.95464 0.0229492 3.37294V16.2301C0.0229492 17.6484 1.17607 18.8015 2.59438 18.8015H15.4515C16.8698 18.8015 18.0229 17.6484 18.0229 16.2301V3.37294ZM10.7024 15.8966C10.7024 15.8243 10.7024 15.6555 10.7064 15.4305C10.7104 14.9725 10.7104 14.2734 10.7104 13.6747C10.7104 13.0479 10.5015 12.6502 10.2564 12.4412C11.743 12.2765 13.31 12.0716 13.31 9.50419C13.31 8.77294 13.0488 8.40732 12.623 7.93723C12.6913 7.76446 12.9203 7.0533 12.5546 6.12919C11.9962 5.95642 10.7185 6.84839 10.7185 6.84839C10.1881 6.69973 9.61357 6.62339 9.04706 6.62339C8.48054 6.62339 7.90599 6.69973 7.37563 6.84839C7.37563 6.84839 6.09795 5.95642 5.53947 6.12919C5.17384 7.04928 5.39884 7.76044 5.47116 7.93723C5.04527 8.40732 4.84438 8.77294 4.84438 9.50419C4.84438 12.0595 6.34304 12.2765 7.82965 12.4412C7.63679 12.614 7.46402 12.9113 7.40375 13.3372C7.02206 13.51 6.04572 13.8073 5.46313 12.7787C5.0975 12.1439 4.43857 12.0917 4.43857 12.0917C3.78768 12.0837 4.39438 12.5015 4.39438 12.5015C4.82831 12.7024 5.13366 13.4738 5.13366 13.4738C5.5234 14.6671 7.38768 14.2654 7.38768 14.2654C7.38768 14.627 7.3917 15.1372 7.3917 15.4948C7.3917 15.6877 7.39572 15.8404 7.39572 15.8966C7.39572 16.0694 7.27518 16.2783 6.93366 16.218C4.28188 15.3301 2.42563 12.8069 2.42563 9.85776C2.42563 6.16937 5.24616 3.36892 8.93456 3.36892C12.6229 3.36892 15.6122 6.16937 15.6122 9.85776C15.6163 12.8069 13.8163 15.3341 11.1645 16.218C10.827 16.2783 10.7024 16.0694 10.7024 15.8966ZM7.06625 13.6948C7.05822 13.6345 7.11045 13.5823 7.18679 13.5662C7.26313 13.5582 7.33545 13.5904 7.34349 13.6426C7.35554 13.6948 7.30331 13.747 7.22295 13.7631C7.14661 13.7792 7.07429 13.747 7.06625 13.6948ZM6.70063 13.8234C6.61223 13.8314 6.55197 13.7872 6.55197 13.727C6.55197 13.6747 6.61224 13.6305 6.69259 13.6305C6.76893 13.6225 6.84125 13.6667 6.84125 13.727C6.84125 13.7792 6.78098 13.8234 6.70063 13.8234ZM6.12607 13.735C6.04973 13.7189 5.9975 13.6587 6.01357 13.6064C6.02965 13.5542 6.11 13.5301 6.17831 13.5462C6.25866 13.5703 6.3109 13.6305 6.29081 13.6828C6.27474 13.735 6.19438 13.7591 6.12607 13.735ZM5.62384 13.4417C5.56357 13.3895 5.5475 13.3131 5.58768 13.277C5.62384 13.2328 5.70018 13.2408 5.76045 13.3011C5.81268 13.3533 5.83277 13.4337 5.79661 13.4658C5.76045 13.51 5.68411 13.502 5.62384 13.4417ZM5.28232 13.0399C5.23813 12.9796 5.23813 12.9113 5.28232 12.8832C5.32652 12.847 5.39482 12.8752 5.43099 12.9354C5.47518 12.9957 5.47518 13.068 5.43099 13.1002C5.39482 13.1243 5.32652 13.1002 5.28232 13.0399ZM5.0292 12.6863C4.985 12.6341 4.97697 12.5738 5.01313 12.5457C5.04929 12.5095 5.10956 12.5296 5.15375 12.5698C5.19795 12.622 5.20599 12.6823 5.16982 12.7104C5.13366 12.7466 5.0734 12.7265 5.0292 12.6863ZM4.78813 12.4292C4.7359 12.4051 4.71179 12.3609 4.72786 12.3247C4.74393 12.3006 4.78813 12.2886 4.84036 12.3087C4.89259 12.3368 4.9167 12.381 4.90063 12.4131C4.88456 12.4493 4.83232 12.4573 4.78813 12.4292Z"
									fill="#171517"
								/>
							</g>
						</svg>
					</span>m'inscrire avec Github →</Link
				>
			</div>

			<div class="container-connexion">
				<p>Vous avez déjà un compte ?</p>
				<Link href="/auth/login" variant="border" color="blue">me connecter →</Link>
			</div>
		</div>
		<div class="hero-image">
			<img src="/images/no-img.png" alt="Illustration" />
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
	.hero .container > div {
		width: 50%;
	}
	.hero-content {
		width: 30vw;
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
