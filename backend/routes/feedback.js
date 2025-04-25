
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const { category, sortBy } = req.query;
    let query = category ? { category } : {};
    let feedback = await Feedback.find(query).sort(sortBy ? { [sortBy]: 1 } : { timestamp: -1 });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
