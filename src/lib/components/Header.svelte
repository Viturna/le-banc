<script lang="ts">
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
</script>

<header>
	<a href="/" class="header-logo">
		<img src="/images/header-logo.svg" alt="Logo Le banc" />
	</a>
	<nav>
		<ul>
			<li><a href="/" class="nav-link {currentPath === '/' ? 'active' : ''}">accueil</a></li>
			<li>
				<a href="/profiles" class="nav-link {currentPath.startsWith('/profiles') ? 'active' : ''}"
					>les créateurs</a
				>
			</li>
			<li>
				<a href="#" class="nav-link disabled {currentPath.startsWith('/projects') ? 'active' : ''}"
					>les projets</a
				>
			</li>
			<li>
				<a href="/contact" class="nav-link {currentPath === '/contact' ? 'active' : ''}">contact</a>
			</li>
		</ul>
	</nav>
	<a href="/auth/register" class="nav-link {currentPath === '/auth/register' ? 'active' : ''}"
		>S'inscrire</a
	>
</header>

<style>
	.header-logo {
		display: flex;
		align-items: center;
	}
	header img {
		width: 185px;
	}
	header {
		background-color: var(--primary-color);
		color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 35px;
		padding: 2px 0;
		padding-right: 16px;
	}
	nav {
		display: flex;
		justify-content: space-between;
	}
	nav ul {
		list-style-type: none;
		display: flex;
		gap: 3.5vw;
	}

	.nav-link {
		display: inline;
		border: 1px solid var(--secondary-color);
		color: var(--secondary-color);
		border-radius: 20px;
		padding: 2px 8px;
		text-decoration: none;
		font-size: 18px;
	}
	.nav-link.active {
		background-color: var(--secondary-color);
		color: var(--primary-color);
	}
	.nav-link:hover {
		text-decoration: underline;
	}
	.nav-link.disabled {
		cursor: not-allowed;
		opacity: 0.5;
		pointer-events: none;
		text-decoration: none;
	}
</style>
