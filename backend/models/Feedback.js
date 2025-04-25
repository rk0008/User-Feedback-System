
const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  text: String,
  category: { type: String, enum: ['bug', 'suggestion', 'feature'], default: 'suggestion' },
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Feedback', feedbackSchema);
