const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/check-breach', async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const response = await axios.get(`https://api.dehashed.com/search?query=${encodeURIComponent(email)}`, {
      auth: {
        username: process.env.DEHASHED_EMAIL,
        password: process.env.DEHASHED_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error contacting DeHashed API.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
