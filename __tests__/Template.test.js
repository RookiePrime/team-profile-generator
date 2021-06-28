const Template = require('../lib/Template');
const TeamData = require('../lib/TeamData');

jest.mock('../lib/TeamData');

test('Does the template exist?', () => {
    const team = new TeamData();
    const page = new Template(team);

    expect(page).toBeTruthy();
});

test('Does the template contain the teamData?', () => {
    const team = new TeamData();
    const page = new Template(team);

    expect(page).toHaveProperty('team');
});

test('Can the template assemble a card?', () => {
    const team = new TeamData();
    const page = new Template(team);

    const cardTemplate = page.makeCard(0);

    expect(cardTemplate).toEqual(expect.stringContaining(team.teamData[0].name));
    expect(cardTemplate).toEqual(expect.stringContaining(team.teamData[0].id.toString()));
    expect(cardTemplate).toEqual(expect.stringContaining(team.teamData[0].email));
});

test('Can the template assemble a blank page?', () => {
    const team = new TeamData();
    const page = new Template(team);

    const pageTemplate = page.makePage();

    expect(pageTemplate).toEqual(expect.stringContaining('My Team'));
    expect(pageTemplate).toEqual(expect.stringContaining('<body>'));
});

test('Can the template assemble a complete page?', () => {
    const team = new TeamData();
    const page = new Template(team);

    const pageTemplate = page.generateTemplate();

    team.teamData.forEach(member => {
        expect(pageTemplate).toEqual(expect.stringContaining(member.name));
    });
});