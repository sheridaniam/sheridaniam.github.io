var userAge = prompt("Сколько вам лет?");
if(userAge % 10 == 1 && userAge != 11) {
  alert("Вам " + userAge + " год!");
} else if ((userAge % 10 == 2 || userAge % 10 == 3 || userAge % 10 == 4) && !(userAge >=12 && userAge <=14)) {
  alert("Вам " + userAge + " года!");
} else {
  alert("Вам " + userAge + " лет!")
}
