const { Client, LocalAuth } = require('whatsapp-web.js');

function createClient() {
  return new Client({
    authStrategy: new LocalAuth()
  });
}

module.exports = createClient;
