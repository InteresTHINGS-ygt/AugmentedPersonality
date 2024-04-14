var current_question = -1;
var score = 0;

var chol = 0;
var mel = 0;
var san = 0;
var phleg = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = [
            "I would be good leader due to my dominant attitude.",
            "I often feel moody and think of what can go wrong.",
            "I heavily favor variety over routine and boring tasks.",
            "I want my life to be as comfortable as possible.",
            "I tend to be impatient and irritable when things go wrong.",
            "I am analytical and highly aware of what needs to be corrected.",
            "I have an easy time laughing and joking around.",
            "I try to keep a collaborative and peaceful atmosphere.",
            "I focus on goals and getting things done efficiently.",
            "I am often considered as creative and gifted.",
            "I enjoy being with others more than alone time.",
            "My moods tend to be stable and calm.",
            "I tend to have a hard time slowing down and relaxing.",
            "I am generally serious and reserved in social situations.",
            "I am generally seen as enthusiastic and optimistic.",
            "I tend to be indecisive and I generally go with what others want."
        ];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question % 4 == 1){
        chol = chol + score
    }
    else if (current_question % 4 == 2){
        mel = mel + score
    }
    else if (current_question % 4 == 3){
        san = san + score
    }
    else if (current_question % 4 == 0){
        phleg = phleg + score
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        chol = Math.round((chol / 12) * 10000) / 100
        mel = Math.round((mel / 12) * 10000) / 100
        san = Math.round((san / 12) * 10000) / 100
        phleg = Math.round((phleg / 12) * 10000) / 100
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("desc").style.display = "";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("result_chol").innerHTML = "Choleric: " + chol + "%";
    document.getElementById("result_mel").innerHTML = "Melancholic: " + mel + "%";
    document.getElementById("result_san").innerHTML = "Sanguine: " + san + "%";
    document.getElementById("result_phleg").innerHTML = "Phlegmatic: " + phleg + "%";
    
    document.getElementById("bar_chol").style.width = chol + "%";
    document.getElementById("bar_mel").style.width = mel + "%";
    document.getElementById("bar_san").style.width = san + "%";
    document.getElementById("bar_phleg").style.width = phleg + "%";
}




