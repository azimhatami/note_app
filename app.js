const express = require('express');
const { authRoutes } = require('./routes/auth');
const { noteRoutes } = require('./routes/note');
const swaggerConfig = require('./config/swagger');

const app = express();
const port = process.env.PORT;

// DB connection
require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Swagger config
swaggerConfig(app)

// Routes
app.use('/auth', authRoutes)
app.use('/', noteRoutes)


app.listen(port, () => {
  console.log(`Server runing on port: ${port}, http://localhost:${port}`);
})
