<script>
	let email = '';
	let password = '';
</script>

<section class="container mx-auto my-10">
	<form method="post" class="flex flex-col gap-4 max-w-sm mx-auto">
		<label for="email" class="flex flex-col gap-1">
			Email address
			<input type="email" name="email"  class="rounded shadow py-1 px-2" bind:value={email} required />
		</label>
		<label for="password" class="flex flex-col gap-1">
			Password
			<input type="password" name="password" class="rounded shadow py-1 px-2" bind:value={password} required />
		</label>
		<button type="submit" class="bg-blue-600 text-white py-1 rounded shadow hover:bg-blue-700">Login</button>
	</form>
</section>