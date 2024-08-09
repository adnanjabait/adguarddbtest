import mysql from 'mysql2/promise';

const config = mysql.createPool({
    host: '127.0.0.1',
    database: 'license',
    user: 'root',
    password: '',
});

export default config;