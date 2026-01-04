import Database from 'better-sqlite3';
const db = new Database('data/surahlist.sqlite');
const surah = new Database('data/arabic_indopak.sqlite');
export { db, surah };
