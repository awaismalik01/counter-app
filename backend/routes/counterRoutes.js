const express = require('express');
const router = express.Router();
const Counter = require('../models/Counter');

router.get('/', async (req, res) => {
  try {
    const counter = await Counter.find();
    console.log(counter);
    res.json(counter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/addcounter', async (req, res) => {
  try {
    const { count } = req.body;
    const newcounter = await Counter.create({ count });
    newcounter.save();
    res.json(newcounter);
   
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
