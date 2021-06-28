const TeamData = require('./lib/TeamData');
const Template = require('./lib/Template');
const fs = require('fs');

const createTeamData = () => {
    const team = new TeamData();
    // Start by getting input on the manager of the team
    team.managerInput()
    // Then get a new employee for the team -- a looping function as long as the user has more employees to add
    .then(() => team.newEmployee())
    // Then create an HTML template based on the data from the input
    .then(() => new Template(team).generateTemplate())
    // Then print the HTML file and copy over the stylesheet to the ./dist folder
    .then(htmlTemplate => {
        fs.writeFile('./dist/index.html', htmlTemplate, err => {
            if (err) throw err;
        });
        fs.copyFile('./src/bootstrap.min.css', './dist/bootstrap.min.css', err => {
            if (err) throw err;
        });
    })
};

createTeamData();