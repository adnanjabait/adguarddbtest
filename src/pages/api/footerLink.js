import mysql from 'mysql2/promise'

export default async function handler(req, res) {
    const db = mysql.createPool({
        host: '127.0.0.1',
        database: 'license',
        user: 'root',
        password: '',
    });

    const [rows] = await db.query('SELECT * FROM linkwithtext where section = \'footerlink\'')
    res.status(200).json(rows)


    // res.status(200).json({
    //     1: {text:"「イマドコサーチ」「ケータイお探しサービス」利用の皆さまへのお知らせ",link:"https://stgadg.mopita.com/dcmichi"}, 
    //     2: {text:"「ahamo」「LINEMO」「ドコモ払い」をご利用予定またはご利用中の皆様へのお知らせ",link:"https://stgadg.mopita.com/anahamolinemo"}
    // });
}