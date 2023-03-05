const express = require('express');
const router = express.Router();
 
//User routes
router.post('/users', UserController.createUser);
router.get('/users:id', UserController.getUserById);
router.put('/users:id', UserController.updateUserById);
router.delete('/users:id', UserController.deleteUserById);


//Tweet Routes
module.export = router;