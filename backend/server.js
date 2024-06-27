const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movies');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
connectDB();

app.use('/api/movies', movieRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
