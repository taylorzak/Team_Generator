//setup import of the employee class
//setup tests to expect the objects to equal true and the specific name, id, email, and role
const Employee = require('../lib/employee');

describe('Employee', () => {

  describe("Initialization", () => {
    it("should construct an object with employee name, id, email", () => {
    
        let obj = new Employee();

      expect('name' in obj && 'id' in obj && 'email' in obj).toEqual(true);
    });
  })

    describe('getName',() =>{
        it('should set the section of the object name', () => {
            let name = 'dave';
            let obj = new Employee(name)
            expect(obj.getName()).toEqual(name);
        });
    });

    describe('getId',()=>{
        it('should set the section of the object id', ()=>{
            let name = 'dave'
            let id = 1;
            let obj = new Employee(name,id);
            expect(obj.getId()).toEqual(id)
        });
    })

    describe('getEmail',()=>{
      it('should set the section of the object email',()=>{
        let email = 'dave@gmail.com';
        let obj = new Employee('dave', 1, email)
        expect(obj.getEmail()).toEqual(email);
      });
    });

    describe('getRole', ()=>{
      it('should set the section of the object role',()=>{
        let obj = new Employee();
        expect(obj.getRole()).toEqual('Employee');
      });
    });
});