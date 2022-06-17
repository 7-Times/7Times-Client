const countdown = () => {
    const objective = new Date('June 17, 2022 14:30:00').getTime();
    const now = new Date().getTime();
    const left = objective - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const leftDay = Math.floor(left / day);
    const leftHour = Math.floor((left % day) / hour);
    const leftMinute = Math.floor((left % hour) / minute);
    const leftSecond = Math.floor((left % minute) / second);

    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
    const currentSecond = new Date().getSeconds();

    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    document.querySelector('.day').innerText = leftDay;
    document.querySelector('.hour').innerText = leftHour;
    document.querySelector('.minute').innerText = leftMinute;
    document.querySelector('.second').innerText = leftSecond;

    document.querySelector('.time').innerText = "Time : " + currentHour + ":" + currentMinute + ":" + currentSecond;
    document.querySelector('.date').innerText = "Date : " + currentDay + "/" + currentMonth + "/" + currentYear;

    if(left < 0){
        const past = now - objective;
        const pastDay = Math.floor(past / day);
        const pastHour = Math.floor((past % day) / hour);
        const pastMinute = Math.floor((past % hour) / minute);
        const pastSecond = Math.floor((past % minute) / second);

        document.querySelector('.center-text').innerText = "How long it has been since the 17th June 2022 [Summer Holiday]";

        document.querySelector('.day').innerText = pastDay;
        document.querySelector('.hour').innerText = pastHour;
        document.querySelector('.minute').innerText = pastMinute;
        document.querySelector('.second').innerText = pastSecond;
        document.querySelector('.center-text').style.fontSize = "4rem";
    }
}

setInterval(countdown, 1000)
