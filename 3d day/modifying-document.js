//createTextNode vs innerHTML vs textContent
/*
У нас есть пустой DOM-элемент elem и строка text.
Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text
*/
// elem.append и elem.textContent используются для вставки текста
//elem.innerHTML вставит вместе со всеми тегами

//Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
<html>
  <ol id="elem">
    <li>Привет</li>
    <li>Мир</li>
  </ol>
  <script>
    {/* function clear(elem) {
  let res = document.getElementById(elem);
  elem.remove(); 

  //или elem.innerHTML = '';
}
  clear(elem);  */}
  </script>
</html>;

//Почему остаётся "aaa"?
//Запустите этот пример. Почему вызов remove не удалил текст "aaa"?
<html>
  <table id="table">
    aaa
    <tr>
      <td>Тест</td>
    </tr>
  </table>

  <script>
    alert(table); // таблица, как и должно быть table.remove(); // почему в
    документе остался текст "ааа"??
  </script>
</html>;
//потому что нельзя вставлять текст внутри table без использования специальных табличных тегов

//Создайте список
{
  /* <script>
let ul = document.createElement('ul');
document.body.append(ul);
while (true) {
  let data = prompt("Введите текст для списка", "");
  if (!data) {
    break;
  }
  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}
</script> */
}



//Создайте дерево из объекта
/*
  <script>
    let data = {
      "Рыбы": {
        "форель": {},
        "лосось": {}
      },

      "Деревья": {
        "Огромные": {
          "секвойя": {},
          "дуб": {}
        },
        "Цветковые": {
          "яблоня": {},
          "магнолия": {}
        }
      }
    };
    function createTree(container, obj) {
      container.innerHTML = createTreeText(obj);
    }
let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере
</script>
*/



//Выведите список потомков в дереве
{/* <script>
let lis = document.getElementsByTagName('li');

for (let li of lis) {
  // получить количество всех <li> ниже этого <li>
  let descendantsCount = li.getElementsByTagName('li').length;
  if (!descendantsCount) continue;

  // добавить непосредственно к текстовому узлу (добавить к тексту)
  li.firstChild.data += ' [' + descendantsCount + ']';
}
</script> */}




//Создайте календарь в виде таблицы
{/* <script>
    function createCalendar(elem, year, month) {

      let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
      let d = new Date(year, mon);

      let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

      // пробелы для первого ряда
      // с понедельника до первого дня месяца
      // * * * 1  2  3  4
      for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      // <td> ячейки календаря с датами
      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      // добить таблицу пустыми ячейками, если нужно
      // 29 30 31 * * * *
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      // закрыть таблицу
      table += '</tr></table>';

      elem.innerHTML = table;
    }

    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
      let day = date.getDay();
      if (day == 0) day = 7; // сделать воскресенье (0) последним днем
      return day - 1;
    }

    createCalendar(calendar, 2012, 9);
  </script> */}



//Вставьте HTML в список
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>
//one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');


//Сортировка таблицы
{/* <script>
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);
</script> */}