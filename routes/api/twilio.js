require('dotenv').config()
const router = require("express").Router();
const accountSid = process.env.ACCOUNT_SID;
const authToken =  process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// Matches with "/api/twilio/sendText"
router.get('/sendText', (req, res) => {

    // GET variables, passed via query string
    const { recipient, textMessage } = req.query;

    //Send Text
    client.messages.create({
     body: textMessage,
     to: recipient,
     from: '+12156080478',// number we get from twilio
   })
   .then((message => {
       console.log(message.body);
   }));
});

module.exports = router;