var cylinderRadius = prompt("Введите значение r (радиус цилиндра)", '');
console.log(cylinderRadius);
var cylinderHeight = prompt("Введите значение h (высота цилиндра)", '');
console.log(cylinderHeight);
var cylinderArea = Math.PI * cylinderRadius * cylinderRadius;
var cylinderVolume = cylinderArea * cylinderHeight;
document.write("Обьем цилиндра с площадью основы " + cylinderArea + " радиусом " + cylinderRadius + " и высотой " + cylinderHeight + " равен: " + cylinderVolume );
