import { error } from '@sveltejs/kit';
import { deleteUserSessions } from '$lib/utils/backend';

/** @type {import('./$types').RequestHandler} */
export async function POST({ cookies, locals }) {
	// Delete current session in database
	const sessionId = cookies.get('session_id');

	if (!sessionId) throw error(400);

	await deleteUserSessions(sessionId, locals.user.id);

	// Delete current cookie
	cookies.delete('session_id');

	// Delete user from locals
	locals.user = null;

	return new Response();
}
