
const express = require('express');
const app = express();


app.get('/', (req, res) => {

  res.cookie('name', 'JohnDoe');
  res.cookie('language', 'en');
  res.cookie('theme', 'dark', { maxAge: 900000, httpOnly: true });
  

  res.send('Cookies set successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
