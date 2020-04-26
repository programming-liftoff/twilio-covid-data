const getData = require('./twilio-function').handler;

const context = null
const event = { location: 'California' };
const callback = (_, res) => console.log(res.message);

getData(context, event, callback);
