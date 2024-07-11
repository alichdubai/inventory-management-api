// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemRoutes);

// MongoDB Connection
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start Server
const port = config.port;
app.listen(port, () => console.log(`Server running on port ${port}`));
