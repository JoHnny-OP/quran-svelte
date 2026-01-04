import { chapters } from '$lib/data.js';

/**
 * @typedef {Object} Chapter
 * @property {number} id
 * @property {string} name_simple
 * @property {string} name_arabic
 */

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		return {
			chapters: chapters,
			error: null
		};
	} catch (/** @type {unknown} */ error) {
		console.error('Error loading chapters:', error);
		return {
			chapters: [],
			error: error instanceof Error ? error.message : String(error)
		};
	}
}