//Две функции - один объект
//Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

//да, возможно 
 

//Создание калькулятора при помощи конструктора
function Calculator() {
    this.read = function() {
      this.a = +prompt("Введите первое число", 0);
      this.b = +prompt("Введите второе число", 0);
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );


//  Создаём Accumulator
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
        this.value+= +prompt("введите значение", 0);
    };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений