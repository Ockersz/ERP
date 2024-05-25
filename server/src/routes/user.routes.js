const express = require('express');
const bodyParser = require('body-parser');
// const { PERMISSION, USER_TYPES } = require("../enum/enum.js");
// const { authenticateToken } = require("../controller/middleware/authController.js");
const controller = require('../controller/userController');
const router = express.Router();
router.use(bodyParser.json());


router.get('/', controller.getAll);

router.post('/auth', controller.authUser);

router.post('/create', controller.createUser);

router.get('/:id', controller.getUserById);

router.put('/update/:id', controller.updateUserById);

router.delete('/delete/:id', controller.deleteUserById);

router.get('/search', controller.searchUser);

module.exports = router;

