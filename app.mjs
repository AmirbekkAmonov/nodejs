import chalk from "chalk";
const str = `${chalk.red("red")} ${chalk.green("green")} ${chalk.yellow("yellow")} ${chalk.blue("blue")} ${chalk.magenta("magenta")} ${chalk.cyan("cyan")} ${chalk.white("white")} ${chalk.gray("gray")} ${chalk.bgBlack("bgBlack")}`
const str1 = `${chalk.bgRed("bgred")} ${chalk.bgGreen("bgGreen")} ${chalk.bgYellow("bgYellow")} ${chalk.bgBlue("bgBlue")} ${chalk.bgMagenta("bgMagenta")} ${chalk.bgCyan("bgCyan")} ${chalk.bgWhite("bgWhite")} `
console.log(str);
console.log(str1);