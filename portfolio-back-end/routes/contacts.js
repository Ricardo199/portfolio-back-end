const express = require('express');
const router = express.Router();
/**
 * Module dependencies.
 * @module contactsController
 * @requires ../controllers/contacts
 */
const contactsController = require('../controllers/contacts');

/* GET contacts listing. */
router.get('/', contactsController.list);
router.post('/', contactsController.create);
router.get('/:id', contactsController.contactGet);
router.put('/:id', contactsController.update);
router.delete('/:id', contactsController.delete);

module.exports = router;