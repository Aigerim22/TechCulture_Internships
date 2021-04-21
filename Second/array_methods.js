//Переведите текст вида border-left-width в borderLeftWidth
function camelize(str) {
  let arr = str.split("-");
  let res = arr
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
  return res;
}

//Фильтрация по диапазону
//Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

//Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
//Сортировать в порядке по убыванию
function sort(arr){
    return arr.sort((a, b) => b-a);

}

// Скопировать и отсортировать массив
function copySorted(arr) {
    return arr.slice().sort();
}
function copySorted(arr) {
    let res = [...arr];
    return res.sort();
}

//Трансформировать в массив имён
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
alert( names );



//Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user=>  ({
  fullName: `${user.name} ${user.surname}`, id: user.id
}));



//Отсортировать пользователей по возрасту
function sortByAge(arr){
  arr.sort((a, b) => a.age - b.age);
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя


//Перемешайте массив
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3];
shuffle(arr);
alert(arr);



//Получить средний возраст
function getAverageAge(arr){
  return arr.reduce((sum, user) => sum + user.age, 0) / arr.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];
alert( getAverageAge(arr) ); 



//Оставить уникальные элементы массива
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
//2nd solution
function unique(arr) {
  let set = new Set()
  for(let item of arr) {
    set.add(item)
  }
    return Array.from(set);
  }
  let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O