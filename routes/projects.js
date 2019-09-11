const express = require("express");
const router = express.Router();
const withAuth = require('../middleware');

//Load controllers
const ProjectController = require('../controllers/Project');

// @route POST projects/newProject
// @desc Create new project
// @access Public
router.post("/newProject",withAuth ,ProjectController.NewProject); 




module.exports = router;