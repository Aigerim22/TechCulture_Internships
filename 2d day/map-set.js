//Фильтрация уникальных элементов массива
function unique(arr) {
    return Array.from(new Set(arr));
  }

//Отфильтруйте анаграммы
function aclean(arr){
  let res;
  let set = new Set();
  for (let elem of arr){
    res = elem.toLowerCase().split("").sort().join("");
    set.add(res);  
  }
  return Array.from(set);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );




// //Перебираемые ключи
let map = new Map();
map.set("name", "John");
let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

//keys это не массив, так что не можем применить push
//map.keys() вернул нам объект вместо массива
// c помощью ArrayFrom можно передать итерируемый объект и получить массив, только потом использовать методы для массива
let keys = Array.from(map.keys()); 
keys.push("more");