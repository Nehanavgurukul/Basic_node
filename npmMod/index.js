const chalk = require('chalk');
const validator = require('validator');
console.log(chalk.red.underline.inverse("Hello -Neha Yadav"));

const  vali = validator.isEmail("neha333@gmail.com");
console.log(vali ? chalk.green.inverse(vali): chalk .yellow.inverse(vali));



