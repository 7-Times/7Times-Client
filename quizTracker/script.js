window.onload = () => {
    let quizText1 = document.getElementById('quiz1');
    let quizText2 = document.getElementById('quiz2');
    let quizText3 = document.getElementById('quiz3');
    function getData() {

    
    
    
        //fetch the data and set the response to variable
        fetch('https://server-for-7times.herokuapp.com/latest/quiz')
        .then(response => response.json())
        .then(data => {
            let quiz = data;
            console.log(quiz);
            quizText1.innerHTML = "Closest Quiz/Test: " + quiz[0].date + " " + quiz[0].className;
            quizText2.innerHTML = "2nd Closest Quiz/Test: " + quiz[1].date + " " + quiz[1].className;
            quizText3.innerHTML = "3rd Closest Quiz/Test: " + quiz[2].date + " " + quiz[2].className;
        })
    }
    getData();
}