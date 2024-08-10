const express = require('express');
const router = express.Router();
const validateCredentials = require('./post/validateAdmin');

// routes
router.post('/api/validate-credential', validateCredentials);


// export the router
module.exports = router;