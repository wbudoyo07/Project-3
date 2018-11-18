require('dotenv').config()
const router = require("express").Router();
const accountSid = "AC8bf83e35aba5d33ad2bbfd66c94cace1";
const authToken =  "95365de33c694579fc288425a5c1a916";
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