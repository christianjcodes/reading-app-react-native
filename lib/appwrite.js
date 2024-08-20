import { Account, Client } from 'react-native-appwrite';
import { ID } from 'react-native-appwrite';

export const appwriteConfig = {
	endpoint: 'https://cloud.appwrite.io/v1',
	platform: 'com.christianjcodes.reader',
	projectId: '66c4647400024654b968',
	databaseId: '66c466c100334b073696',
	userCollectionId: '66c466f100236c20265f',
	storageId: '66c46860002f2c1481aa'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Project ID
    .setPlatform(appwriteConfig.platform) // Application ID or bundle ID.

	const account = new Account(client);

	export const createUser = () => {

		account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
			.then(function (response) {
				console.log(response);
			}, function (error) {
				console.log(error);
			});
	}

	

;

