import { db } from '../lib/databases';

export async function load() {
	var list = await db.list();

	return {
		notes: list.documents
	};
}
