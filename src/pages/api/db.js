// src/pages/api/db.js
import poolPromise from '@/lib/config';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    try {
        const pool = await poolPromise; // Wait for the pool connection
        const result = await pool.request().query(query); // Execute the query
        res.status(200).json({ data: result.recordset });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
