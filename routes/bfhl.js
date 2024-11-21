const express = require('express');
const router = express.Router();
const { processPostData, getOperationCode } = require('../utils/logic');

// POST: Process JSON data and optional file
router.post('/', processPostData);

// GET: Return operation_code
router.get('/', getOperationCode);

module.exports = router;
