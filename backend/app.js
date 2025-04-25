
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const feedbackRoutes = require('./routes/feedback');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/feedback', feedbackRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on http://localhost:5000')))
  .catch(err => console.log(err));
