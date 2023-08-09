<script>
	let email = '';
	let password = '';
</script>

<section>
	<form method="post">
		<label for="email">
			Email address
			<input type="email" name="email" bind:value={email} required />
		</label>
		<label for="password">
			Password
			<input type="password" name="password" bind:value={password} required />
		</label>

		<button type="submit">Login</button>
	</form>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 75vh;
	}
	
	form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	label {
		display: flex;
		flex-direction: column;
	}
</style>
