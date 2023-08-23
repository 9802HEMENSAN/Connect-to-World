const express = require('express');
const { AddUser } = require('../controllers/user.controller');
const UserRouter = express.Router();


UserRouter.post("/register",  AddUser )

module.exports = { UserRouter }