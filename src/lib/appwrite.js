import { PUBLIC_PROJECT_ID } from '$env/static/public';
import { Client, Databases } from 'appwrite';

const client = new Client()
	.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
	.setProject(PUBLIC_PROJECT_ID); // Your project ID

export const databases = new Databases(client);
