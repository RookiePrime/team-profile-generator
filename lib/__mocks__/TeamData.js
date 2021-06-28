const Engineer = require('../Engineer');
const Intern = require('../Intern');
const Manager = require('../Manager');

module.exports = function() {
    const Randy = new Manager('Randy Pitchford', 1, 'randy@yahoo.com', 140);
    const Jeremy = new Engineer('Jeremy Bullfrog', 2, 'jdawg@gmail.com', 'JtheDawg');
    const Phoebe = new Engineer('Phoebe Durnst', 3, 'feebs@yahoo.com', 'Feeblemind');
    const Dina = new Intern('Dina Zam', 4, 'dinarina@hotmail.com', 'York University');
    const Salem = new Intern('Salem Masa', 5, 'witchtrilz@gmail.com', 'Harvard University');

    return {
        teamData: [
            Randy,
            Jeremy,
            Phoebe,
            Dina,
            Salem
        ]
    }
};