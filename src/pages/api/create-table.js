import { queryDatabase } from '@/lib/azure-config';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { tableName, siteName, source, sourcetable, link } = req.body;

    if (!tableName || !siteName || !source) {
        return res.status(400).json({ error: 'Table name, site name, and source are required' });
    }

    // Construct the SQL query to create a new table
    const createTableQuery = `
        IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = N'${tableName}')
        BEGIN
            EXEC('
                CREATE TABLE [dbo].[SiteTable] (
                    [id] INT PRIMARY KEY IDENTITY(1,1),
                    [name] NVARCHAR(255) NOT NULL,
                    [source] NVARCHAR(255) NOT NULL,
                    [sourcetable] NVARCHAR(255) NULL,
                    [link] NVARCHAR(255) NULL
                )
            ')
        END
    `;

    try {
        await queryDatabase(createTableQuery);

        // Insert values into the table if it exists
        // const insertValuesQuery = `
        //     INSERT INTO [dbo].[${tableName}] (name, source, sourcetable, link)
        //     VALUES ('${siteName}', '${source}', ${sourcetable ? `'${sourcetable}'` : 'NULL'}, ${link ? `'${link}'` : 'NULL'})
        // `;
        const insertValuesQuery = `
            INSERT INTO [dbo].[SiteTable] (name, source, sourcetable, link)
            VALUES ('${siteName}', '${source}', ${tableName ? `'${tableName}'` : 'NULL'}, ${link ? `'${link}'` : 'NULL'})
        `;

        await queryDatabase(insertValuesQuery);

        res.status(200).json({ message: 'Table created and data inserted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
