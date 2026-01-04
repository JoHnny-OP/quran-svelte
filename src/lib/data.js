// Pre-built Quran data for static deployment
export const chapters = [
	{ id: 1, name_simple: "Al-Fatihah", name_arabic: "الفاتحة" },
	{ id: 2, name_simple: "Al-Baqarah", name_arabic: "البقرة" },
	{ id: 3, name_simple: "Ali 'Imran", name_arabic: "آل عمران" },
	{ id: 4, name_simple: "An-Nisa", name_arabic: "النساء" },
	{ id: 5, name_simple: "Al-Ma'idah", name_arabic: "المائدة" },
	// Add more chapters as needed
];

/** @type {Record<number, Array<{sura: number, ayah: number, text: string}>>} */
export const verses = {
	1: [
		{ sura: 1, ayah: 1, text: "بِسۡمِ اللّٰہِ الرَّحۡمٰنِ الرَّحِیۡمِ؎" },
		{ sura: 1, ayah: 2, text: "اَلۡحَمۡدُ لِلّٰہِ رَبِّ الۡعٰلَمِیۡنَ ۙ؎" },
		{ sura: 1, ayah: 3, text: "الرَّحۡمٰنِ الرَّحِیۡمِ ۙ؎" },
		{ sura: 1, ayah: 4, text: "مٰلِکِ یَوۡمِ الدِّیۡنِ ؕ؎" },
		{ sura: 1, ayah: 5, text: "اِیَّاکَ نَعۡبُدُ وَ اِیَّاکَ نَسۡتَعِیۡنُ ؕ؎" },
		{ sura: 1, ayah: 6, text: "اِہۡدِنَا الصِّرَاطَ الۡمُسۡتَقِیۡمَ ۙ؎" },
		{ sura: 1, ayah: 7, text: "صِرَاطَ الَّذِیۡنَ اَنۡعَمۡتَ عَلَیۡہِمۡ غَیۡرِ الۡمَغۡضُوۡبِ عَلَیۡہِمۡ وَ لَا الضَّآلِّیۡنَ ؕ؎" }
	],
	// Add more surahs as needed
};
