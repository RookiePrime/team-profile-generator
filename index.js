const TeamData = require('./lib/TeamData');

const printPage = team => {
    console.log(team);
}

const createTeamData = () => {
    const team = new TeamData();
    // Start by getting input on the manager of the team
    team.managerInput()
    // Then get a new employee for the team -- a looping function as long as the user has more employees to add
    .then(() => team.newEmployee())
    // Then create an HTML template based on the data from the input
    .then(() => printPage(team));
    // Then print the HTML file and copy over the stylesheet to the ./dist folder
};

createTeamData();