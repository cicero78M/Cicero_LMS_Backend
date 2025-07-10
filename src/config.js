require('dotenv').config();

module.exports = {
  openaiKey: process.env.OPENAI_API_KEY,
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 3000
};
