const { Pool } = require('pg');
const config = require('../config');

const pool = new Pool({ connectionString: config.databaseUrl });

async function saveAnalysis(text, style, result) {
  const client = await pool.connect();
  try {
    await client.query(
      'INSERT INTO analyses(text, style, result) VALUES ($1, $2, $3)',
      [text, style, result]
    );
  } finally {
    client.release();
  }
}

module.exports = { pool, saveAnalysis };
