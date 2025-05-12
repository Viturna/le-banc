<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	export let data;
</script>

<h1>Tous les projets</h1>

<Link color="blue" href="/projects/new">ajouter un projet →</Link>
{#if data.projects.length === 0}
	<p>Aucun projet pour le moment.</p>
{:else}
	<div class="grid">
		{#each data.projects as project}
			<div class="card">
				<h2>{project.title}</h2>
				<p>{project.description}</p>

				{#if project.link}
					<a class="link" href={project.link} target="_blank">🔗 Voir le lien</a>
				{/if}

				{#if project.images && project.images.length > 0}
					<div>
						<h3>Images :</h3>
						<div class="project-images">
							{#each project.images as image}
								<img src={image} alt={project.title} class="project-image" />
							{/each}
						</div>
					</div>
				{/if}

				<a href={`/projects/${project.id}`}> Voir le projet</a>
			</div>
		{/each}
	</div>
{/if}

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.card {
		background-color: #fff;
		border: 1px solid #ddd;
		padding: 1rem;
	}

	.card h2 {
		margin-top: 0;
		font-size: 1.25rem;
	}

	.card p {
		margin: 0.5rem 0 1rem;
	}

	.link {
		display: inline-block;
		margin-bottom: 1rem;
		color: #0070f3;
		text-decoration: none;
	}

	.link:hover {
		text-decoration: underline;
	}

	.project-images {
		display: flex;
		gap: 0.5rem;
		overflow-x: auto;
	}

	.project-image {
		width: 80px;
		height: 80px;
		object-fit: cover;
		border: 1px solid #ccc;
	}
</style>
