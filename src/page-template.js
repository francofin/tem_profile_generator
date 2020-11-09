const generateTeam = team => {


    const generateManager = manager => {
        return `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
        );

    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join("")
        );
    
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join("")
        );
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <!-- Title  -->
    <title>Software Team</title>

    <!-- Bootstrap  -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src = "https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Software Engineering Team</h1>
            <p class="lead">Please see the details of Our experienced and awesome team below.</p>
        </div>
        </div>
    </div>
    <div class ="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
    `;
};