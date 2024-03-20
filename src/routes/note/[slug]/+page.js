import { db } from '../../../lib/databases';

export async function load({ params }) {
	return {
		note: await db.get(params.slug)
	};
}
