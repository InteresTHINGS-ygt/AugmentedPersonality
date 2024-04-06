var current_question = -1;
var score = 0;

var cerebral = 0;
var left = 0;
var limbic = 0;
var right = 0;

var cerebrality = 0;
var rightness = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = ["I always try to maintain a harmonious atmosphere.",
    "I consider others' feelings before I speak.",
    "I readily express myself in bold ways.",
    "I tend to say whatever I am thinking about.",
    "I am generally considered as methodical and cautious.",
    "I make peace by creating routines and habits.",
    "I am the first to get into new, exotic experiences or ideas.",
    "I am a passionate person who is full of enthusiasm.",
    "I am generally flexible and adapt to my environment.",
    "I have an easy time going with the flow.",
    "I tend to have strong and resolute values.",
    "I am considered as a perfectionist with high standards.",
    "I work to get things done as quickly as possible.",
    "I tend to live a fast-paced lifestyle.",
    "I am willing to wait for a long time if it is worth it.",
    "I prefer playing the long game."];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    }

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question % 4 == 1){
        cerebral = cerebral + score
    }
    else if (current_question % 4 == 2){
        left = left + score
    }
    else if (current_question % 4 == 3){
        limbic = limbic + score
    }
    else if (current_question % 4 == 0){
        right = right + score
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        cerebrality = cerebral - limbic
        rightness = right - left
        if (cerebrality == 0) {
            tiebreaker_c();
        }
        else if (rightness == 0) {
            tiebreaker_r();
        }
        else {
            get_result();
        }
    }
    
}

function tiebreaker_c() {
    document.getElementById("test").style.display = "none";
    document.getElementById("tiebreaker_c").style.display = "block";
}

function tiebreaker_r() {
    document.getElementById("test").style.display = "none";
    document.getElementById("tiebreaker_r").style.display = "block";
}

function tiebreakerclick_c(score) {
    cerebrality += score;
    document.getElementById("tiebreaker_c").style.display = "none";
    if (rightness == 0) {
        tiebreaker_r();
    }
    else {
        get_result();
    }
}

function tiebreakerclick_r(score) {
    rightness += score;
    document.getElementById("tiebreaker_r").style.display = "none";
    get_result();
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("result1").innerHTML = "Your cerebrality is " + cerebrality;
    document.getElementById("result2").innerHTML = "Your rightness is " + rightness;
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";

    if (cerebrality > 8){
        if (rightness > 8){
            document.getElementById("result3").innerHTML = "You are a fascinator!";
        }
        else if (rightness <= 8 && rightness > 0){
            document.getElementById("result3").innerHTML = "You are an inventor!";
        }
        else if (rightness >= -8 && rightness < 0){
            document.getElementById("result3").innerHTML = "You are a scientist!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are a technician!";
        }
    }
    else if (cerebrality <= 8 && cerebrality > 0){
        if (rightness > 8){
            document.getElementById("result3").innerHTML = "You are an adventurer!";
        }
        else if (rightness <= 8 && rightness > 0){
            document.getElementById("result3").innerHTML = "You are an entrepreneur!";
        }
        else if (rightness >= -8 && rightness < 0){
            document.getElementById("result3").innerHTML = "You are a professor!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are an architect!";
        }
    }
    else if (cerebrality >= -8 && cerebrality < 0){
        if (rightness > 8){
            document.getElementById("result3").innerHTML = "You are an influencer!";
        }
        else if (rightness <= 8 && rightness > 0){
            document.getElementById("result3").innerHTML = "You are a coach!";
        }
        else if (rightness >= -8 && rightness < 0){
            document.getElementById("result3").innerHTML = "You are a go-getter!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are an inspector!";
        }
    }
    else {
        if (rightness > 8){
            document.getElementById("result3").innerHTML = "You are an entertainer!";
        }
        else if (rightness <= 8 && rightness > 0){
            document.getElementById("result3").innerHTML = "You are a caregiver!";
        }
        else if (rightness >= -8 && rightness < 0){
            document.getElementById("result3").innerHTML = "You are a guardian!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are an administrator!";
        }
    }
}




