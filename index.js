// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./script/generateMarkdown");

// An array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project.",
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your project?",
    },
    {
        type: "input",
        name: "howTo",
        message: "How do you use this application?",
    },
    {
        type: "input",
        name: "contributes",
        message: "How do users contribute to this application?",
    },
    {
        type: "input",
        name: "test",
        message: "How do you test this application?",
    },
    {
        type: "input",
        name: "gitHubName",
        message: "What is your Github Username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    }, 
    {
        type: "checkbox",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause'Simplified' License",
            "BSD-3-Clause",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "The Unlicense"
        ]
    },
];

// A function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("Error: File Not Created");
        } else {
            console.log("File created!");
        }
    });
}

// A function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readMeContent = generateMarkdown(answers);
        writeToFile("ReadMeHW.md", readMeContent);
    });
}

// Function call to initialize app
init();







// const generateReadme = (data) => 
//     `#Title: ${data.projectTitle}

//     ##Description: 
//     ${data.description}
    
//     ###Instalation:
//     ${data.instructions} 
//     `

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'projectTitle',
//       message: 'What is title of your project?',
//     },
//     {
//       type: 'input',
//       name: 'description',
//       message: 'Give a brief description on your project',
//     },
//     {
//       type: 'input',
//       name: 'instructions',
//       message: 'How do you use this application?',
//     },
//   ])

//   .then((answers) => {
//       const readMeContent = generateReadme(answers);
//     // const htmlPageContent = generateHTML(answers);

//     fs.writeFile('ReadMe.md', readMeContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created!')
//     );
//   });
