import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Maya AI backend is live' });
});

app.post('/api/chat', async (req, res) => {
  const { message } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_key_here') {
      return res.json({
        reply: `Maya says: I’m ready to help. You asked: "${message}". Connect your OpenAI API key in .env to enable live intelligent responses.`
      });
    }

    const completion = await openai.chat.completions.create({
      model: process.env.MODEL || 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are Maya, a warm, futuristic AI assistant and digital companion. Speak naturally and supportively.'
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 250
    });

    const reply = completion.choices[0]?.message?.content || 'Maya is thinking...';
    return res.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({
      error: 'Failed to process the request.'
    });
  }
});

app.listen(port, () => {
  console.log(`Maya AI backend running on http://localhost:${port}`);
});
