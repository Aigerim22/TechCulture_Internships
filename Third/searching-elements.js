//Поиск элементов
/*
Вот документ с таблицей и формой.
Как найти?…
1. Таблицу с id="age-table".
2. Все элементы label внутри этой таблицы (их три).
3. Первый td в этой таблице (со словом «Age»).
4. Форму form с именем name="search".
5. Первый input в этой форме.
6. Последний input в этой форме.
*/

// 1. let table = document.body.lastElementChild.firstElementChild или document.getElementById("age-table");
// 2. table.getElementsByTagName('label');
// 3. table.getElementsByTagName('td')[0]
// 4. let form = document.body.firstElementChild или  let form = document.getElementsByName('search')[0]
// 5. form.getElementsByTagName('input')[0]
// 6. form.getElementsByTagName('input')[1] или form.lastElementChild


