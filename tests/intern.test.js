//setup import of the intern class
//setup tests to expect the objects to equal true and the specific role, name, id, email and school
const Intern = require('../lib/intern')

describe('Intern', () =>{

    describe("Initialization",()=>{
        it('should construct an object with employee name, id, email, school',() =>{

            let obj = new Intern();

            expect('name' in obj && 'id' in obj && 'email' in obj && 'school' in obj).toEqual(true);

        })
    });

    describe('getRole', () =>{
        it('should set role as intern',()=>{
            let obj = new Intern();
            expect(obj.getRole()).toEqual('Intern');
        });
    });

    describe('getName',() =>{
        it('should set the section of the object name', () => {
            let name = 'dave';
            let obj = new Intern(name)
            expect(obj.getName()).toEqual(name);
        });
    });

    describe('getId',()=>{
        it('should set the section of the object id', ()=>{
            let name = 'dave'
            let id = 1;
            let obj = new Intern(name,id);
            expect(obj.getId()).toEqual(id)
        });
    });

    describe('getEmail',()=>{
      it('should set the section of the object email',()=>{
        let email = 'dave@gmail.com';
        let obj = new Intern('dave', 1, email)
        expect(obj.getEmail()).toEqual(email);
      });
    });
    
    describe('getSchool',()=>{
        it('should set the section of the object school', ()=>{
            let school = 'UofA Bootcamp'
            let obj = new Intern('dave', 1, 'dave@gmail.com', school);
            expect(obj.getSchool()).toEqual(school)
        });
    });
});