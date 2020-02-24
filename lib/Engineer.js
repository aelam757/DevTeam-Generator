const Employee = require('./Employee');

class Engineer{
    constructor (name, id, email, github){
        this.title = 'Engineer';
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
module.exports = Engineer;