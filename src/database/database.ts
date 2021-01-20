import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,});

export async function connectDatabase() {
    try {
        if(!client.isConnected()) await client.connect();
    }catch (err) {
        console.log(err);
    }

    return client.db(process.env.DB);
}

export async function closeDatabase() {
    client.close();
}
