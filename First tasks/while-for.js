//Последнее значение цикла
let i = 3;

while (i) {
  alert( i-- );
}
//последнее значение - 1

//Какие значения выведет цикл while?
let i = 0;
while (++i < 5) alert( i ); //1, 2, 3, 4

let i = 0;
while (i++ < 5) alert( i ); //1, 2, 3, 4, 5

//Какие значения выведет цикл for?
for (let i = 0; i < 5; i++) alert( i ); //0 1 2 3 4 
for (let i = 0; i < 5; ++i) alert( i ); //0 1 2 3 4

//Выведите чётные числа
for(let i = 0; i<10; i++){
    if(i%2 == 0) 
    alert(i)
}

//Замените for на while
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

let i = 0;
while(i<3){
    alert( `number ${i}!` );
    i++;
}

//Повторять цикл, пока ввод неверен
let num;
do {
  num = prompt("Введите число большее 100", 0);
} while (num <= 100 && num);


//Вывести простые числа
outer:
for(let i = 2; i<=n; i++){
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue outer;
    }
    alert(i);
}

