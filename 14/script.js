/*Найти сумму и количество положительных элементов. 
Найти минимальный элемент массива. 
Найти максимальный элемент массива. 
Определить количество отрицательных элементов. 
Найти количество нечетных положительных элементов.
Найти количество четных положительных элементов. 
Найти сумму четных положительных элементов. 
Найти сумму нечетных положительных элементов. 
Найти определить количество элементов, равных 4.*/

var myArray =  [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47,];

var sum = 0;
var countpositiveNumbers =0;
var minElement = 0;
var maxElement = 0;
var countNegativElements = 0;
var oddPositivElements = 0;
var evenPositivElements = 0;
var sumEvenPositive = 0;
var sumOddPositive = 0;
var countFourElements = 0;
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 0) {
    sum += myArray[i];    //Найти сумму и количество положительных элементов.
    countpositiveNumbers++;
  }
  if (myArray[i] < minElement) {
    minElement = myArray[i];  //Найти минимальный элемент массива.
  }
  if (myArray[i] > maxElement) {
    maxElement = myArray[i];  //Найти максимальный элемент массива.
  }
  if (myArray[i] < 0) {
    countNegativElements++ ;  //Определить количество отрицательных элементов.
  }
  if (myArray[i] > 0 && myArray[i] % 2 != 0) {
    oddPositivElements++ ; //Найти количество нечетных положительных элементов.
  }
  if (myArray[i] > 0 && myArray[i] % 2 == 0) {
    evenPositivElements++ ;  //Найти количество четных положительных элементов.
  }
  if (myArray[i] > 0 && myArray[i] % 2 == 0) {
    sumEvenPositive += myArray[i];  //Найти сумму четных положительных элементов.
  }
  if (myArray[i] > 0 && myArray[i] % 2 != 0) {
    sumOddPositive+= myArray[i] ;  //Найти сумму нечетных положительных элементов.
  }
  if (myArray[i] == 4){
    countFourElements++;   //Найти определить количество элементов, равных 4.
  }

}
console.log("Сумма положительных элементов = " + sum + ", количество положительных элементов = " +countpositiveNumbers );
console.log("Минимальный элемент массива = " + minElement );
console.log("Максимальный элемент массива = " + maxElement );
console.log("Количество отрицательных элементов = " + countNegativElements );
console.log("Количество нечетных положительных элементов = " + oddPositivElements );
console.log("Количество четных положительных элементов = " + evenPositivElements );
console.log("Сумма четных положительных элементов = " + sumEvenPositive );
console.log("Сумма нечетных положительных элементов = " + sumOddPositive );
console.log("Количество элементов, равных 4. = " + countFourElements );
