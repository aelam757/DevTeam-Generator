const Employee =  require('./Employee');

class Intern {
    constructor ( id, name, email, school){
        this.title = 'Intern';
        this.id = id;
        this.name = name;
        this.email = email;
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