//Создайте дату
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.
alert(new Date(2012, 2, 20, 3, 12, 0));

// Покажите день недели
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
//  «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
{
  /* <script> */
}
const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
function getWeekDay(date) {
  let day = date.getDay();
  if (day == 0) return weekDays[weekDays.length - 1];
  else if (day == 1) return weekDays[0];
  else if (day == 2) return weekDays[1];
  else if (day == 3) return weekDays[2];
  else if (day == 4) return weekDays[3];
  else if (day == 5) return weekDays[4];
  else if (day == 6) return weekDays[5];
  else if (day == 7) return weekDays[6];
}
let date = new Date(2012, 0, 3); // 3 января 2012 года
alert(getWeekDay(date));

//   или
//   function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//     return days[date.getDay()];
//   }
//   </script>

//День недели в европейской нумерации
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}


//Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое 
// и getDateAgo(new Date(), 2) – восемнадцатое.
function getDateAgo(date, number){
    let d = new Date(date);
    let day = date.getDate();
    d.setDate(day - number)
    return (d.getDate());
  }



  //Последнее число месяца?
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

// Сколько сегодня прошло секунд?
  function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; 
    return Math.round(diff / 1000); 
  }


//Сколько секунд осталось до завтра?
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = tomorrow- now; 
    return Math.round(diff / 1000); 
  }


//Форматирование относительной даты
function formatDate(date) {
    let diff = new Date() - date; 
    if (diff < 1000) {
      return 'прямо сейчас';
    }
    let sec = Math.floor(diff / 1000); 
  
    if (sec < 60) {
      return sec + ' сек. назад';
    }
    let min = Math.floor(diff / 60000); 
    if (min < 60) {
      return min + ' мин. назад';
    }
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); 

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }