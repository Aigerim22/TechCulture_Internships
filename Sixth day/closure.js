//Независимы ли счётчики?
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1
//counter и counter2 независимы

//Объект счётчика
function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1
//up and down находятся внутри конструктора Counter и обе имеют доступ к переменной count

//Функция в if
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
//ошибка, потому что sayHi была создана внутри if. Соответственно мы не можем
// ее отдельно вызывать вне

//Сумма с помощью замыканий
function sum(a) {
  return function (b) {
    return a + b;
  };
}
alert(sum(1)(2));
alert(sum(5)(-1));

//Фильтрация с помощью функции
//inBetween
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
//inArray
function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
alert(arr.filter(inArray([1, 2, 10]))); // 1,2

//Сортировать по полю
function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
users.sort(byField("name"));
users.forEach((user) => alert(user.name)); // Ann, John, Pete

//Армия функций
function makeArmy() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      alert(i); 
    };
    shooters.push(shooter);
  }
  return shooters;
}

let army = makeArmy();
army[0](); // 0
army[5](); // 5
