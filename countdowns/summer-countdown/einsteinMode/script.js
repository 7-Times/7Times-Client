const countdown = () => {
    const objective = new Date('June 17, 2022 14:30:00').getTime();
    const now = new Date().getTime();
    const left = objective - now;

    document.querySelector('.einstein').innerText = left;
    document.querySelector('.center-text').innerText = "Summer Holiday [2022] Countdown [But only programmers and Einstein can understand.]";
    document.querySelector('.center-text').style.fontSize = "3rem";
    

    if(left < 0){
        const past = now - objective;


        document.querySelector('.einstein').innerText = past;
        document.querySelector('.center-text').innerText = "How long it has been since the 17th June 2022 [Summer Holiday] [But only programmers and Einstein can understand.]";
        document.querySelector('.center-text').style.fontSize = "3rem";
    }
}

setInterval(countdown, 1)
