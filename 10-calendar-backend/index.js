const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

// Directory Static files
app.use(express.static('public'));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
// TODO CRUD: Events

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
