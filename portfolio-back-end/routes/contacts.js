var express = require('express');
var router = express.Router();
let contactsController = require('../controllers/contacts');

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', (req, res, next) => {
  console.log('GET request to /api/contacts received');
  contactsController.list(req, res, next);
});

router.post('/', contactsController.create);
router.get('/:id', contactsController.contactGet);
router.put('/:id', contactsController.update);
router.delete('/:id', contactsController.delete);
router.param('id', contactsController.contactByID);

module.exports = router;