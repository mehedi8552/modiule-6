
const express = require('express');
const app = express();


app.get('/clearcookies', (req, res) => {

  res.clearCookie('name');
  res.clearCookie('language');
  res.clearCookie('theme');
  

  res.send('Cookies have been cleared!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
