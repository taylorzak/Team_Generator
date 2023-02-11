//setup inport from the employee class
//setup constructor for the intern class that extends the employee class
//setup the functions to return the school and role
//setup module.export for the intern class
const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';

    }
    
}

module.exports = Intern;