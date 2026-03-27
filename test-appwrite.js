import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1')
    .setProject('69a67fa800077e349212');

const databases = new Databases(client);

async function test() {
    try {
        const response = await databases.listDocuments(
            '69a6916b000232276647',
            'registrations',
            []
        );
        console.log(JSON.stringify(response.documents[0], null, 2));
    } catch (e) {
        console.error(e);
    }
}

test();
