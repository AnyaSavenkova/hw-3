let firstNum = prompt ("Enter the first number", "");
let secondNum = prompt ("Enter the second number", "")
// let result = Number(firstNum) + Number(secondNum); первый способ
let result = +firstNum + +secondNum; //второй способ
alert (`${firstNum} + ${secondNum} = ${result}`);
