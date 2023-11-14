function task1 () {
    let data = new Date();
    let den= ["воскресенье","понедельник", "вторник", "среда","четверг", "пятница", "суббота"];
    num=data.getDay();
    day=den[num];
    alert(day);
}
