const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/contactes', controller.getContacts);
router.post('/contactes', controller.createContacte);
router.put('/contactes/:id', controller.updateContacte);
router.delete('/contactes/:id', controller.deleteContacte);

module.exports = router;
