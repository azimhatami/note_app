const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello'
  });
})


app.listen(8000, () => {
  console.log('Server runing on port: 8000, http://localhost:8000');
})
