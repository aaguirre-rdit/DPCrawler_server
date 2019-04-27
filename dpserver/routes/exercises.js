const express = require('express');

const router = express.Router();

const exerciseController = require(`../controllers/exercise`);

router.get('/',exerciseController.getExerciseList);
router.get('/:id',exerciseController.getExerciseById);

module.exports = router;
