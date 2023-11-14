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
