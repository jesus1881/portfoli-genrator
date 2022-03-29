//const fs = require('fs');
//const generatePage = require('./src/page-template');

const inquirer = require("inquirer");

//const pageHTML = generatePage(name, github);


//const [name, github] = profileDataArgs;


//fs.writeFile('./index.html', generatePage(name, github), err => {
//if (err) throw new Error(err);

//console.log('Potfolio Complete! Check out index.hmtl to see the output!')
//});

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));