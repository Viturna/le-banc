<script lang="ts">
	import { enhance } from '$app/forms';
	import { formData } from 'zod-form-data';

      const { data } = $props();
      const { userProfile } = data;

      $inspect(data.user);``

      let firstName = $state("")
      let lastName = $state("")
      let email = $state("")

      $effect(() => {
            if (userProfile) {
                  firstName = userProfile.firstName;
                  lastName = userProfile.lastName;
                  email = userProfile.email;
            }        
      })
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#if userProfile}
  <p>Welcome</p>
  <a href="/auth/logout">Logout</a>

  <form method="POST" use:enhance={({formData}) => {
      formData.set('firstName', firstName);
      formData.set('lastName', lastName);
      formData.set('email', email);
      return ({result}) => {
            if (result.type === 'success') {
                  console.log('Form submitted successfully');
            } else {
                  console.error('Form submission failed');
            }
      }
}}>
      <div>
            <label for="email">Email</label>
            <input type="text" name="email" id="email" bind:value={email} />
      </div>
      <div>
            <label for="firstname">Prénom</label>
            <input type="text" name="firstname" id="firstname" bind:value={firstName}/>
      </div>
      <div>
            <label for="lastname">Nom</label>
            <input type="text" name="lastname" id="lastname" bind:value={lastName}/>
      </div>
      <button type="submit">Update</button>
  </form>
{:else}
  <p>You are not logged in</p>
  <a href="/auth/login">Login</a>
{/if}


<style>
      div{
      background-color: aquamarine;
      }
</style>