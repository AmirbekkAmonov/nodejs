const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log('######### ==>  To\'g\'ri formatda kiriting: <raqam1> <amal> <raqam2>  <== #########');
  process.exit(1);
}
const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);
let result;
switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    console.log('Noto\'g\'ri amal kiritildi');
    process.exit(1);
}
console.log('Natija:', result);