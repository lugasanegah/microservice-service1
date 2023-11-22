const express = require('express');
const path = require('path');
const { callService2, callService3 } = require('./controller');

const app = express();

// Menangani permintaan ke Service 2
app.get('/api/callService2', async (req, res) => {
  try {
    const result = await callService2();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Menangani permintaan ke Service 3
app.get('/api/callService3', async (req, res) => {
  try {
    const result = await callService3();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Menyajikan berkas statis seperti index.html
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3080;
app.listen(PORT, () => {
  console.log(`Server Service 1 berjalan di http://localhost:${PORT}`);
});
