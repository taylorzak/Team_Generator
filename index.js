//setup links to the classes and html content that will be generated
//setup packages that will be used
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const htmlContent = require('./src/htmlContent')

const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path');
const output = path.join('dist','index.html');

//setup array to push responses into
const questions = []
//setup manager, engineer, intern, and role questions arrays
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter manager\'s name'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Enter manager\'s employee id'
    },
    {
        type:'input',
        name: 'managerEmail',
        message: 'Enter manager\'s email address'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter manager\'s office number'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Enter engineer\'s name'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Enter engineer\'s employee id'
    },
    {
        type:'input',
        name: 'engineerEmail',
        message: 'Enter engineer\'s email address'
    },
    {
        type:'input',
        name: 'engineerGithub',
        message: 'Enter engineer\'s GitHub name'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter intern\'s name'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Enter intern\'s employee id',
    },
    {
        type:'input',
        name: 'internEmail',
        message: 'Enter intern\'s email address'
    },
    {
        type:'input',
        name: 'internSchool',
        message: 'Enter intern\'s school name'
    }

]

const role = [
    {
        type:'rawlist',
        name: 'roleOptions',
        message: 'Select next employee or Finish',
        choices: ['Add An Engineer', 'Add An Intern', 'Finish'],
    }
]
//setup functions to prompt the questions and push the responses into the questions array
const addManager= () =>{
    inquirer
      .prompt(managerQuestions)
      .then(({managerName, managerId, managerEmail, officeNumber})=>{
          const manager = new Manager(managerName, managerId, managerEmail, officeNumber);
          questions.push(manager); 
          showRoles()
      });
}

const addEngineer = () =>{
  inquirer
      .prompt(engineerQuestions)
      .then(({engineerName, engineerId, engineerEmail, engineerGithub})=>{
          const engineer = new Engineer(engineerName, engineerId,engineerEmail, engineerGithub);
          questions.push(engineer);
          showRoles();
      })
}

const addIntern = () =>{
  inquirer
      .prompt(internQuestions)
      .then(({internName, internId, internEmail, internSchool})=>{
          const intern = new Intern(internName, internId, internEmail, internSchool);
          questions.push(intern);
          showRoles();
      })
}
//setup funtions to create the html with the objects in the questions array
const createHTML = () =>{
  const builtString = htmlContent(questions);

  fs.writeFile(output, builtString, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}
//setup switch case to prompt the role options and run the role function based off of the users response
const showRoles = () =>{
    inquirer
        .prompt(role)
        .then(({roleOptions}) =>{
            switch(roleOptions){
                case 'Add An Intern':
                    addIntern();
                    break;
                case 'Add An Engineer':
                    addEngineer();
                    break;
                case 'Finish':
                    console.log(questions);
                    createHTML();
                    break;
                default:
                    console.log('error')

            }
        })
}

addManager()