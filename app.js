const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let members = {
    boss: null,  
    engineers: [],
    intern: []
}

function init(){
   // startHTML();
  teamMembers();


// Members Prompts
  function teamMembers(){
    inquirer
    .prompt([
      {
        type: "list",
        name: "selectOption",
        message: "What is the role you are adding to the team?",
        choices: ["Add a manager", "Add a engineer", "Add a intern"]
      }
  ])

    // Response to adding a team member.
     .then(response => {
        switch (response.selectOption) {
          case "Add a manager":
            console.log("Adding the manager!");
            if (members.manager === null) {
              addManager();
            } else {
              console.log("There can only be one manager at a time!");
              // promptUser();
              console.log("Prompt working!")
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
            function addManager() {
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
                  }
                ])

                  .then(response => {
                    const Manager = new Manager(
                      answers.managerName,
                      answers.managerId,
                      answers.managerEmail,
                      answers.officeNumber
                    )
                    console.log(response);
                    createTeam();
                  })
            };
                
                // Engineer Function
                function addEngineer() {
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
                        name: "engineerGithub",
                        message: "What is the engineer's Github?"
                      }])

                      .then(response => {
                        const Engineer = new Engineer(
                          answers.engineerName,
                          answers.engineerId,
                          answers.engineerGithub
                        );
                        console.log(response);
                  })
            };

                // Intern Function
                function addIntern() {
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
                        name: "internSchool",
                        message: "Where did they go to school?"
                      }])
                      
                      .then(response => {
                        const Intern = new Intern(
                          answers.internName,
                          answers.internId,
                          answers.internSchool
                        );
                        console.log(response);
                  })
            };
        // teamMembers();
 }                
init();