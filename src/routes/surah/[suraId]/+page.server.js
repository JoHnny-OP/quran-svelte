import { surah, db } from '$lib/index.js';
import { error } from '@sveltejs/kit';

/**
 * @typedef {Object} Verse
 * @property {number} sura
 * @property {number} ayah
 * @property {string} text
 */

/**
 * @typedef {Object} Chapter
 * @property {number} id
 * @property {string} name_simple
 * @property {string} name_arabic
 */

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const suraId = parseInt(params.suraId);
	
	if (isNaN(suraId) || suraId < 1 || suraId > 114) {
		throw error(404, 'Surah not found');
	}

	try {
		// Get chapter info
		const chapterStmt = db.prepare('SELECT id, name_simple, name_arabic FROM chapters WHERE id = ?');
		const chapter = chapterStmt.get(suraId);
		
		if (!chapter) {
			throw error(404, 'Surah not found');
		}

		// Get verses for this surah
		const versesStmt = surah.prepare('SELECT sura, ayah, text FROM verses WHERE sura = ? ORDER BY ayah');
		const verses = /** @type {Verse[]} */ (versesStmt.all(suraId));

		return {
			chapter: /** @type {Chapter} */ (chapter),
			verses: verses,
			error: null
		};
	} catch (/** @type {unknown} */ err) {
		console.error('Error loading surah:', err);
		if (err instanceof Error && err.message.includes('404')) {
			throw err;
		}
		return {
			chapter: null,
			verses: [],
			error: err instanceof Error ? err.message : String(err)
		};
	}
}