export const appwriteConfig = {
	endpoint: 'https://cloud.appwrite.io/v1',
	platform: 'com.christianjcodes.reader',
	projectId: '66c4647400024654b968',
	databaseId: '66c466c100334b073696',
	userCollectionId: '66c466f100236c20265f',
	storageId: '66c46860002f2c1481aa'
}

import { Client } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj') // Your project ID
    .setPlatform('com.example.myappwriteapp') // Your application ID or bundle ID.
;