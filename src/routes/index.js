const express = require('express')
const V1Routes = require('./v1')
const router = express.Router();


router.use('/v1',V1Routes)


module.exports = router;