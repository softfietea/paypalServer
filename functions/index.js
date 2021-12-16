const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const braintree = require('braintree');

var gateway = new braintree.BraintreeGateway({
    environment:  braintree.Environment.Production,
    merchantId:   'mhmfxcfrgwwftpcq',
    publicKey:    'b5pdms8cpk6z52r8',
    privateKey:   '5c47d02e3cb1998170f354a76799f77b'
});



exports.paypalPayment = functions.https.onRequest(async (req, res) => {
const nonceFromTheClient = req.body.payment_method_nonce;
const deviceData = req.body.deviceData;
const amount = req.body.amount;


gateway.

gateway.transaction.sale({
    
    amount: amount,
    paymentMethodNonce: nonceFromTheClient,
    deviceData: deviceData,
    options: {
        submitForSettlement:true
    }

},(err, result) => {
    if (err != null){
        console.log(err);
    }else{
        res.json({
            result: 'success'
        });
    }
});
});