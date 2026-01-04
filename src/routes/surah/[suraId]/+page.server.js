import { chapters, verses } from '$lib/data.js';
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
		const chapter = chapters.find(c => c.id === suraId);
		
		if (!chapter) {
			throw error(404, 'Surah not found');
		}

		// Get verses for this surah
		const surahVerses = verses[suraId] || [];

		return {
			chapter: chapter,
			verses: surahVerses,
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