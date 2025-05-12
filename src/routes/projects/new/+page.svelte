<script lang="ts">
    let title = '';
    let description = '';
    let link = '';
    let image: File | null = null;
  </script>
  
  <h1>Créer un projet</h1>
  
  <form method="POST" enctype="multipart/form-data">
    <input bind:value={title} name="title" placeholder="Titre" required />
    <textarea bind:value={description} name="description" placeholder="Description" required></textarea>
    <input bind:value={link} name="link" placeholder="Lien (optionnel)" />
    <input type="file" name="image" accept="image/*" on:change={(e) => image = (e.target as HTMLInputElement).files?.[0] ?? null} />
    <button type="submit">Créer</button>
  </form>
  