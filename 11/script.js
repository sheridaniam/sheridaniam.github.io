var randomNumber = +prompt("Введите натуральное число");

var someFunction = function(x) {                     //наверное это корявый, но для меня самый логически понятный
  for ( x = 0; Math.pow(2, x) <= randomNumber || Math.pow(2, x) > randomNumber; x++ ) {
    if(Math.pow(2, x)===randomNumber){
      alert("YES");
      break
    } else if (Math.pow(2, x) > randomNumber) {
      alert("NO");
      break
    }
  }
}

someFunction(randomNumber);

var randomNumber = +prompt("Введите натуральное число");

var someFunctionRecurs = function(x) { //делить до единицы натолкнул какой-то пример в описании рекурсии, я б сама не дошла до этого :((
  if(x === 1) {
    alert("YES");
  } else {
      var result = x / 2;
      if (result===1) {
        alert("YES");
      } else if (result < 1) {
        alert("NO");
      } else {
        someFunctionRecurs(result);
      }
   }
}

someFunctionRecurs(randomNumber);
