<script>
	import { goto } from '$app/navigation';
	async function handleLogout() {
		await fetch('../api/logout', { method: 'POST' });
		goto('/login');
	}
</script>

<nav>
	<button on:click={handleLogout}>Logout</button>
</nav>
<slot />
