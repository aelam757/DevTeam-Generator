const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employees = [];

function init(){
    startHTML();
    addMembers();
}
// Team Member Prompts
function addMembers(){
    inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "Please enter team member's name:"
    },
    {
        type: "list",
        name: "name",
        message: "Select title for member:",
        choices: ["Intern", "Engineer", "Manager"]
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the team member's email:"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter team member's Id number:"
    }])

}
init();