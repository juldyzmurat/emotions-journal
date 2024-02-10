const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.json({ data: 'Hello world!' });
  console.log(`REQ: GET / from ${req.ip}`);
});

app.listen(port, () => {
  console.log(`Backend is listening on port ${port}...`);
});
