
//'1DTMN85mKwVv41QQuluNWFh8-Qa_d5OejcHV3IDhzDQ4'
//1DTMN85mKwVv41QQuluNWFh8-Qa_d5OejcHV3IDhzDQ4
const {google} = require('googleapis');
const creds = require('../keys.json');
console.log(creds);
module.exports = async (req, res) => {
    
   const client = new google.auth.JWT(
      keys.client_id,
      null,
      keys.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
  );
async function gsrun(cl,array){
      const gsapi = await google.sheets({version:"v4", auth: cl});
  
      const opt = {
          spreadsheetId: '1DTMN85mKwVv41QQuluNWFh8-Qa_d5OejcHV3IDhzDQ4',
          range: 'Sheet1!A2:Z100',
          valueInputOption: 'USER_ENTERED',
          resource: {values: array}
      };
  
      await gsapi.spreadsheets.values.append(opt,
          (err, result) => {
              if (err) {
                // Handle error
                console.log(err);
              } 
            }
          );
      
  }

  client.authorize((err,tokens) => {
      if(err) {
          console.log(err);
          return;
      } else {
          console.log('connected');
          gsrun(client,[JSON.parse(req.body),]);
      }
  });
   res.end();
};

