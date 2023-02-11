//setup inport from the employee class
//setup constructor for the engineer class that extends the employee class
//setup the functions to return the github and role
//setup module.export for the engineer class
const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email,github){
        super(name,id,email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }

}

module.exports = Engineer;