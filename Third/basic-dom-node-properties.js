//Считаем потомков
/*
Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
*/

for (let elem of document.getElementsByTagName("li")) {
  let title = elem.firstChild.textContent;
  title = title.trim();
  let count = elem.getElementsByTagName("li").length;
  alert(title + ": " + count);
}



//Что содержит свойство nodeType?
// Что выведет этот код?
<html>
  <body>
    <script>alert(document.body.lastChild.nodeType);</script>
  </body>
</html>;
//nodeType = 1 для узлов-элементов





//Тег в комментарии
// Что выведет этот код?
{/* <script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script> */}

//ответ - BODY так как body.tagName = BODY. Data выводит только содержимое текстового узла



//Где в DOM-иерархии "document"?
//Объектом какого класса является document?
// Какое место он занимает в DOM-иерархии?
// Наследует ли он от Node или от Element, или может от HTMLElement?

//1. HTMLDocument можно узнать с помощью document.constructor.name
// 2. Node-> Document-> HTMLDocument
// 3. Node