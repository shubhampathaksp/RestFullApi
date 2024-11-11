const express = require("express");
const {getAllUsers} = require('../controller/getAllUsers');
const {getUserById} = require('../controller/getUserById');
const {getNewUser} = require('../controller/getNewUser');
const {getUpdateById} = require('../controller/getUpdateById');
const {getDeleteById} = require('../controller/getDeleteById');


const router = express.Router();
// seedDatabase();
router.get('/users', getAllUsers);
router.get('/users/:id',getUserById);
router.post('/users',getNewUser);
router.put('/users/:id',getUpdateById);
router.delete('/users/:id',getDeleteById);

module.exports = router;