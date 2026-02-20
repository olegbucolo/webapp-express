const express = require('express');
const moviesController = require('../controllers/moviesController');
const router = express.Router();

console.log('ROUTER ON')

router.get('/', moviesController.index)
router.get('/:id', moviesController.show)

module.exports = router;