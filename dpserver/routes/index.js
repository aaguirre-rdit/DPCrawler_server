var express = require('express');
var router = express.Router();
var exerciseRouter = require('../routes/exercises');
var submissionRouter = require('../routes/submissions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'DP Server' });
});
router.use('/exercises',exerciseRouter);
router.use('/submissions',submissionRouter);

module.exports = router;
