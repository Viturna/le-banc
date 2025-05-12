<script context="module" lang="ts">
    import type { LoadEvent } from '@sveltejs/kit';

    export async function load({ url }: LoadEvent) {
      const message = url.searchParams.get('message');
      return { props: { message } };
    }
  </script>
  
  <script lang="ts">
    export let message: string;
  </script>
  
  <h1>Erreur</h1>
  {#if message}
    <p>{message}</p>
  {:else}
    <p>Une erreur est survenue.</p>
  {/if}
  