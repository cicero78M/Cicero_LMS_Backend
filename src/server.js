const express = require('express');
const createClient = require('./whatsapp/client');
const { handleMessage } = require('./controllers/analysisController');
const config = require('./config');

const app = express();
app.use(express.json());

const waClient = createClient();

waClient.on('qr', qr => {
  console.log('QR RECEIVED', qr);
});

waClient.on('ready', () => {
  console.log('WA Client ready');
});

waClient.on('message', msg => {
  handleMessage(msg).catch(err => {
    console.error(err);
    msg.reply('Error analyzing text.');
  });
});

app.listen(config.port, () => {
  console.log('Server running on port', config.port);
  waClient.initialize();
});
