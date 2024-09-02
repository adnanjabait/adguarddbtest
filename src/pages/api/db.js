// import config from '@/lib/config';
import config from '@/lib/azure-config';
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    // if(req.method !== 'POST') {
    //     return res.status(405).json({error : 'Method not allowed'});
    // }

    // const { query, values } = req.body;

    // if (!query) {
    //     return res.status(400).json({ error: 'Query is required' });
    // }

    try {
        const [rows] = await config.query('SELECT TOP 10 * FROM [SalesLT].[Address]', values);
        res.status(200).json({data: rows});
    } catch(error) {
        res.status(500).json({error: error.message});
    }

    
}