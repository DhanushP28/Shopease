const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');
// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Middleware
app.use(express.json());
app.use(cors());
// Route imports
const products = require('./routes/product');
const orders = require('./routes/order'); // only if it exists and is valid

connectDatabase();

app.use(express.json())
// Mount routes
app.use('/api/v1', products);
app.use('/api/v1', orders);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});

