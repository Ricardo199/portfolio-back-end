var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/', usersController.list);
router.post('/', usersController.create);
router.get('/:id', usersController.userGet);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;