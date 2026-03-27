import { Account, Client, Databases, Storage, Functions, ExecutionMethod } from 'appwrite';

const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('69a67fa800077e349212'); // Replace with your Project ID

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const functions = new Functions(client);

// Note: Ensure you set up the correct Bucket ID and Project ID.
const APPWRITE_CONFIG = {
    projectId: '69a67fa800077e349212', // Set your project ID here
    bucketId: '69a692cd003ae3d94f50', // Set your bucket ID for payment proofs here
    functionId: '69a695fb0003e0f9dcbf', // Set your cloud function ID here
    databaseId: '69a6916b000232276647',
    registrationsCollectionId: 'registrations'
};

const getProofPreviewUrl = (fileId) => {
    if (!fileId) {
        return '';
    }

    return storage.getFilePreview(APPWRITE_CONFIG.bucketId, fileId).toString();
};

const getProofDownloadUrl = (fileId) => {
    if (!fileId) {
        return '';
    }

    return storage.getFileDownload(APPWRITE_CONFIG.bucketId, fileId).toString();
};

export { client, account, databases, storage, functions, APPWRITE_CONFIG, ExecutionMethod, getProofPreviewUrl, getProofDownloadUrl };
