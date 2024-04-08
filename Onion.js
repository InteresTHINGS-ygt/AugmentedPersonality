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
    var questions = ["I readily explore new interests and hobbies.",
    "I have a wide array of things that I am interested in.",
    "I focus on one area of expertise in order to master it.",
    "I prefer focusing on what I am already good at.",
    
    "I move on to new things as soon as they are released.",
    "I can't stand thinking about the past for a long time.",
    "I highly appreciate the classics and timeless masterpieces.",
    "I enjoy reliving my own past memories.",
    
    "I enjoy a wide variety of tasks and things to do.",
    "I am considered as a person who is a good multitasker.",
    "I prefer focusing on a single task without interruption.",
    "I stay loyal to my work and the people important to me.",
    
    "I have interests or habits which can seem weird to others.",
    "I enjoy exploring obscure topics which no one else explores.",
    "I prefer fitting in rather than standing out.",
    "I have a lifestyle which is pretty similar to most people."];

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
        P += score;
        Q -= score;
    }
    else if (current_question == 15 || current_question == 16){
        Q += score;
        P -= score;
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
        m = "E";
    }
    else {
        m = "F";
    }

    if (S > A) {
        s = "N";
    }
    else {
        s = "T";
    }

    if (F > V) {
        f = "V";
    }
    else {
        f = "L";
    }

    if (P > Q) {
        p = "U";
    }
    else {
        p = "C";
    }

    var type = m + s + f + p;
    var coffee;

    if (type == "ENVU") {
        coffee = "The Adventurer";
        document.getElementById("ENVU").style.display = "";
    }
    else if (type == "ENVC") {
        coffee = "The Early Adopter";
        document.getElementById("ENVC").style.display = "";
    }
    else if (type == "ENLU") {
        coffee = "The Nomad";
        document.getElementById("ENLU").style.display = "";
    }
    else if (type == "ENLC") {
        coffee = "The Voyager";
        document.getElementById("ENLC").style.display = "";
    }
    else if (type == "ETVU") {
        coffee = "The Time Traveler";
        document.getElementById("ETVU").style.display = "";
    }
    else if (type == "ETVC") {
        coffee = "The Lifestyle Master";
        document.getElementById("ETVC").style.display = "";
    }
    else if (type == "ETLU") {
        coffee = "The Maverick";
        document.getElementById("ETLU").style.display = "";
    }
    else if (type == "ETLC") {
        coffee = "The Performer";
        document.getElementById("ETLC").style.display = "";
    }
    else if (type == "FNVU") {
        coffee = "The Specialist";
        document.getElementById("FNVU").style.display = "";
    }
    else if (type == "FNVC") {
        coffee = "The Supporter";
        document.getElementById("FNVC").style.display = "";
    }
    else if (type == "FNLU") {
        coffee = "The Devotee";
        document.getElementById("FNLU").style.display = "";
    }
    else if (type == "FNLC") {
        coffee = "The Enthusiast";
        document.getElementById("FNLC").style.display = "";
    }
    else if (type == "FTVU") {
        coffee = "The Deep Diver";
        document.getElementById("FTVU").style.display = "";
    }
    else if (type == "FTVC") {
        coffee = "The Collector";
        document.getElementById("FTVC").style.display = "";
    }
    else if (type == "FTLU") {
        coffee = "The Comfort Seeker";
        document.getElementById("FTLU").style.display = "";
    }
    else if (type == "FTLC") {
        coffee = "The Connoisseur";
        document.getElementById("FTLC").style.display = "";
    }

    document.getElementById("type").innerHTML = "Your type is " + type + " - " + coffee;
}




