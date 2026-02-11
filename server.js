require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY || OPENAI_API_KEY === 'sk-proj-your-api-key-here') {
  console.error('❌ API ключ не настроен!');
  process.exit(1);
}

// ✅ CORS ДЛЯ GITHUB PAGES (ЗАМЕНИЛ cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://dreamnewly.github.io');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, model, temperature, max_tokens } = req.body;
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: model || 'gpt-3.5-turbo',
        messages: messages,
        temperature: temperature || 0.8,
        max_tokens: max_tokens || 150
      })
    });

    const data = await response.json();
    
    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер на http://localhost:${PORT}`);
});
