const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (id, name, email, github){
        super(name, id, email)
        this.title = 'Engineer';
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