// add the employee constructor 
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        //asking for super constructor in derived class
        super(name, id, email);
        //
        this.github = github;
    }
    // get github
    getGithub() {

        return this.github

    }

    //also get the employee role
    getRole() {
        return "Engineer"
    }

}




module.exports = Engineer;
