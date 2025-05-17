<script lang="ts">
	export let color: 'blue' | 'red' | 'black' = 'blue';
	export let href: string = '#';
	export let variant: 'border' | 'fill' = 'border';
</script>

<a {href} class="button {color} {variant}">
	<span class="icon">
		<slot name="icon-left" />
	</span>
	<span class="label">
		<slot>Click me!</slot>
	</span>
</a>

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px; /* espace entre icône et texte */
		text-decoration: none;
		padding: 12px 16px;
		cursor: pointer;
		font-size: 18px;
		border-style: solid;
		border-width: 1px 3px 3px 1px;
	}

	.icon {
		display: inline-flex;
		align-items: center;
	}

	.label {
		display: inline-flex;
		align-items: center;
	}

	/* VARIANTS... (inchangés, mêmes styles que toi) */
	.button.border {
		background-color: transparent;
	}
	.button.border.blue {
		border-color: var(--primary-color);
		color: var(--primary-color);
	}
	.button.border.red {
		border-color: var(--accent-color);
		color: var(--accent-color);
	}
	.button.border.black {
		border-color: var(--black-color);
		color: var(--black-color);
	}
	.button.border.blue:hover {
		background-color: var(--primary-color);
		color: var(--secondary-color);
	}
	.button.border.red:hover {
		background-color: var(--accent-color);
		color: var(--secondary-color);
	}
	.button.border.black:hover {
		background-color: var(--black-color);
		color: var(--secondary-color);
	}

	.button.fill.blue {
		background-color: var(--primary-color);
		border-color: var(--dark-primary-color);
		color: var(--secondary-color);
	}
	.button.fill.red {
		background-color: var(--accent-color);
		color: var(--secondary-color);
	}
	.button:active {
		border-width: 1px;
	}
</style>
