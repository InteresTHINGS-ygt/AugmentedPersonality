var current_question = -1;
var score = 0;

var emotional_freedom = 0;
var generalism = 0;
var causal_attitude = 0;

var emo_f = "";
var gen = "";
var cas = "";

var test_status = 0;

function buttonclick(score) {
    var questions = ["I have an easy time controlling my reactions.",
    "I tend to repress my emotions in order to stay rational.",
    "I try to express myself as freely as possible.",
    "I am pretty much authentic and unfiltered.",
    "My interests are very selective and personal.",
    "I focus on one thing to become really good at it.",
    "I feel bored when I am not exploring new interests.",
    "I feel the need to be good at everything.",
    "I take my job seriously and want to perform high.",
    "I care a lot about my performance and presentation.",
    "I just do what I enjoy regardless of performance.",
    "My content tends to have an \"everyday\" vibe."];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    }

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question < 3){
        emotional_freedom += score;
    }
    else if (current_question < 5){
        emotional_freedom += (4-score);
    }
    else if (current_question < 7){
        generalism += score;
    }
    else if (current_question < 9){
        generalism += (4-score);
    }
    else if (current_question < 11){
        causal_attitude += score;
    }
    else if (current_question < 13){
        causal_attitude += (4-score);
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        if (emotional_freedom > 8) {
            emo_f = "Controlled"
        }
        else if (emotional_freedom < 8) {
            emo_f = "Expressive"
        }
        else {
            emo_f = "Balanced"
        }

        if (generalism > 8) {
            gen = "Specialist"
        }
        else if (generalism < 8) {
            gen = "Generalist"
        }
        else {
            gen = "Balanced"
        }

        if (causal_attitude > 8) {
            cas = "Serious"
        }
        else if (causal_attitude < 8) {
            cas = "Casual"
        }
        else {
            cas = "Balanced"
        }
        get_result();
    }
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("result1").innerHTML = "Emotional Style: " + emotional_freedom + " - " + emo_f;
    document.getElementById("result2").innerHTML = "Interest Style: " + generalism + " - " + gen;
    document.getElementById("result3").innerHTML = "Attitude: " + causal_attitude + " - " + cas;
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
}

