<script lang="ts">
	export let label: string;
	export let name: string;
	export let type: string = 'text';
	export let required: boolean = false;
	export let value: string = '';
	export let placeholder: string;
</script>

<div class="input-group">
	<label for={name}>{label}</label>
	<input id={name} {placeholder} {name} {type} bind:value {required} class="input" />
</div>

<style>
	.input-group {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	label {
		color: var(--primary-color);
	}

	.input {
		width: 30vw;
		border-radius: 8px;
		padding: 8px 12px;
		border: 1px solid var(--primary-color);
		color: var(--primary-color);
		background-color: #f5f7ff;
		font-size: 16px;
		font-family: 'Space Mono';
	}
	.input::placeholder {
		color: #b3b3b3;
		font-family: 'Space Mono';
	}
</style>
