import inquirer from "inquirer";

inquirer
    .prompt([
        { type: "input", name: "name", message: "What's your name?" },
        {
            type: 'list',
            name: 'food',
            message: 'What is your favorite food?',
            choices: ['pizza', 'burger', 'chicken', 'sushi']
        },
        {
            type: 'checkbox',
            name: 'foods',
            message: 'What are your favorite foods?',
            choices: ['pizza', 'burger', 'chicken', 'sushi']
        },
    ])
    .then(answers => {
        console.log(answers);
    })
    .catch(err => {
        if (err.isTtyError) {
            console.log('Prompt couldn\'t be rendered in the current environment');
        } else {
            console.log('Something went wrong');
        }
    })