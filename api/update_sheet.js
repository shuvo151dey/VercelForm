const {google} = require('googleapis');
const keys = require('./keys.json');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const client = new google.auth.JWT(
        keys.client_id,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );
async function gsrun(cl,array){
        const gsapi = google.sheets({version:"v4", auth: cl});
    
        const opt = {
            spreadsheetId: '1DTMN85mKwVv41QQuluNWFh8-Qa_d5OejcHV3IDhzDQ4',
            range: 'Sheet1!A2:Z100',
            valueInputOption: 'USER_ENTERED',
            resource: {values: array}
        };
    
        gsapi.spreadsheets.values.append(opt,
            (err, result) => {
                if (err) {
                  // Handle error
                  console.log(err);
                } else {
                  console.log('%d cells updated.', result.updatedCells);
                }
              }
            );
        
    }

app.post('/form', (req,res) => {
    const { submit, ...rest} = req.body;
    var dataArray = [Object.values(rest)];
    
    
    client.authorize((err,tokens) => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('connected');
            gsrun(client,dataArray);
        }
    });
    
    return res.redirect('/');
    
});
module.exports.handler = serverless(app);

