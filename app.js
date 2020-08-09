var score= 0;
function check() {
    var right_answer_1 = document.getElementById('q1-a5');
    if (right_answer_1.checked == true) {
        score++;
        alert ('Q1 answer is Correct')
    }
    else{
        alert('Q1 answer is Incorrect')
    }
    var right_answer_2 = document.getElementById('q2-a2');
    if (right_answer_2.checked == true) {
        score++;
        alert ('Q2 answer is Correct')
    }
    else{
        alert('Q2 answer is Incorrect')
    }
    var right_answer_3 = document.getElementById('q3-a3');
    if (right_answer_3.checked == true) {
        score++;
        alert ('Q3 answer is Correct')
    }
    else{
        alert('Q3 answer is Incorrect')
    }

    var right_answer_4 = document.getElementById('q4-a5');
    
    if (right_answer_4.checked == true) {
        score++;
        alert ('Q4 answer is Correct')
    }
    else{
        alert('Q4 answer is Incorrect')
    }

    alert("your Score is : " + score)
    

}