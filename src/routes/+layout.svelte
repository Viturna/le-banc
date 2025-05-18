<script>
	import '../app.css';
	import { goto, invalidate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	const { data: propsData, children } = $props();
	const { supabase, session } = propsData;

	$effect(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div>
	<div class="container">
		<Header />
		<main>
			{@render children()}
		</main>
		<Footer />
	</div>
</div>

<style lang="scss" global>
	@use '$lib/styles/main.scss' as *;
</style>
