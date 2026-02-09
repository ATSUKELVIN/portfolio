const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/stats', async (req, res) => {
  try {
    const result = await db.query('SELECT status, COUNT(*) as count FROM projects GROUP BY status');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

module.exports = router;