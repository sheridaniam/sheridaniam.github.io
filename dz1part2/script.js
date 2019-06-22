var r = prompt("Введите значение r (радиус цилиндра)", '');
var h = prompt("Введите значение h (высота цилиндра)", '');
var V = Math.PI * r * r * h;
var S = V/h;
console.log(r);
console.log(h);
console.log(V);
document.write("Обьем цилиндра с площадью основы " + S + " радиусом " + r + " и высотой " + h + " равен: " + V );
