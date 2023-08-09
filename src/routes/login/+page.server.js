import prisma from '$lib/prisma';
import bcrypt from 'bcrypt';
import { redirect, fail } from '@sveltejs/kit';
import { getExpirationDateFromSeconds } from '$lib/utils';

/**
 * @typedef { import("@prisma/client").Session } Session
 * @typedef { import("@prisma/client").Prisma.SessionCreateInput } SessionCreateInput
 */

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');

		/**
		 * Check to see if user already exists in the database.
		 * @param {string} email
		 * @returns {User|null}
		 */
		const currentUser = await prisma.user.findUnique({
			where: {
				email: String(email).toLowerCase(),
			},
		});

		if (!currentUser) {
			throw fail(400, { email, incorrect: true });
		}

		if (await bcrypt.compare(String(password), currentUser.password)) {
			const maxAge = 60 * 60 * 24 * 7;
			const cookie = {
				path: '/',
				httpOnly: true,
				sameSite: true,
				secure: false,
				maxAge,
			};

			const newSession = await prisma.session.create({
				data: {
					userId: currentUser.id,
					expirationDate: getExpirationDateFromSeconds(maxAge),
					cookie: Buffer.from(JSON.stringify(cookie)),
				},
			});

			cookies.set('session_id', newSession.id, cookie);

			throw redirect(303, '/app/profile');
		}
	},
};
