import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
       try {
        let fileName = Date.now() + Math.random()+'_release.txt';

        const filePath = path.resolve('.', 'custom_logs/'+fileName);
        
        let requestString = '';
        requestString += 'headers: '+JSON.stringify(req.headers);
        requestString += '\nbody: '+JSON.stringify(req.body);
        requestString += '\nquery: '+JSON.stringify(req.query);
        requestString += '\ncookies: '+JSON.stringify(req.cookies);
        fs.writeFile(filePath,requestString,{flag: 'a+'},(err)=>{
            console.log('File written!');
        });

        res.status(200).send('OK¥n');
    } catch(error) {
        console.log(error)
        // res.status(500).json({error: "error"});
        res.status(200).send('NG¥n');
    }

    
}