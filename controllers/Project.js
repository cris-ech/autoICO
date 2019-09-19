const { exec } = require('child_process');
const jwt = require("jsonwebtoken");
const replace = require('replace-in-file');
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

function decodedToken (token) {
  const secret = process.env.SECRET;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
    } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        return decoded;
      }
    } 
      )}
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
            decimals: req.body.decimals,
            type: req.body.type
  
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


//Function create basic structure of the project
function createProjectFiles (userName, projectName,type){
  
  const folderUser = "./projects/" + userName + "/" ; 

  switch(type) {
    //copy mintable contract and migration
    case 1: 
      const command1 = "cp ./ICO_files/MintableCrowdsale.sol " + folderUser 
      + projectName + "/contracts/";
      const command2 = "cp ./ICO_files/3_crowdsaleMintable.js " + folderUser 
      + projectName + "/migrations/";
      const options = {cwd: "./" };
      exec(command1, options,(error, stdout, stderr) => {
      if (error) {
        //res.send(error);
        return console.error(`exec error: ${error}`);
      }
      exec(command2, options,(error, stdout, stderr) => {
        if (error) {
          //res.send(error);
          return console.error(`exec error: ${error}`);
        }
      return true ;
    })

      });


};

}


//Function set the correct values of the migrations 
function replaceMigrations (userName,project){
  //console.log(project);
  
  const folder = "./projects/" + userName + "/" + project.name + '/migrations/' ; 

  const options = {
    //files: folder + '2_tokenMintable.js',
    files: folder + 'tex.js',
    from: [/name_r/g, 'symbol_r', /decimals_r/g],
    to: [project.name, project.acronym, project.decimals],
    countMatches: true,
  };
  try {
    const results = replace.sync(options);
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }

  switch(project.type) {
    
    
    case 1: 
      const options = {
        files: folder + '3_crowdsaleMintable.js',
        from: ['rate_r', 'wallet_r'],
        to: ["fdfdgd", project.wallet],
        countMatches: true
      };
      try {
        const results = replace.sync(options);
        console.log('Replacement results:', results);
      }
      catch (error) {
        console.error('Error occurred:', error);
      } break;




};

}





exports.DeployProject = function (req,res) {
  //Load user info from JWT
  //FUTURE WORK --> wrap this into a function
  const token = 
  req.body.token ||
  req.query.token ||
  req.headers['x-access-token'] ||
  req.cookies.token;

  const secret = process.env.SECRET;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
    } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        console.log(decoded);
        createProjectFiles(decoded.name, req.body.name, req.body.type );
        replaceMigrations(decoded.name, req.body);

      } 
    });
  }
  
  //replace values in the migration with the project values



};