<script lang="ts">
	export let color: 'blue' | 'red' = 'blue';
	export let href: string = '#';
</script>

<a {href} class="button {color}">
	<slot>Click me!</slot>
</a>

<style>
	.button {
		text-decoration: none;
		border-style: solid;
		border-width: 1px 3px 3px 1px;
		padding: 6px 12px;
		cursor: pointer;
		font-size: 18px;
	}

	.button.blue {
		border-color: var(--primary-color);
		color: var(--primary-color);
	}

	.button.red {
		border-color: var(--accent-color);
		color: var(--accent-color);
	}

	.button.blue:hover {
		background-color: var(--primary-color);
		color: var(--secondary-color);
	}
	.button.red:hover {
		background-color: var(--accent-color);
		color: var(--secondary-color);
	}
	.button:active {
		border-width: 1px;
	}
</style>
