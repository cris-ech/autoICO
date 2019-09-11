const { exec } = require('child_process');
const jwt = require("jsonwebtoken");
require('dotenv').config();

// Load project model
const Project = require("../models/Project");
// Load user model
const User = require("../models/User");

const withAuth = require('../middleware');


exports.NewProject =  function (req, res) {

  //Load user info from JWT
  //FUTURE WORK --> wrap this into a function
  const token = 
  req.body.token ||
  req.query.token ||
  req.headers['x-access-token'] ||
  req.cookies.token;

  const secret = process.env.SECRET;
  console.log('aqui');
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
    } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        //query to find the user information 
        User.findById(decoded.id, function(err, projectUser) {
          console.log(projectUser); 
        
          const newProject = new Project({
            name : req.body.name,
            acronym: req.body.acronym,
            description: req.body.description,
            state: "preCode",
            user: projectUser
  
          });
          console.log('antes de guardar');
          console.log(newProject);
          newProject.save()
          .then(res.status(200).send('OK'))
          .catch(err => {
            console.log(err)
            res.status(400).send();
          });
        });
        
       
        
      }
    });
    };

  
};