<script>
	import { Form } from '$lib/components';

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

<section class="section">
	<h1>Register an account. <span class="subtext">Start posting and commenting today.</span></h1>
	<Form.Form method="post">
		<Form.Input type="text" label="First name" value={firstName} required={true} />
		<Form.Input type="text" label="Last name" value={lastName} required={true} />
		<Form.Input type="email" label="Email" value={email} required={true} />
		<Form.Input type="password" label="Password" value={password} required={true} />
		<Form.Input type="password" label="Confirm password" value={confirmPassword} required={true} />
		<Form.Button type="submit" disabled={!validatePassword(password, confirmPassword)}>Submit</Form.Button>
	</Form.Form>
	<a href="/login" class="link">Already have an account? Click here to login.</a>
</section>

<style>
	.section {
		width: min(600px, 90%);
		padding: 36px;
		border-radius: 4px;
		margin: 0 auto;
	}

	.subtext {
		font-weight: normal;
		display: block;
		margin-top: 8px;
		font-size: var(--fs-h2);
	}

	.link {
		text-decoration: none;
		color: inherit;
		display: block;
		margin-top: 8px;
		text-align: center;
	}
</style>
