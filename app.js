const express = require('express');
const { authRoutes } = require('./routes/auth');

const app = express();

// DB connection
require('./config/db');

app.use(express.json());

// Routes
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello'
  });
})


app.listen(8000, () => {
  console.log('Server runing on port: 8000, http://localhost:8000');
})
