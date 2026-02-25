const express = require('express');
const moviesController = require('../controllers/moviesController');
const router = express.Router();

console.log('ROUTER ON')

router.get('/', moviesController.index) // return all movies table
router.get('/:id', moviesController.show) // return one object from movies + its reviews
router.post('/:id/reviews', moviesController.storeReview); // void add single review to reviews table

module.exports = router;