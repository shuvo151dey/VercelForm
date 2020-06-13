import { GoogleSpreadsheet } from 'google-spreadsheet';
import creds from './keys.json';

export default async (req, res) => {
    const { submit, ...rest} = req.body;
   try {
      var { name, phone, address, choice } = JSON.parse(rest);
   } catch (error) {
      console.error('Bad API call at sheetAction:', error);
   }
   const doc = new GoogleSpreadsheet('1N5we6FgDAeKVvYTHAcXPXujxh7-R-39gQAkc7GeoXaQ');
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
