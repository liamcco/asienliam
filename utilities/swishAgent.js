const fs = require('fs');
const https = require('https');
const axios = require('axios');

const uuid = require('uuid');

const agent = new https.Agent({
  cert: fs.readFileSync('./ssl/public.pem', { encoding: 'utf8' }),
  key: fs.readFileSync('./ssl/private.key', { encoding: 'utf8' }),
  ca: fs.readFileSync('./ssl/Swish_TLS_RootCA.pem', { encoding: 'utf8' }),
});

// Using Axios as HTTP library
const client = axios.create({
  httpsAgent: agent
});

console.log('Agent created');

// getUUID is a custom function to generate a UUID
const instructionId = uuid.v4();

// Setup the data object for the payment
const data = {
  payeePaymentReference: '0123456789',
  callbackUrl: 'https://example.com/swishcallback',
  payeeAlias: '1234679304',
  currency: 'SEK',
  payerAlias: '4671234768',
  amount: '100',
  message: 'Kingston USB Flash Drive 8 GB'
};

client.put(
`https://mss.cpc.getswish.net/swish-cpcapi/api/v2/paymentrequests/${instructionId}`,
  data
).then((res) => {
   console.log('Payment request created')
}).catch((err) => {
  console.log(err);
});