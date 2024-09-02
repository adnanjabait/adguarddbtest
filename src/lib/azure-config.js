// /lib/db.js

import sql from 'mssql';

const config = {
    //   user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // server: process.env.DB_SERVER, 
    // database: process.env.DB_DATABASE,
    user: 'lmsadmin',    
    password: 'lms@##221',
    server: 'licensetestdemo.database.windows.net', 
    database: 'LicenseDB',
    options: {
        encrypt: true, 
        enableArithAbort: true,
    },
};

let pool;

export async function connectToDatabase() {
  try {
    if (!pool) {
      pool = await sql.connect(config);
    }
    return pool;
  } catch (err) {
    console.error('Database connection failed: ', err);
    throw err;
  }
}

export async function queryDatabase(query, params = []) {
  try {
    const pool = await connectToDatabase();
    const request = pool.request();

    params.forEach((param, index) => {
      request.input(`param${index + 1}`, param);
    });

    const result = await request.query(query);
    return result.recordset;
  } catch (err) {
    console.error('Query failed: ', err);
    throw err;
  }
}
