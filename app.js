const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let teamMembers = {
    Manager: null,  
    Engineers: [],
    Intern: []
}

function init(){
    startHTML();
    teamMember();
}

// Team Member Prompts
function teamMember(){
    inquirer
    .prompt([{
        type: "list",
        name: "selectOption",
        message: "What is the role you are adding to the team?",
        choices: ["Add a manager", "Add an engineer", "Add an intern", "Quit"]
    },
    {
        type: "input",
        name: "name",
        message: "Please enter team member's name:"
    },
    {
        type: "list",
        name: "role",
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

    // Response to adding a team member.
    .then(response => {
        switch (response.selectedOption) {
          case "Add a manager":
            console.log("Adding the manager!");
            if (teamMembers.manager === null) {
              addManager();
            } else {
              console.log("There can only be one manager at a time!");
              promptUser();
            }
            break;
          case "Add a engineer":
            console.log("Adding a engineer!");
                addEngineer();
            break;
          case "Add a intern":
              console.log("Adding a intern!");
                addIntern();
            break;
        }
    });
}
            // Manager Function 
            function Manager() {
                console.log("Lets add a manager");
                inquirer.prompt([
                  {
                    type: "input",
                    name: "managerName",
                    message: "What is the manager's name?"
                  },
                  {
                    type: "input",
                    name: "managerId",
                    message: "What is the manager's id?"
                  },
                  {
                    type: "input",
                    name: "managerEmail",
                    message: "What is the manager's email?"
                  },
                  {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the manager's office number?"
                  }])

                  .then (response => {
                    const Manager = new Manager(
                      answers.managerName,
                      answers.managerId,
                      answers.managerEmail,
                      answers.officeNumber
                    );
                  })
                  Manager();
            }
                
                // Engineer Function
                function Engineer() {
                    console.log("Lets add a engineer!");
                    inquirer.prompt([{
                        type: "input",
                        name: "engineerName",
                        message: "What is the engineer's name?"
                      },
                      {
                        type: "input",
                        name: "engineerId",
                        message: "What is the engineer's id?"
                      },
                      {
                        type: "input",
                        name: "engineerEmail",
                        message: "What is the manager's email?"
                      },
                      {
                        type: "input",
                        name: "engineerGithub",
                        message: "What is the engineer's Github?"
                      }])

                      .then(response => {
                        const Engineer = new Engineer(
                          answers.engineerName,
                          answers.engineerId,
                          answers.engineerEmail,
                          answers.engineerGithub
                        );
                  })
                  Engineer();
            }

                // Intern Function
                function Intern() {
                    console.log("Lets add a intern!");
                    inquirer.prompt([{
                        type: "input",
                        name: "internName",
                        message: "What is the intern's name?"
                      },
                      {
                        type: "input",
                        name: "internId",
                        message: "What is the intern's id?"
                      },
                      {
                        type: "input",
                        name: "internEmail",
                        message: "What is the intern's email?"
                      },
                      {
                        type: "input",
                        name: "internSchool",
                        message: "Where did they go to school?"
                      }])
                      
                      .then(response => {
                        const Intern = new Intern(
                          answers.internName,
                          answers.internId,
                          answers.internEmail,
                          answers.internSchool
                        );
                  })
                  Intern();
            }

                
init();