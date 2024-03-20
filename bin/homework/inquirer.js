import inquirer from 'inquirer';

inquirer
    .prompt([
        { type: 'input', name: 'name', message: 'Whats your name?' },
        { 
            type: 'list',
            name: 'gender',
            message: 'What gender are you?',
            choices: ['Male', 'Female']
        },
        { 
            type: 'checkbox',
            name: 'foods',
            message: 'What are your favorite foods?',
            choices: ['Sushi', 'Burger', 'Chicken', 'Vegan']
        },
        {
            type: 'number',
            name: 'age',
            message: 'How old are you?'
        },
        {
            type: 'confirm',
            name: 'isReal',
            message: 'Are you real?'
        },
        {
            type: 'rawlist',
            name: 'likesColor',
            message: 'Which of these colors do you like the most?',
            choices: ['Red', 'Blue', 'Green', 'Yellow']
        },
        {
            type: 'expand',
            name: 'expand',
            message: 'Boomshakalaka',
            choices: [
                {
                    key: 'y',
                    name: 'Yes',
                    value: 'yes'
                },
                {
                    key: 'n',
                    name: 'No',
                    value: 'no'
                },
                {
                    key: 'o',
                    name: 'Other',
                    value: 'other'
                }
            ]
        },
        {
            type: 'password',
            name: 'sumnSecret',
            message: 'Enter something secret'
        },
        {
            type: 'editor',
            name: 'idkWtfThisIs',
            message: 'Idk'
        },
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });