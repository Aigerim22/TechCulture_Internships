//Привет, object
let user ={};
user.name ="John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Проверка на пустоту
function isEmpty(){
    for (let key in obj) {
        return false;
    }
    return true;
}

//Объекты-константы?
const user = {
    name: "John"
  };
  
  // это будет работать?
  user.name = "Pete";
  //Да, будет работать


//Сумма свойств объекта
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for(let s in salaries){
    sum+=salaries[s];
}
alert(sum);

//Умножаем все числовые свойства на 2
function multiplyNumeric(obj){
    for(let prop in obj){
        if(typeof obj[prop] == 'number'){
           obj[prop] *=2;
        }
    }
}