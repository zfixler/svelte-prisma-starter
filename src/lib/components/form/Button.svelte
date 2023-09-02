<script>
	export let type = 'submit';
    export let disabled = false;
	/**
	 * Ensure only defined type is passed through to button.
	 * @param {string} type - Component prop 'type'
	 * @returns {('submit'|'reset'|'button'|null)} ('submit'|'reset'|'button'|null)
	 */
	function getType(type) {
		const allowedTypes = ['submit', 'reset', 'button'];
		if (allowedTypes.includes(type)) return /** @type {('submit'|'reset'|'button')}*/ (type);
		return null;
	}
</script>

<button type={getType(type)} disabled={disabled} class="button">
    <slot />
</button>

<style>
	.button {
        background-color: var(--accent);
        color: var(--secondary);
        padding: 10px 16px;
        cursor: pointer;
        transition: all ease .2s;
        outline: none;
        border: none;
        box-shadow: var(--box-shadow);
        border-radius: 4px;
        font-family: inherit;
        font-weight: bold;
        font-size: inherit;
        letter-spacing: 1px;
	}

    .button:hover,
    .button:focus {
        background-color: var(--accent-dark);
    }
</style>
