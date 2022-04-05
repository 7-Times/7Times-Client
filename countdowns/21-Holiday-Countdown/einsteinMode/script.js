const countdown = () => {
    const objective = new Date('April 8, 2022 15:15:00').getTime();
    const now = new Date().getTime();
    const left = objective - now;

    document.querySelector('.einstein').innerText = left;
    document.querySelector('.center-text').innerText = "2.1 Middle Holiday [2022] Countdown [But only programmers and Einstein can understand.]";
    document.querySelector('.center-text').style.fontSize = "3rem";
    

    if(left < 0){
        const past = now - objective;


        document.querySelector('.einstein').innerText = past;
        document.querySelector('.center-text').innerText = "How long it has been since the 8th April 2022 [2.1 Middle Holiday] [But only programmers and Einstein can understand.]";
        document.querySelector('.center-text').style.fontSize = "3rem";
    }
}

setInterval(countdown, 1)
