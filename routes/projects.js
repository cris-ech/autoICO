const express = require("express");
const router = express.Router();
const withAuth = require('../middleware');

//Load controllers
const ProjectController = require('../controllers/Project');

// @route POST projects/newProject
// @desc Create new project
// @access Public
router.post("/newProject",withAuth ,ProjectController.NewProject); 


// @route POST projects/deployProject
// @desc Deploy a project
// @access Public
router.post("/deployProject",withAuth ,ProjectController.DeployProject); 


// @route GET projects/getAllProjects
// @desc  return all the projects
// @access Public
router.get("/getAllProjects", ProjectController.GetAllProjects); 


module.exports = router;