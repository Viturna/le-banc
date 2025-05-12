<script lang="ts">
    export let data;
    const project = data.project;
  </script>
  
  <svelte:head>
    <title>{project.title} | Projet</title>
  </svelte:head>
  
  <h1>{project.title}</h1>
  
  <p><strong>Description :</strong> {project.description}</p>
  
  {#if project.link}
    <p><strong>Lien :</strong> <a href={project.link} target="_blank">{project.link}</a></p>
  {/if}
  
  {#if project.images?.length}
    <div>
      <h3>Image</h3>
      <img src={project.images[0]} alt="Image du projet" style="max-width: 400px;" />
    </div>
  {/if}
  
  <!-- Créé par information removed as 'creator' property does not exist -->
  <!-- <p><strong>Créé par :</strong> {project.creator?.username}</p> -->
  