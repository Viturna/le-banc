<script lang="ts">
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header>
	<a href="/" class="header-logo">
		<img src="/images/logo_white.svg" alt="Logo Le banc" height="42" width="65" />
		<h1>le banc</h1>
	</a>

	<button class="burger-button" on:click={toggleMenu} aria-label="Menu">
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
			<path
				d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
			></path>
		</svg>
	</button>

	<div class="nav-container {isMenuOpen ? 'open' : ''}">
		<nav>
			<ul>
				<li><a href="/" class="nav-link {currentPath === '/' ? 'active' : ''}">accueil</a></li>
				<li>
					<a
						href="/profiles"
						class="nav-link {currentPath.startsWith('/profiles') ? 'active' : ''}"
					>
						les créateurs
					</a>
				</li>
				<li>
					<a
						href="#"
						class="nav-link disabled {currentPath.startsWith('/projects') ? 'active' : ''}"
					>
						les projets
					</a>
				</li>
				<li>
					<a href="/contact" class="nav-link {currentPath === '/contact' ? 'active' : ''}"
						>contact</a
					>
				</li>
			</ul>
		</nav>

		<a
			href="/auth/register"
			class="nav-link auth-link {currentPath === '/auth/register' ? 'active' : ''}"
		>
			connexion/inscription
		</a>
	</div>
</header>

<style lang="scss">
	@use '$lib/styles/base/mixins' as *;

	.header-logo {
		display: flex;
		align-items: center;
		height: 100%;
		z-index: 100;
		text-decoration: none;

		img {
			aspect-ratio: 65 / 42;
			height: 100%;
			width: auto;
			transform: scale(1.25) translateX(toRem(-3));
		}
		h1 {
			font-size: toRem(20);
			color: var(--secondary-color);
			letter-spacing: 0;
			font-weight: bold;
			font-style: italic;
			margin-left: toRem(10);

			@media screen and (max-width: 1200px) {
				display: none;
			}
		}
	}

	header {
		background-color: var(--primary-color);
		color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 35px;
		padding: 4px 16px;
		position: relative;
	}

	.burger-button {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 8px;
		z-index: 100;

		svg {
			width: toRem(32);
			height: toRem(32);
			color: var(--secondary-color);
		}

		@media (max-width: 992px) {
			display: block;
		}
	}

	.nav-container {
		display: flex;
		align-items: center;
		gap: 2.5vw;
		flex-wrap: wrap;
		justify-content: space-evenly;

		@media (max-width: 992px) {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			background: var(--primary-color);
			flex-direction: column;
			justify-content: center;
			gap: toRem(32);
			transform: translateX(100%);
			transition: transform 0.3s ease;
			z-index: 90;

			&.open {
				transform: translateX(0);
			}
		}
	}

	nav ul {
		list-style-type: none;
		display: flex;
		gap: 2.5vw;
		padding: 0;

		@media (max-width: 992px) {
			flex-direction: column;
			align-items: center;
			gap: toRem(24);
		}
	}

	.nav-link {
		display: inline-flex;
		align-items: center;
		border: 1px solid var(--secondary-color);
		color: var(--secondary-color);
		border-radius: 20px;
		padding: 4px 12px;
		text-decoration: none;
		transition:
			background-color 0.2s var(--easeInOutCubic),
			color 0.2s var(--easeInOutCubic);

		@media (max-width: 992px) {
			font-size: toRem(18);
			padding: 8px 16px;
		}

		&.active {
			background-color: var(--secondary-color);
			color: var(--primary-color);
		}

		&:hover {
			background-color: var(--secondary-color);
			color: var(--primary-color);
		}

		&.disabled {
			cursor: not-allowed;
			opacity: 0.5;
			pointer-events: none;
		}
	}

	.auth-link {
		@media (max-width: 992px) {
			margin-top: toRem(16);
		}
	}
</style>
