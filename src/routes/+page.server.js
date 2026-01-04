import { db } from '$lib/index.js';

/**
 * @typedef {Object} Chapter
 * @property {number} id
 * @property {string} name_simple
 * @property {string} name_arabic
 */

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const stmt = db.prepare('SELECT id, name_simple, name_arabic FROM chapters ORDER BY id');
		const chapters = /** @type {Chapter[]} */ (stmt.all());
		
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