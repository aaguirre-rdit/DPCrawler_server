const express = require('express');

const router = express.Router();

const submissionController = require(`../controllers/submission`);

router.post('/',submissionController.submitExercise);

module.exports = router;
