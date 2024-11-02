var express = require('express');
var router = express.Router();

let contactsController = require('../controllers/contacts');

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/contacts', contactsController.list);
router.post('/api/contacts', contactsController.create);
router.get('/api/contacts/:id', contactsController.contactGet);
router.put('/api/contacts/:id', contactsController.update);
router.delete('/api/contacts/:id', contactsController.delete);
router.param('id', contactsController.contactByID);

module.exports = router;