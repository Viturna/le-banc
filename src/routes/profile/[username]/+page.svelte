<!-- src/routes/profile/[username]/+page.svelte -->
<script lang="ts">
	export let data: {
		userProfile: {
			firstName: string;
			lastName: string;
			email: string;
			username: string;
			quote?: string;
		};
	};
</script>

<h1>{data.userProfile.firstName} {data.userProfile.lastName}</h1>
<p>Email: {data.userProfile.email}</p>
<p>Username: {data.userProfile.username}</p>
{#if data.userProfile.quote}
	<p>Quote: {data.userProfile.quote}</p>
{/if}
