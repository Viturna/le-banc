<script lang="ts">
	let checked = false;

	function toggle() {
		checked = !checked;
	}
</script>

<button class="button" class:active={checked} on:click|preventDefault={toggle}>
	<div class="selector"></div>
</button>

<style lang="scss" scoped>
	.button {
		--selector-size: 10px;
		--padding: 4px;
		width: calc(var(--selector-size) * 2 + var(--padding) * 6);
		height: calc(var(--selector-size) + var(--padding) * 2);
		display: inline-flex;
		align-items: center;
		position: relative;
		border: 1px solid var(--primary-color);
		border-radius: 9999px;
		background-color: var(--secondary-color);
		cursor: pointer;
		padding: 0;
		transition: background-color 0.25s var(--ease-out-cubic);

		&.active {
			background-color: var(--primary-color);
			.selector {
				left: calc(100% - var(--selector-size) - var(--padding));
				background-color: var(--secondary-color);
			}
		}

		.selector {
			width: pxToRem(8);
			height: pxToRem(8);
			border-radius: 50%;
			background-color: var(--primary-color);
			position: absolute;
			top: 50%;
			left: var(--padding);
			transform: translateY(-50%) scale(1.25);
			transition:
				left 0.25s var(--ease-out-cubic),
				background-color 0.25s var(--ease-out-cubic);
		}
	}
</style>
