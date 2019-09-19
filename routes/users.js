const express = require("express");
const router = express.Router();
const withAuth = require('../middleware');

//Load controllers
const UserController = require('../controllers/User');

// @route POST users/register
// @desc Register user
// @access Public
router.post("/register", UserController.UserRegister); 

// @route POST users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", UserController.UserLogin);

// @route GET users/logout
// @desc Logout an user and remove JWT from cookies
// @access Public
router.get("/logout",UserController.UserLogout);
  
// @route GET users/userProjects
// @desc Get users projects
// @access Public
router.get("/userProjects",UserController.UserProjects);



module.exports = router;
