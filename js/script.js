
let sec  = document.querySelector('.s'),
    min  = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNumber   = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');


function clock() {
    let time = new Date(),
    seconds = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() :  time.getMinutes();
    
    setTimeout(() => clock(),1000);
}
clock();
    
let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

    for(let i = 0; i < links.length;i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            for(let x = 0; x < links.length;x++) {
                links[x].classList.remove('active');
                tabs[x].classList.remove('active');
            }
            this.classList.add('active');
            tabs[i].classList.add('active');
        })
    }


// Скундомер:

//Переменные
let stopwatchSeconds = document.querySelector('.stopwatch__seconds'), 
    stopwatchMinuts = document.querySelector('.stopwatch__minutes'),
    stopwatchHours = document.querySelector('.stopwatch__hours'),
    stopwatchButton = document.querySelector('.stopwatch__btn'),
    stopwatchTabsLinkSpan = document.querySelector('span');

stopwatchButton.onclick = function () {stopwatchTabsLinkSpan.classList.add('active')}// добавляет актив
function clicker () { // первая функция отслеживает класс и выводит по условия слудующие действия
    if (document.querySelector('span').classList.contains('active')) {
        stopwatchButton.addEventListener('click', function (j) { // проверяет на существования актива если есть то секундомер работает + изменяет html 
            stopwatchTabsLinkSpan.classList.remove('active');
            stopwatchTabsLinkSpan.classList.add('active_clear');
        })
        stopwatchButton.innerHTML = ('Stop');
    }else if (document.querySelector('span').classList.contains('active_clear')){ // проверяет на существования актива_клеар если есть то секундомер останвливается + изменяет html 
        stopwatchButton.addEventListener('click', function (c) {
            stopwatchTabsLinkSpan.classList.remove('active_clear');
            stopwatchTabsLinkSpan.classList.add('active');
        })
        stopwatchButton.innerHTML = ('start')
    }
    setTimeout(() => clicker(),10); // рекурсия 1, без нее фунция вызывается 1 раз, интервал 10 миллесекунд
}

function stowatchScript () { // Функция 2 счетчик
    if (document.querySelector('span').classList.contains('active')){ // проверяет есть ли актив у спанап если есть то открывается счетчик
        stopwatchSeconds.innerHTML++;//привбаление равное вызову функции
        if (stopwatchSeconds.innerHTML > 60) {//обозначение минуты
            stopwatchSeconds.innerHTML = 0;
            stopwatchMinuts.innerHTML++;
        }else if (stopwatchMinuts.innerHTML > 60){//обозначение часа
            stopwatchMinuts.innerHTML = 0;
            stopwatchHours.innerHTML++;
        }
    } 
    setTimeout(() => stowatchScript(),1000);//Рекурсия 2 вызывает функцию раз в секунду
}

clicker();//функция 1
stowatchScript();// Функция 2
//let f = document.querySelector('span').classList.contains('active');
//console.log(f)
