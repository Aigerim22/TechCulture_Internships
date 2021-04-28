// Можно ли "перевыполнить" промис?
let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
//выведет 1, следующий код игнорируется

//   Задержка на промисах
//Без Promise
function delay(ms) {
  // ваш код
}
delay(3000).then(() => alert("выполнилось через 3 секунды"));

//C Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));

// Анимация круга с помощью промиса
function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  return new Promise((resolve) => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 0);
  });
}
