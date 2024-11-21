const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors'); // Import cors

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Dummy storage for uploaded files
const upload = multer({ dest: 'uploads/' });

// Route imports
const bfhlRoutes = require('./routes/bfhl');

// Use routes
app.use('/bfhl', bfhlRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
