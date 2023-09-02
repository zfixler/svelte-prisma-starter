import prisma from '$lib/prisma';
/**
 * Takes in seconds and adds them to the current date.
 * @param {number} seconds - The number of seconds to add.
 * @returns {string} - ISO date string.
 */
export const getExpirationDateFromSeconds = (seconds) => {
	const currentDate = new Date();
	const expirationDate = new Date();
	expirationDate.setDate(currentDate.getDate() + seconds / 60 / 60 / 24);
	return expirationDate.toISOString();
};

/**
 * Check for current session or expired sessions associated with a specific user and delete them.
 * @param {string} sessionId - UUID of session.
 * @param {string} userId - UUID of user.
 */
export const deleteUserSessions = async (sessionId, userId) => {
	await prisma.session.deleteMany({
		where: {
			OR: [
				{
					id: sessionId,
				},
				{
					expirationDate: {
						lte: new Date().toISOString(),
					},
				},
			],
            AND: {
                userId: userId
            }
		},
	});
};
