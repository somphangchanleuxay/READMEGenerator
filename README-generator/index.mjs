import inquirer from 'inquirer';
import fs from 'fs';

// Function to generate the README content
const generateREADME = (answers) => {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions about the project, feel free to contact me at [${answers.email}](mailto:${answers.email}).
`;

};

// Inquirer prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the project license:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contributing guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter testing instructions:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    // Generate README content
    const readmeContent = generateREADME(answers);

    // Write to README.md
    fs.writeFileSync('README.md', readmeContent, (err) => {
      if (err) throw err;
      console.log('README.md created successfully!');
    });
  })
  .catch((error) => {
    console.error(error);
  });