import mysql from 'mysql2/promise';

const config = mysql.createPool({
    host: '127.0.0.1',
    database: 'license',
    user: 'root',
    password: '',
});

export default config;

// import sql from 'mssql';

// const config = {
//   server: 'SUDIPTO-JABAIT',
//   // server: '192.168.0.113',
//   database: 'license',
//   options: {
//     trustServerCertificate: true,
//     enableArithAbort: true,
//     encrypt: true,
//   },
//   authentication: {
//     type: 'default',
//     options: {
//       userName: '', 
//       password: '', 
//     },
//   },
// };

// const pool = new sql.ConnectionPool(config);

// const poolPromise = pool.connect()
//   .then(pool => {
//     console.log('Connected to SQL Server');
//     return pool;
//   })
//   .catch(err => {
//     console.error('Database Connection Failed! Bad Config:', err);
//     throw err;
//   });

// export default poolPromise;