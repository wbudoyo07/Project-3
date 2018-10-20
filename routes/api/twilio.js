const router = require("express").Router();
const accountSid = 'AC7a1f584b516e2253227327b3acacddc1';
const authToken = '24fc1bfc0989888a257c39e82b5c1cce';
const client = require('twilio')(accountSid, authToken);

// Matches with "/api/twilio/sendText"
router.get('/sendText', (req, res) => {

    // GET variables, passed via query string
    const { recipient, textMessage } = req.query;

    //Send Text
    client.messages.create({
     body: textMessage,
     to: recipient,
     from: '+16103645619',// number we get from twilio
   })
   .then((message => {
       console.log(message.body);
   }));
});

module.exports = router;