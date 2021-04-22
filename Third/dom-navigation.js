// Дочерние элементы в DOM
// Для страницы:
<html>
  <body>
    <div>Пользователи:</div>
    <ul>
      <li>Джон</li>
      <li>Пит</li>
    </ul>
  </body>
</html>;

// Напишите код, как получить…
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

//1. document.body.firstElementChild
//2.  document.body.lastElementChild
//3.  document.body.lastElementChild.children[1] или document.body.lastElementChild.lastElemntChild

//Вопрос о соседях
//Если elem – произвольный узел DOM-элемента…
// Правда, что elem.lastChild.nextSibling всегда равен null?   -> у последнего элемента не может быть nextSibling
// Правда, что elem.children[0].previousSibling всегда равен null ? -> Нет, previousSibling может быть узлом

//Выделите ячейки по диагонали
//Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}
