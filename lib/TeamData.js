const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const noMessage = message => !message ? 'No text entered' : true;

class TeamData {

    managerInput() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter the name of the team\'s manager.',
                    validate: noMessage
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter the id of the team\'s manager.',
                    validate: noMessage
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter the email address of the team\'s manager.',
                    validate: noMessage
                },
                {
                    type: 'input',
                    name: 'office',
                    message: 'Please enter the manager\'s office number.',
                    validate: noMessage
                }
            ]).then(managerInput => {
                const manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.office);
                this.teamData = [];
                this.teamData.push(manager);
                return;
            });
    };

    newEmployee() {
        return inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'confirmNext',
                    message: 'Would you like to enter another employee?',
                    default: false
                },
                {
                    type: 'list',
                    name: 'whichNext',
                    message: 'What kind of employee entry would you like to add?',
                    choices: ['Engineer', 'Intern', 'Neither'],
                    when: ({ confirmNext }) => confirmNext
                }
            ]).then(response => {
                if (response.confirmNext && response.whichNext !== 'Neither') {
                    switch (response.whichNext) {
                        case 'Engineer':
                            return this.engineerInput();
                        case 'Intern':
                            return this.internInput();
                    }
                }
            }).then(() => {
                return;
            });
    };

    engineerInput() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter the name of this engineer.',
                    validate: noMessage
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter the id of this engineer.',
                    validate: noMessage
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter the email address of this engineer.',
                    validate: noMessage
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Please enter this engineer\'s GitHub account name.',
                    validate: noMessage
                }
            ]).then(engineerInput => {
                const engineer = new Engineer(engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.github);
                this.teamData.push(engineer);
                return this.newEmployee();
            });
    };

    internInput() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter the name of this intern.',
                    validate: noMessage
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter the id of this intern.',
                    validate: noMessage
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter the email address of this intern.',
                    validate: noMessage
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Please enter this intern\'s school.',
                    validate: noMessage
                }
            ]).then(internInput => {
                const intern = new Intern(internInput.name, internInput.id, internInput.email, internInput.school);
                this.teamData.push(intern);
                return this.newEmployee();
            });
    };
};

module.exports = TeamData;