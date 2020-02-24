const Employee =  require('./Employee');

class Intern {
    constructor ( id, name, email, github){
        this.title = 'Intern';
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
    }
    getRole(){
        return this.title;
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Intern;