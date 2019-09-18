const { exec } = require('child_process');
const jwt = require("jsonwebtoken");
require('dotenv').config();

// Load project model
const Project = require("../models/Project");
// Load user model
const User = require("../models/User");

const withAuth = require('../middleware');

//Function create basic structure of the project
function createProjectStructure (userName, projectName){
  
  const folder = "./projects/" + userName + "/" ; 
  const command = "cp -r ./preICO " + folder; //Copy
  const command2 = "mv preICO " + projectName; //Rename

  exec(command, (error, stdout, stderr) => {
    if (error) {
      //res.send(error);
      return console.error(`exec error: ${error}`);
    }
    //res.write('Estructura creada ');
    console.log('hecho');
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    const options = {cwd: folder };
    exec(command2, options,(error, stdout, stderr) => {
      if (error) {
        //res.send(error);
        return console.error(`exec error: ${error}`);
      }
      //res.write('Nombre cambiado ');
      console.log('hecho');
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      //res.end();
      return true;
    })
  })

};






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
            user: projectUser,
            wallet: req.body.wallet,
            cap: req.body.cap,
            t_init: req.body.t_init,
            t_end: req.body.t_end,
            decimals: req.body.decimals
  
          });
          console.log('antes de guardar');
          console.log(newProject);
          

          newProject.save()
          .then(function () {
            //add the project to the user
            User.findByIdAndUpdate(projectUser.id, 
              {"$push": {"projects": newProject.id}},
              function (err, raw) {
              if (err) return handleError(err);
              console.log('The raw response from Mongo was ', raw); })
            createProjectStructure(projectUser.name, newProject.name);

            //all the process OK
            

            res.status(200).send('OK')})
          .catch(err => {
            console.log(err)
            res.status(400).send();
          });
        });
        
       
        
      }
    });
    };

  
};