var current_question = -1;
var score = 0;

var rapid = 0;
var left = 0;
var deliberate = 0;
var right = 0;

var rapidity = 0;
var rightness = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = ["I make decisions quickly and instinctively.",
    "I try to look at the bright side as much as possible.",
    "I prefer taking a more passive role in groups.",
    "I have high standards and try to perfect things.",
    "I like taking risks and beating the odds.",
    "I prefer doing what I feel like to do instead of scheduling.",
    "I am sensitive and try to avoid conflict as much as possible.",
    "I am generally more task-oriented than people-oriented.",
    "I like to be on the cutting edge when it comes to innovation.",
    "I see the big picture and how everything is connected together.",
    "I tend to be methodical and careful in my decisions.",
    "I am generally logical and tend to contain my emotions.",
    "I brush off mistakes and tolerate necessary conflict.",
    "I freely express my emotions and interests with others.",
    "I prefer using methods which has worked before.",
    "I like to stay organized and focused.",
    "I take charge and try to make things happen.",
    "I heavily prefer cooperation over competition.",
    "I am considered as introspective and reserved.",
    "I tend to be skeptical of people until I know them better."];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    }

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question % 4 == 1){
        rapid = rapid + score
    }
    else if (current_question % 4 == 2){
        left = left + score
    }
    else if (current_question % 4 == 3){
        deliberate = deliberate + score
    }
    else if (current_question % 4 == 0){
        right = right + score
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        rapidity = rapid - deliberate
        rightness = right - left
        if (rapidity == 0) {
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
    rapidity += score;
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
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";

    if (rapidity > 8){
        if (rightness > 8){
            document.getElementById("result3").innerHTML = "You are a driver!";
        }
        else if (rightness <= 8 && rightness > 0){
            document.getElementById("result3").innerHTML = "You are a driver with pioneer tendencies!";
        }
        else if (rightness >= -8 && rightness < 0){
            document.getElementById("result3").innerHTML = "You are a pioneer with driver tendencies!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are a pioneer!";
        }
    }
    else if (rapidity <= 8 && rapidity > 0){
        if (rightness > 8){
            document.getElementById("result3").innerHTML = "You are a driver with guardian tendencies!";
        }
        else if (rightness <= 8 && rightness > 0){
            document.getElementById("result3").innerHTML = "You are a driver with integrator tendencies!";
        }
        else if (rightness >= -8 && rightness < 0){
            document.getElementById("result3").innerHTML = "You are a pioneer with guardian tendencies!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are a pioneer with integrator tendencies!";
        }
    }
    else if (rapidity >= -8 && rapidity < 0){
        if (rightness > 8){
            document.getElementById("result3").innerHTML = "You are a guardian with driver tendencies!";
        }
        else if (rightness <= 8 && rightness > 0){
            document.getElementById("result3").innerHTML = "You are a guardian with pioneer tendencies!";
        }
        else if (rightness >= -8 && rightness < 0){
            document.getElementById("result3").innerHTML = "You are an integrator with driver tendencies!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are an integrator with pioneer tendencies!";
        }
    }
    else {
        if (rightness > 8){
            document.getElementById("result3").innerHTML = "You are a guardian!";
        }
        else if (rightness <= 8 && rightness > 0){
            document.getElementById("result3").innerHTML = "You are a guardian with integrator tendencies!";
        }
        else if (rightness >= -8 && rightness < 0){
            document.getElementById("result3").innerHTML = "You are an integrator with guardian tendencies!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are an integrator!";
        }
    }
}




