# Automated Quiz Creation Script

This repository contains a Node.js script using Puppeteer to automate quiz creation for various topics. It simplifies the process of generating quiz questions and answers programmatically.

### Usage

Update the script (index.js) with your login credentials.

Execute the script to create quizzes for desired topics. Adjust the quiz data (questions, answers, options) within the createQuestion function call.

#### Example
Here's an example of how to create quiz questions using the script:

await createQuestion('Mathematics Quiz', 'What is 2 + 2?', '4', '3', '5', '6');
