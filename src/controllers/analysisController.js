const { analyzeText } = require('../services/openai');
const { saveAnalysis } = require('../services/db');

function formatResult(result) {
  return `Hasil analisis:\n${result}`;
}

async function handleMessage(msg) {
  const text = msg.body;
  const style = 'formal';
  const result = await analyzeText(text, style);
  await saveAnalysis(text, style, result);
  await msg.reply(formatResult(result));
}

module.exports = { handleMessage };
