var firstNumber = +prompt("Введите первое число (х)");
var mathOperation = prompt("Введите математическую операцию +, - , *, /, %");
var secondNumber = +prompt("Введите второе число (у)");
console.log(firstNumber, mathOperation, secondNumber);

var doMath = function (x, znak, y){
  if (znak === "+") {
     alert(x + y);
  }
  if (znak === "-") {
    alert(x - y);
  }
  if (znak === "*") {
    alert(x * y);
  }
  if (znak === "/") {
    alert(x / y);
  }
  if (znak === "%") {
    alert(x % y);
  }
}
 doMath(firstNumber, mathOperation, secondNumber );
