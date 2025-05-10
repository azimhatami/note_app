const express = require('express');
const { authRoutes } = require('./routes/auth');
const { noteRoutes } = require('./routes/note');
const swaggerConfig = require('./config/swagger');

const app = express();

// DB connection
require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Swagger config
swaggerConfig(app)

// Routes
app.use('/auth', authRoutes)
app.use('/', noteRoutes)


app.listen(8000, () => {
  console.log('Server runing on port: 8000, http://localhost:8000');
})
