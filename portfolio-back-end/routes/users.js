const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// Route to get a list of all users
router.get('/', usersController.list);

// Route to create a new user
router.post('/', usersController.create);

// Route to get a specific user by ID
router.get('/:id', usersController.userGet);

// Route to update a specific user by ID
router.put('/:id', usersController.update);

// Route to delete a specific user by ID
router.delete('/:id', usersController.delete);

module.exports = router;