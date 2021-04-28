//Проверка синтаксиса  Каким будет результат выполнения этого кода?
let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  }
  
  (user.go)()

// Ошибка забыли ; перед вызовом метода, то есть не закончили создание объекта

// Объясните значение "this"
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// 1 и 2 сработают, так как все правильно мы получим сам объект
// 3 и 4 нет, точнее получим не объект а undefined, так как здесь мы потеряли this
//(method = obj.go)();  => let method = obj.go  method() здесь мы потеряли this
//(obj.go || obj.stop)(); здесь obj.go возвращает нам свойство объекта а не его метод, дальше исполняется код метода


//Использование "this" в литерале объекта
//Каким будет результат при обращении к свойству объекта ref? Почему?
function makeUser() {
    return {
      name: "Джон",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name );
  // имя объекта мы не получим, ref: this вернет нам текущее значение функции который неопределен


//Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
    read(){
        this.a = +prompt("Введите первое число", 0);
        this.b = +prompt("Введите второе число", 0);
    }, 
    sum() {
        return this.a + this.b;
    }, 
    mul() {
       return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );


//Цепь вызовов
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
//Измените код методов up, down и showStep 
//таким образом, чтобы их вызов можно было сделать по цепочке, например так:
ladder.up().up().down().showStep(); // 1
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };
  // после вызова каждого метода возвращаем сам объект