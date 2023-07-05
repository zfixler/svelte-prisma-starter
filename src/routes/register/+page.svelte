<script>
	let firstName = '';
	let lastName = '';
	let email = '';
	let password = '';
	let confirmPassword = '';

	/**
	 * Compare both passwords to verify that they match.
	 * @param {string} password
	 * @param {string} confirmPassword
	 * @returns {boolean}
	 */
	function validatePassword(password, confirmPassword) {
		if (!password || !confirmPassword) return false;
		return password === confirmPassword;
	}
</script>

<form method="post">
	<label for="firstName">
		First name
		<input type="text" name="firstName" bind:value={firstName} required />
	</label>
	<label for="lastName">
		Last name
		<input type="text" name="lastName" bind:value={lastName} required />
	</label>
	<label for="email">
		Email address
		<input type="email" name="email" bind:value={email} required />
	</label>
	<label for="password">
		Password
		<input type="password" name="password" bind:value={password} required />
	</label>
	<label for="confirmPassword">
		Confirm Password
		<input type="confirmPassword" name="confirmPassword" bind:value={confirmPassword} required />
	</label>
	<button type="submit" disabled={!validatePassword(password, confirmPassword)}>Submit</button>
</form>
