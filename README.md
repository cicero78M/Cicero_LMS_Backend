# Cicero_LMS_Backend

Example Node.js backend using whatsapp-web.js and OpenAI API to analyze text.

## Setup

1. Install dependencies

```bash
PUPPETEER_SKIP_DOWNLOAD=true npm install
```

2. Create `.env` file:

```
OPENAI_API_KEY=your_openai_key
DATABASE_URL=postgresql://user:password@host:port/dbname
PORT=3000
```

3. Run server

```bash
npm start
```

The WhatsApp client will provide a QR code on first run for authentication. Messages sent to the bot will be analyzed using OpenAI and stored in PostgreSQL table `analyses`.

## Project structure

- `src/server.js` – sets up Express and WhatsApp clients
- `src/services/` – OpenAI and database helpers
- `src/controllers/` – request/message handlers

