//setup import of the manager class
//setup tests to expect the objects to equal true and the specific role, name, id, email and office number
const Manager = require('../lib/manager')

describe('Intern', () =>{

    describe("Initialization",()=>{
        it('should construct an object with employee name, id, email, officeNumber',() =>{

            let obj = new Manager();

            expect('name' in obj && 'id' in obj && 'email' in obj && 'officeNumber' in obj).toEqual(true);

        })
    });

    describe('getRole', () =>{
        it('should set role as mamager',()=>{
            let obj = new Manager();
            expect(obj.getRole()).toEqual('Manager');
        });
    });

    describe('getName',() =>{
        it('should set the section of the object name', () => {
            let name = 'Zak';
            let obj = new Manager(name)
            expect(obj.getName()).toEqual(name);
        });
    });

    describe('getId',()=>{
        it('should set the section of the object id', ()=>{
            let name = 'Zak'
            let id = 1;
            let obj = new Manager(name,id);
            expect(obj.getId()).toEqual(id)
        });
    });

    describe('getEmail',()=>{
      it('should set the section of the object email',()=>{
        let email = 'zak@gmail.com';
        let obj = new Manager('Zak', 1, email)
        expect(obj.getEmail()).toEqual(email);
      });
    });
    
    describe('getOfficeNumber',()=>{
        it('should set the section of the object officeNumber', ()=>{
            let officeNumber = '222-222-2222'
            let obj = new Manager('Zak', 1, 'zak@gmail.com', officeNumber);
            expect(obj.getOfficeNumber()).toEqual(officeNumber)
        });
    });
});