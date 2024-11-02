var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/api/users', usersController.list);
router.post('/api/users', usersController.create);
router.get('/api/users/:id', usersController.userGet);
router.put('/api/users/:id', usersController.update);
router.delete('/api/users/:id', usersController.delete);
router.param('id', usersController.userByID);

module.exports = router;