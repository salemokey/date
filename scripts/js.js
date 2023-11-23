function task1 () {
    let data = new Date();
    let den= ["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
    num=data.getDay();
    day=den[num];
    alert(day);
}
function task2() {
    let d = new Date();
    d = Date.parse(d);
    let newYear = Date.parse('1 Jan 2024 00:00');
    newYear = Math.round((newYear - d)/1000/60/60/24);
    alert (`До нового года осталось ${newYear} дней`);
}
function task3 () {
    let data = new Date();
    let den= ["вс","пн", "вт", "ср","чт", "пт", "сб"];
    num=data.getDay();
    let dataObj={
        'curr':den[num],
        'prev':den[num-1],
        'next':den[num+1]
    }
    alert (`${dataObj.prev}\n${dataObj.curr}\n${dataObj.next}`)
}
function task4 (data) {
        let seconds = Math.floor(data / 1000);
        let days = Math.floor(seconds / (24 * 3600));
        seconds %=(24 * 3600);
        let hours = Math.floor(seconds / 3600);
        seconds %=3600;
        let minutes = Math.floor(seconds / 60);
        seconds %=60;
        alert (`d:${days}\nh:${hours}\nm:${minutes}\ns:${seconds}`);
    }
function task5(data) {
    let curData = new Date().getTime();
    console.log (curData);
    let newData = data.replace(/^(.)(.).(.)(.)/,'$3$4.$1$2');
    console.log (newData);
    newData = new Date(newData);
    console.log (newData);
    let yearBirth = curData - newData.getTime()    
    console.log (yearBirth);
    let years = Math.floor(yearBirth / (1000*24*3600*365));
    console.log(`Лет:${years}`);
    let months = Math.floor(years * 12);
    console.log(`Месяцев:${months}`);
    let days = Math.floor(years * 365);
    console.log(`Дней:${days}`);
}
function task6() {
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let fridays = [];
        for (let month = 0; month < 12; month++) {
           let date = new Date(year, month, 13);
           let dayOfWeek = date.getDay();
           if (dayOfWeek == 5) { 
              fridays.push(date);
           } }
         console.log(fridays); }
function task7() {
        let data = new Date();
        data = data.getHours();
        if (data < 12 && data > 05)
        alert ("Доброе утро!")
        else if (data > 12 && data < 18)
        alert ("Добрый день!")
        else 
        alert ("Добрый вечер!")
    }
function task8 () {
    let year = new Date ().getFullYear();
    let holidays = [
        new Date(year, 0, 1), new Date(year, 2, 8), new Date(year, 4, 1), new Date(year, 4, 9), new Date(year, 5, 3), new Date(year, 10, 4), new Date(year, 0, 7), new Date(year, 2, 8), new Date(year, 4, 2), new Date(year, 4, 10), new Date(year, 5, 12), new Date(year, 10, 4) 
      ];
      
      let daysOfWeek = ["вс","пн", "вт", "ср","чт", "пт", "сб"];
      
      let holidayDaysOfWeek = [];
      
      holidays.forEach(function(holiday) {
        let dayOfWeek = holiday.getDay();
        holidayDaysOfWeek.push(daysOfWeek[dayOfWeek]);
      });

      console.log (holidayDaysOfWeek);
      
    }