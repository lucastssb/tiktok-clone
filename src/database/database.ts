import { MongoClient } from 'mongodb';
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,});

export async function connectDatabase() {
    try {
        if(!client.isConnected()) await client.connect();
    }catch (err) {
        console.log(err);
    }

    return client.db('tiktok');
}

export async function closeDatabase() {
    client.close();
}
