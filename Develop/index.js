// TODO: Include packages needed for this application
import generateMarkdown from "./utils/generatedMarkdown";
import { writeFileSync } from "fs";
import { join } from "path";
import { prompt } from "inquirer";

// TODO: Create an array of questions for user input
//const questions = [];
const questions = [
    {
      type: "input",
      name: "Title",
      message: "Project name.",
    }, {
        type: "input",
        name: "Table Of Contents",
        message: "List README file contents.",
      },
    {
      type: "input",
      name: "Description",
      message: "Describe the purpose of project.",
    },
    {
      type: "input",
      name: "Screenshot",
      message: "Post path to image here."
    },
    {
        type: "input",
        name: "Link",
        message: "URL of deployed application."
      },
      {
        type: "input",
        name: "Installation",
        message: "Necessary Software"
      },
   {
      type: "input",
      name: "Usage",
      message: "What languages or technologies are associated with this project?",
    },
    {
      type: "input",
      name: "Tests",
      message: "Required tests if applicable.",
    },
    {
        type: "input",
        name: "Contributing",
        message: "References?."
      },
      {
        type: "input",
        name: "Questions",
        message: "Your Github link and contact info"
      },
      {
        type: "checkbox",
        name: "License",
        message: "Which license?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "none"],
      },    
  ];
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
    return writeFileSync(join(process.cwd(), fileName), data);
  }
// TODO: Create a function to initialize app
//function init() {}
function init() {
    prompt(questions).then((responses) => {
      console.log("Creating README.md File");
      writeToFile("./test/Readme", generateMarkdown({ ...responses }));
    });
}
init();