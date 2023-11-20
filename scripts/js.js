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