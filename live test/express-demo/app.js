// A) Creating a Simple String Response with Express.js
const express = require('express');
const app = express();


app.get('/data', (req, res) => {

  res.send('Hello, Express JS!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
