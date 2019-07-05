// for
var userNumber = +prompt("Введите число");
var degreeOfNumber = +prompt("Введите степень числа");
var result= 1;
for( var i=degreeOfNumber; i>0; i=i-1 ){
    result *= userNumber;
}
alert (userNumber +" в степени " + degreeOfNumber + " равняется " + result);
