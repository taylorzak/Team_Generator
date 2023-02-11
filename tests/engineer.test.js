//setup import of the engineer class
//setup tests to expect the objects to equal true and the specific role, name, id, email and github
const Engineer = require('../lib/engineer')

describe('Engineer', () =>{

    describe("Initialization",()=>{
        it('Should construct object with name, id, email, github',() =>{

            let obj = new Engineer();

            expect('name' in obj && 'id' in obj && 'email' in obj && 'github' in obj).toEqual(true);

        })
    });

    describe('getRole', () =>{
        it('should set role as engineer',()=>{
            let obj = new Engineer();
            expect(obj.getRole()).toEqual('Engineer');
        });
    });

    describe('getName',() =>{
        it('should set the section of the object name', () => {
            let name = 'Zak';
            let obj = new Engineer(name)
            expect(obj.getName()).toEqual(name);
        });
    });

    describe('getId',()=>{
        it('should set the section of the object id', ()=>{
            let name = 'Zak'
            let id = 1;
            let obj = new Engineer(name,id);
            expect(obj.getId()).toEqual(id)
        });
    });

    describe('getEmail',()=>{
      it('should set the section of the object email',()=>{
        let email = 'zak@gmail.com';
        let obj = new Engineer('dave', 1, email)
        expect(obj.getEmail()).toEqual(email);
      });
    });
    
    describe('getGithub',()=>{
        it('should set the section of the object github', ()=>{
            let github = 'zakgithub'
            let obj = new Engineer('Zak', 1, 'zak@gmail.com', github);
            expect(obj.getGithub()).toEqual(github)
        });
    });
});