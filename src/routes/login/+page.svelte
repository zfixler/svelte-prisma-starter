<script>
	import { Form } from '$lib/components';
	let email = '';
	let password = '';
</script>

<section class="section">
	<h1>Welcome back! <span class="subtext">Login below to get started.</span></h1>
	<Form.Form action="/login">
			<Form.Input name="email" label="Email" type="email" bind:value={email}/>
			<Form.Input name="password" label="Password" type="password" bind:value={password}/>
		<Form.Button type="submit" disabled={!(email && password)}>Login</Form.Button>
	</Form.Form>
	<a href="/register" class="link">Need an account? Click here to register.</a>
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