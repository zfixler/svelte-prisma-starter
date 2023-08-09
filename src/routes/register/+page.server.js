import prisma from '$lib/prisma';
import bcrpyt from 'bcrypt';
import { redirect } from '@sveltejs/kit';

/**
 * @typedef { import("@prisma/client").User } User
 * @typedef { import("@prisma/client").Prisma.UserCreateInput } UserCreateInput
 */

/**
 * Add new user to the database
 * @param {UserCreateInput} user
 * @returns {Promise<User>}
 */

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const firstName = form.get('firstName');
		const lastName = form.get('lastName');
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

		if (currentUser) {
			throw redirect(303, '/login');
		}

		const encryptedPassword = await bcrpyt.hash(String(password), 10);

		/**
		 * Adds new user to the database.
		 * @param {UserCreateInput} user
		 * @returns {Promise<User>}
		 */
		await prisma.user.create({
			data: {
				firstName: String(firstName),
				lastName: String(lastName),
				email: String(email),
				password: encryptedPassword,
			},
		});
	},
};
