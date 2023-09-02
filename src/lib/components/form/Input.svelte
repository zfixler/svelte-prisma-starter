<script>
	import { getUuidChunk } from '$lib/utils/frontend';
	export let type = 'text';
	export let label = '';
	export let value = '';
	export const id = `${label.toLowerCase()}_${getUuidChunk(1)}`;
	export let placeholder = '';
	export let required = false;
	export let name = '';

	/**
	 * Set the value of the input based on the input event.
	 * @param {Event & { currentTarget: EventTarget & HTMLInputElement; }} event - The input event;
	 */
	function handleInput(event) {
		const input = /** @type {HTMLInputElement} */ (event.target);
		value = input.value;
	}
</script>

<div class="container">
	{#if label}
		<label class="label" for={id}>{label}</label>
	{/if}
	<input class="input" {type} {value} {id} {placeholder} {name} {required} on:input={handleInput} />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.input {
		padding: 10px 16px;
		font-family: inherit;
		border: none;
		outline: none;
		border-radius: 4px;
		box-shadow: var(--box-shadow);
	}

	.input:focus,
	.input:focus-within,
	.input:active {
		outline: var(--accent) solid 1px;
	}
</style>
