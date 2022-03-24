//fetch random user and set the response to a variable
let userName = {}


window.onload = () => {
    let quizText1 = document.getElementById('quiz1');
    let quizText2 = document.getElementById('quiz2');
    let quizText3 = document.getElementById('quiz3');
    function getData() {

    
    
    
        //fetch the data and set the response to variable
        fetch('http://127.0.0.1:3000/latest/quiz')
        .then(response => response.json())
        .then(data => {
            let quiz = data;
            console.log(quiz);
            quizText1.innerHTML = "En yakin Quiz/Sinav: " + quiz[0].date + " " + quiz[0].className;
            quizText2.innerHTML = "2. En yakin Quiz/Sinav: " + quiz[1].date + " " + quiz[1].className;
        })
    }
    getData();
}