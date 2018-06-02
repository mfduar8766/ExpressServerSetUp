const express = require('express');
const router = express.Router();

//@route GET api/users/test
//@desc Test route
//@access Public
router.get('/test', (req, res) => res.json({msg: "This is a message"}));

module.exports = router;
