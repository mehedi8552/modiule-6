
const express = require('express');
const app = express();


app.get('/success', (req, res) => {
 
  res.status(200).send('Success: Resource Found!');
});


app.get('/notfound', (req, res) => {

  res.status(404).send('Error 404: Resource Not Found');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
