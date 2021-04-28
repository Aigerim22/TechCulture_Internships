//Получите атрибут
//Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
<html>
  <body>
    <div data-widget-name="menu">Choose the genre</div>

    <script>
        let elem = document.body.getAttribute('data-widget-name');
        alert(elem); {/*menu*/}
        </script>
  </body>
</html>;




//Сделайте внешние ссылки оранжевыми
<html>
<a name="list">the list</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
{/* let links = document.querySelectorAll('a');
for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // нет атрибута
  if (!href.includes('://')) continue; // нет протокола
  if (href.startsWith('http://internal.com')) continue; // внутренняя
  link.style.color = 'orange';
} */}
</script>
</html>;