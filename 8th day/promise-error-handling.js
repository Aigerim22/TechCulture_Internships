//Ошибка в setTimeout
//Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);
//нет, не выполнится, так как здесь есть неявный try/catch 