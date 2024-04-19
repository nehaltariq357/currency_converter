import inquirer from "inquirer";
import chalk from 'chalk';
const currency = {
    USD: 1,
    PKR: 280,
    INR: 74.57,
    EUR: 0.91,
    GBP: 0.76,
};
async function currencyConverter() {
    const { from, to, amount } = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: "select the currecny you want to exchange from ",
            choices: Object.keys(currency),
        },
        {
            name: "to",
            type: "list",
            message: "select the currecny you want to exchange to",
            choices: Object.keys(currency),
        },
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to convert",
        },
    ]);
    const resultAmout = (amount * currency[to]) / currency[from];
    console.log(chalk.greenBright(`${amount} ${from} is converted to ${resultAmout.toFixed(2)} ${to}`));
}
currencyConverter();
