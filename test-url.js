import { Client, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1')
    .setProject('69a67fa800077e349212');

const storage = new Storage(client);

try {
    const preview = storage.getFilePreview('69a692cd003ae3d94f50', 'some_file_id');
    console.log(typeof preview);
    console.log(preview);
    console.log(preview.toString());
} catch (e) {
    console.error(e);
}
