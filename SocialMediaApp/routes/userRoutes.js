const express = require('express');
const router = express.Router();
 
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUserById);
router.delete('/:id', UserController.deleteUserById);

module.export = router;