// for
var userNumber = +prompt("Введите число");
var degreeOfNumber = +prompt("Введите степень числа");
var result= 1;
for( var i=degreeOfNumber; i>0; i=i-1 ){
    result *= userNumber;
}
alert (userNumber +" в степени " + degreeOfNumber + " равняется " + result);


//while
var userNumber = +prompt("Введите число");  
var degreeOfNumber = +prompt("Введите степень числа"); 
var result= 1;
var i=0;
while (i < degreeOfNumber) {
    i++;
    result *= userNumber; 
}
alert (userNumber +" в степени " + degreeOfNumber + " равняется " + result);


//do while
var userNumber = +prompt("Введите число");  
var degreeOfNumber = +prompt("Введите степень числа");
var result= 1;
var i=0;
do {
    i++;
    result *= userNumber
} while (i < degreeOfNumber);
console.log(userNumber +" в степени " + degreeOfNumber + " равняется " + result);
