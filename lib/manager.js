//setup inport from the employee class
//setup constructor for the manager class that extends the employee class
//setup the functions to return the office number and role
//setup module.export for the manager class
const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;