import { NextApiRequest, NextApiResponse } from 'next';
import { connectDatabase, closeDatabase } from '../../database/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await connectDatabase();
    const data = await db.collection('posts').find().toArray();
    res.statusCode = 200;
    res.json(JSON.parse(JSON.stringify(data)));

    closeDatabase();
};
