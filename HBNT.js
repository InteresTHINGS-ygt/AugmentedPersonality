var current_question = -1;
var score = 0;

var cerebral = 0;
var left = 0;
var limbic = 0;
var right = 0;

var cerebrality = 0;
var rightness = 0;
var cereb_status = "";
var right_status = "";

var test_status = 0;

function buttonclick(score) {
    var questions = ["I am intellectually curious and have a love for learning.",
    "I am a rational thinker who tends to contain emotions.",
    "I am realistic and prefer concrete interests.",
    "I am flexible and like to go with the flow.",
    "I enjoy engaging in complex thought.",
    "I make my decisions primarily based on facts and logic.",
    "I am generally an instinctive and action-oriented person.",
    "I listen to emotions and intuition while making decisions.",
    "I feel at home with abstract concepts and ideas.",
    "I am more of a planner than someone who acts spontaneously.",
    "I learn best with a practical, hands-on style.",
    "I am more people-oriented than task-oriented.",
    "I prefer a job with high intellectual stimulation.",
    "I highly favor efficiency and accuracy in my lifestyle.",
    "I am better at executing ideas than generating them.",
    "I am enthusiastic and express my feelings easily."];

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
    if (cerebrality > 8){
        cereb_status = "Very Cerebral"
    }
    else if (cerebrality > 0){
        cereb_status = "Fairly Cerebral"
    }
    else if (cerebrality > -9){
        cereb_status = "Fairly Limbic"
    }
    else {
        cereb_status = "Very Limbic"
    }

    if (rightness > 8){
        right_status = "Very Right"
    }
    else if (rightness > 0){
        right_status = "Fairly Right"
    }
    else if (rightness > -9){
        right_status = "Fairly Left"
    }
    else {
        right_status = "Very Left"
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("result1").innerHTML = "Your cerebrality is " + cerebrality + " (" + cereb_status + ")";
    document.getElementById("result2").innerHTML = "Your rightness is " + rightness + " (" + right_status + ")";
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

    var cerebrality_percentage = Math.round(((cerebrality + 16)/32) * 100);
    var rightness_percentage = Math.round(((rightness + 16)/32) * 100);

    var cp = cerebrality_percentage + "%";
    var rp = rightness_percentage + "%";

    document.getElementById("point").style.bottom = cp;
    document.getElementById("point").style.left = rp;
}




