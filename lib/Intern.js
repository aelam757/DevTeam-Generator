const Employee =  require('./Employee');

class Intern extends Employee{
    constructor ( id, name, email, school){
        super(name,id,email);
        this.title = 'Intern';
        this.school = school;
    }
    getRole(){
        return this.title;
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Intern;