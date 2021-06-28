class Template {
    constructor(team) {
        this.team = team.teamData;
    }

    makeElement(employee) {
        switch (employee.getRole()) {
            case 'Manager':
                return `<li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>`;
            case 'Engineer':
                return `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGitHub()}">${employee.getGitHub()}</a></li>`;
            case 'Intern':
                return `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
        }
    }

    makeCard(index) {
        const employee = this.team[index];

        return `
        <div class="card w-300 m-2">
        <div class="card-body p-0">
            <div class="card-header">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-subtitle text-muted">${employee.getRole()}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                ${this.makeElement(employee)}
            </ul>
        </div>
        </div>
        `;
    }


    makePage() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My Team</title>
            </head>
            <body>
                <nav class="navbar-expand-sm">
                    <div class="d-flex justify-content-center bg-danger">
                        <h1 class="text-light">My Team</h1>
                    </div>
                </nav>
                <main class="d-flex justify-content-center flex-wrap p-5"> 
            `
    }

    generateTemplate() {
        const topOfPage = this.makePage();

        const cards = this.team.map((employee, index) => {
            return this.makeCard(index);
        }).join(`
        `);

        return `${topOfPage}
        ${cards}
        </main>
        </body>
        </html>
        `;
    }
}

module.exports = Template;