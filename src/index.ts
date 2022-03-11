import 'dotenv/config';

import { app } from './app.js';

const port = process.env.PORT || 4000;

// <-- Server listenning -->
app.listen(port, () => {
  console.log(`Listening server on Port -> http://localhost:${port}`);
});
