//Вычислить сумму чисел до данного
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
//with recursion
function sumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return sumTo(n - 1) + n;
  }
}

//Вычислить факториал
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

//Числа Фибоначчи
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

//Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  alert(list.value);
  if (list.next) {
    printList(list.next);
  }
}
printList(list);

//Вывод односвязного списка в обратном порядке
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  alert(list.value);
}
printReverseList(list);
