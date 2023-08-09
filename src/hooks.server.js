import prisma from '$lib/prisma';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const { cookies } = event;
	const sessionId = cookies.get('session_id');

	if (sessionId) {
		const session = await prisma.session.findUnique({
			where: {
				id: sessionId,
			},
		});

		if (session) {
			const user = await prisma.user.findUnique({
				where: {
					id: session.userId,
				},
				select: {
					id: true,
					firstName: true,
					lastName: true,
					email: true,
				},
			});

			event.locals.user = user;

			if (event.url.pathname.startsWith('/login') || event.url.pathname.startsWith('/register')) {
				return new Response('Redirect', { status: 303, headers: { Location: '/app/profile' } });
			}
		}

		if (!session) {
			cookies.delete('session_id', { path: '/login' });
		}
	}

	const response = await resolve(event);
	return response;
}
