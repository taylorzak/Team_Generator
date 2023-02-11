//setup constructor for the employee class
//setup the functions to return the name, id, email, and role
//setup module.export for the employee class
class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;