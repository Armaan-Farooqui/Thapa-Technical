import chalk from 'chalk';
import validator from 'validator';

// console.log(chalk.green.bold.inverse("success"));

// console.log(chalk.red.bold.inverse("error"));

// const res = validator.isEmail("armaan@gmail.com");
// console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

const link = validator.isURL("google.om");
console.log(link ? chalk.green.inverse(link) : chalk.red.inverse(link));