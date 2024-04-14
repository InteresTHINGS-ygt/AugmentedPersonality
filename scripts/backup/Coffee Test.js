var current_question = -1;
var score = 0;

var M = 12;
var B = 12;
var S = 12;
var A = 12;
var F = 12;
var V = 12;
var P = 12;
var Q = 12;

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
    if (current_question == 1 || current_question == 2){
        M += score;
        B -= score;
    }
    else if (current_question == 3 || current_question == 4){
        B += score;
        M -= score;
    }
    else if (current_question == 5 || current_question == 6){
        S += score;
        A -= score;
    }
    else if (current_question == 7 || current_question == 8){
        A += score;
        S -= score;
    }
    else if (current_question == 9 || current_question == 10){
        F += score;
        V -= score;
    }
    else if (current_question == 11 || current_question == 12){
        V += score;
        F -= score;
    }
    else if (current_question == 13 || current_question == 14){
        Q += score;
        P -= score;
    }
    else if (current_question == 15 || current_question == 16){
        P += score;
        Q -= score;
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        get_result();
    }
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";

    document.getElementById("bar_M").style.width = ((M / 24) * 100) + "%";
    document.getElementById("bar_S").style.width = ((S / 24) * 100) + "%";
    document.getElementById("bar_F").style.width = ((F / 24) * 100) + "%";
    document.getElementById("bar_P").style.width = ((P / 24) * 100) + "%";

    document.getElementById("bar_B").style.width = ((B / 24) * 100) + "%";
    document.getElementById("bar_A").style.width = ((A / 24) * 100) + "%";
    document.getElementById("bar_V").style.width = ((V / 24) * 100) + "%";
    document.getElementById("bar_Q").style.width = ((Q / 24) * 100) + "%";

    var m;
    var s;
    var f;
    var p;

    if (M > B) {
        m = "M";
    }
    else {
        m = "B";
    }

    if (S > A) {
        s = "S";
    }
    else {
        s = "A";
    }

    if (F > V) {
        f = "F";
    }
    else {
        f = "V";
    }

    if (P > Q) {
        p = "P";
    }
    else {
        p = "Q";
    }

    var type = m + s + f + p;
    var coffee;

    if (type == "MSFP") {
        coffee = "Latte";
    }
    else if (type == "MSFQ") {
        coffee = "Flat White";
    }
    else if (type == "MSVP") {
        coffee = "Cappuccino";
    }
    else if (type == "MSVQ") {
        coffee = "Cortado";
    }
    else if (type == "MAFP") {
        coffee = "Mocha";
    }
    else if (type == "MAFQ") {
        coffee = "Caramel Machiatto";
    }
    else if (type == "MAVP") {
        coffee = "Frappuccino";
    }
    else if (type == "MAVQ") {
        coffee = "Affogatto";
    }
    else if (type == "BSFP") {
        coffee = "Cold Brew";
    }
    else if (type == "BSFQ") {
        coffee = "Americano";
    }
    else if (type == "BSVP") {
        coffee = "Nitro Cold Brew";
    }
    else if (type == "BSVQ") {
        coffee = "Instant Coffee";
    }
    else if (type == "BAFP") {
        coffee = "Filter Coffee";
    }
    else if (type == "BAFQ") {
        coffee = "Espresso";
    }
    else if (type == "BAVP") {
        coffee = "Turkish Coffee";
    }
    else if (type == "BAVQ") {
        coffee = "Ristretto";
    }

    document.getElementById("type").innerHTML = "Your type is " + type + " - " + coffee;
}




