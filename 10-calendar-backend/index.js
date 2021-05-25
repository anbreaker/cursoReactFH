const express = require('express');

const app = express();

const port = 4000;

// Routes
app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
