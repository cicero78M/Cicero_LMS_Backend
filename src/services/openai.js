const { Configuration, OpenAIApi } = require('openai');
const config = require('../config');

const openai = new OpenAIApi(new Configuration({
  apiKey: config.openaiKey
}));

async function analyzeText(text, style = 'formal') {
  const prompt = `Analisa teks berikut sesuai indikator: tujuan jelas, logis, detail dan gaya penulisan ${style}. Berikan penilaian skala 0-10 untuk setiap indikator.`;
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: `${prompt}\n\n${text}` }]
  });
  return completion.data.choices[0].message.content;
}

module.exports = { analyzeText };
