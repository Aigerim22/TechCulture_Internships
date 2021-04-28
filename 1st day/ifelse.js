//if (строка с нулём)
if ("0") {
    alert( 'Привет' );
}

// ответ - Да
//Boolean("0") = true

//Название JavaScript
let result = prompt('Какое "официальное" название JavaScript?', '');
if(result == "ECMAScript"){
    alert("Правильно")
}
else {
    alert("Не знаете? ECMAScript!")
}

//Покажите знак числа
let number = prompt("Введите значение", 0);
if(number>0){
    alert(1)
}
else if(number<0){
    alert(-1);
}
else {
    alert(0);
}


//Перепишите 'if' в '?'
let result;
result  = (a + b > 4) ? 'Мало' : 'Много';

//Перепишите 'if..else' в '?'
let message;
message = (login == 'Сотрудник') ? 'Привет':
          (login == 'Директор') ? 'Здравствуйте':
          (login == '') ? 'Нет логина':
          '';
