const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let members = {
    boss: null,  
    engineer: [],
    intern: []
}

function init(){
   // startHTML();
  createTeam();
  boss();

// The Boss Prompt
  function boss(){
    inquirer
    .prompt([
      {
        type: "list",
        name: "selectOption",
        message: "Lets create our manager role!",
        choices: ["Add a manager"]
      }
  ])

     
     .then(response => {
        switch (response.selectOption) {
          case "Add a manager":
            console.log("Adding the manager!");
            if (members.manager === null) {
              addManager();
            } else {
              console.log("There can only be one manager at a time!");
            };
    };
  });
}
            // Creating/Finishing the rest of the team.
            function createTeam(){
              console.log("Lets start our team!");
              inquirer.prompt([
                {
                  type: "input",
                  name: "selectedOption",
                  message: "Lets create the rest of our team! Who would you like to add?",
                  choices: ["Add a engineer", "Add a intern", "The team is complete."]
                }
              ])
              .then(response => {
                switch(response.selectedOption){
                  case "Add a engineer":
                    console.log("Adding a engineer!");
                    addEngineer();
                    break;
                    case "Add a intern":
                      console.log("Adding a intern!");
                      addIntern();
                      break;
                }
              })
            }


            // Manager Prompt. 
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
                    let manager = new Manager(
                      response.managerName,
                      response.managerId,
                      response.managerEmail,
                      response.officeNumber
                    )
                    console.log(response);
                    createTeam();
                  })
            };
                
                // Engineer Prompt.
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
                        name: "engineerEmail",
                        message: "What is the engineer's email?"
                      },
                      {
                        type: "input",
                        name: "engineerGithub",
                        message: "What is the engineer's Github?"
                        
                      }])

                      .then(response => {
                        console.log(response);
                        let engineer = new Engineer(
                          response.engineerName,
                          response.engineerId,
                          response.engineerEmail,
                          response.engineerGithub
                        );
                  })
            };

                // Intern Prompt.
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
                        name: "intersEmail",
                        message: "What is the intern's email?"
                      },
                      {
                        type: "input",
                        name: "internSchool",
                        message: "Where did they go to school?"
                      }])
                      
                      .then(response => {
                        let intern = new Intern(
                          response.internName,
                          response.internId,
                          response.internEmail,
                          response.internSchool
                        );
                        console.log(answers);
                  })
            };
}               
init();