
//'1DTMN85mKwVv41QQuluNWFh8-Qa_d5OejcHV3IDhzDQ4'
//1DTMN85mKwVv41QQuluNWFh8-Qa_d5OejcHV3IDhzDQ4
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../keys.json');
console.log(creds);
module.exports = async (req, res) => {
    
   try {
      var { name, phone, address } = JSON.parse(req.body);
   } catch (error) {
      console.error('Bad API call at sheetAction:', error);
   }
   const doc = new GoogleSpreadsheet('1DTMN85mKwVv41QQuluNWFh8-Qa_d5OejcHV3IDhzDQ4');
   await doc.useServiceAccountAuth(creds);
   await doc.loadInfo();
   // console.log(doc.title);
   const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
   // console.log(sheet.title);
   // console.log(email);
   var indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
   // indiatime = indiatime.setHours(indiatime.get time.getTimezoneOffset
   // console.log(indiaTime);
   try {
      await sheet.addRow({
         Timestamp: (new Date()).toString(),
         IST: indiaTime,
         Name: name,
         Address: address,
         "Phone number": phone,
         Choice: choice
      });
   } catch (error) {
      console.error(error);
   }
   res.end();
};

