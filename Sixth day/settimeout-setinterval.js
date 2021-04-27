//Вывод каждую секунду
function printNumbers(from, to) {
  let cur = from;
  let timerId = setInterval(function () {
    alert(cur);
    if (cur == to) {
      clearInterval(timerId);
    }
    cur++;
  }, 1000);
}
//by recursive setTimeout
function printNumbers(from, to) {
  let cur = from;
  setTimeout(function go() {
    alert(cur);
    if (cur < to) {
      setTimeout(go, 1000);
    }
    cur++;
  }, 1000);
}
printNumbers(5, 10);

//Что покажет setTimeout?
let i = 0;
setTimeout(() => alert(i), 100); // ?
// предположим, что время выполнения этой функции >100 мс
for (let j = 0; j < 100000000; j++) {
  i++;
}
//переменная i будет увеличиваться в промежутке 0 и 100000000
//но только после него запустится setTimeout, то есть последнее значение i это 100000000
//поэтому alert выведет 100000000
