alert( null || 2 || undefined );
//2 первое истинное значение

alert( alert(1) || 2 || alert(3) );
// 2 первое истинное значение

alert( 1 && null && 2 );
//null первое ложное значение

alert( alert(1) && alert(2) );
//alert(1) = > undefined => 

alert( null || 2 && 3 || 4 );
//Приоритет оператора && больше, чем у ||
//3 первое истинное значение 

//Проверка значения из диапазона
let age;
if(age>=14 && age<=90)

//Проверка значения вне диапазона
if(!(age>=14 && age<=90))


//Вопрос о "if"
if (-1 || 0) alert( 'first' );  //-1 выполнится
if (-1 && 0) alert( 'second' ); // 0 не выполнится
if (null || -1 && 1) alert( 'third' ); //1 выполнится


// Проверка логина
let login = prompt("Введите логин", '');
if(login == "Админ"){
    let password = prompt("Введите пароль", '');
    if(password == "Я главный"){
        alert("Здраствуйте!");
    }
    else if(password == '' || password == null){
        alert("Отменено");
    }
    else {
        alert("Неверный пароль");
    }
}
else if(login == '' || login == null){
    alert("Отменено");
}
else{
    alert("Я вас не знаю");
}