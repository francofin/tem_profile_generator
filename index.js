const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const OutputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];
const idArray = [];

function AppMenu() {
    function createManager () {
        console.log("Please build your team");
        inquirer.prompt([
            {
                type: "input",
                name: 'managerName',
                message: 'What is the name of the Manager',
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a Manager's name";
                }
            },
            {
                type: "input",
                name: 'managerId',
                message: "What is the Manager's id",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a Positive number greater than zero";
                }
            },
            {
                type: "input",
                name: 'managerEmail',
                message: "What is the Manager's Email",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },
            {
                type: "input",
                name: 'managerOfficeNumber',
                message: "What is the Manager's Email",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number for the Manager's Office Number";
                }
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
           { 
            type: 'list',
            name: "memberChoice",
            message:"Which team Member would you like to add?",
            choices: [
                "Engineer",
                "Intern", 
                "I don't have any more team members to add"
            ]
        }
        ]).then(userChoice => {
            switch(userChoice.memberChoice) {
                case "Engineer":
                addEngineer();
                break;
                case "Intern":
                    addIntern();
                    break;
                default:
                buildTeam();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: 'engineerName',
                message: 'What is the name of the Engineer',
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a Engineer's name";
                }
            },
            {
                type: "input",
                name: 'engineerId',
                message: "What is the Engineer's id",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a Positive number greater than zero";
                }
            },
            {
                type: "input",
                name: 'engineerEmail',
                message: "What is the Engineer's Email",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },
            {
                type: "input",
                name: 'engineerGithub',
                message: "What is the Engineer's Github",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid Github profile";
                }
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.enginnerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: 'internName',
                message: 'What is the name of the Intern',
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a Intern's name";
                }
            },
            {
                type: "input",
                name: 'internId',
                message: "What is the Intern's id",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a Positive number greater than zero";
                }
            },
            {
                type: "input",
                name: 'internEmail',
                message: "What is the Intern's Email",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address";
                }
            },
            {
                type: "input",
                name: 'internSchool',
                message: "What is the Intern's School",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a School for the Intern";
                }
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }

    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(OutputPath, render(teamMembers), "utf-8");
    }

    createManager();
}

AppMenu();