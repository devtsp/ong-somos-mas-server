const express = require('express');
const router = express.Router();

router.get('/:organizationId/:access', () => {
  res.json({ msg: 'ok' });
});

module.exports = router;
