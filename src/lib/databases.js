import { PUBLIC_DATABASE_ID, PUBLIC_COLLECTION_NOTES } from '$env/static/public';
import { ID } from 'appwrite';
import { databases } from './appwrite';

export const db = {
	add: async (title, body) => {
		return await databases.createDocument(
			PUBLIC_DATABASE_ID,
			PUBLIC_COLLECTION_NOTES,
			ID.unique(),
			{
				title,
				body
			}
		);
	},

	list: async () => {
		return await databases.listDocuments(PUBLIC_DATABASE_ID, PUBLIC_COLLECTION_NOTES);
	},

	get: async (id) => {
		return await databases.getDocument(PUBLIC_DATABASE_ID, PUBLIC_COLLECTION_NOTES, id);
	}
};
