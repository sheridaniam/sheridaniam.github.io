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
var kolichpol =0;
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 0) {
    sum += myArray[i];
    kolichpol++;
  }
}

var min = 0;
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] < min) {
    min = myArray[i];
  }
}

var max = 0;
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > max) {
    max = myArray[i];
  }
}

var countMinus = 0;
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] < 0) {
    countMinus++ ;
  }
}

var oddPositive = 0;
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 0 && myArray[i] % 2 != 0) {
    oddPositive++ ;
  }
}

var evenPositive = 0;
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 0 && myArray[i] % 2 == 0) {
    evenPositive++ ;
  }
}

var summevenPositive = 0;  // четное
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 0 && myArray[i] % 2 == 0) {
    summevenPositive += myArray[i];
  }
}

var summoddPositive = 0; //не четное
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] > 0 && myArray[i] % 2 != 0) {
    summoddPositive+= myArray[i] ;
  }
}

var four = 0;
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] == 4){
    four++;
  }
}
