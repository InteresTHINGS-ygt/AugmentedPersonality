var current_question = -1;
var score = 0;


var oi = 0;
var di = 0;
var d = 0;
var n = 0;
var f = 0;

var test_status = 0;

function buttonclick(score) {
    var questions_1 = ["I need to check out every new information",
    "I feel compelled to change things up",
    "I fear being controlled and limited by routines",
    "I feel responsible for aligning with others",
    "I prioritize what others value or need",
    "I have a need for confirmation by others",
    "I focus on finding the missing information",
    "I am more likely to rant about things",
    "I feel worried about bad things happening",
    "I tend to start with the facts and realities",
    "I talk in a factual and realistic manner",
    "I ignore wild guesses in favor of factual proof",
    "I tend to consider if it works or not",
    "I decide based on what makes sense",
    "I ignore values in favor of what is actually working"];

    var questions_2 = ["I need to make sense of what I know",
    "I have a need to keep things constant",
    "I fear chaos destroying what I have already built",
    "I feel responsible for building my own sense of self",
    "I prioritize my own values or reasons",
    "I have a need to be independent from others",
    "I focus on comparing myself to others",
    "I am more likely to rant about people",
    "I feel worried about being judged",
    "I tend to start with patterns and guesses",
    "I talk in an abstract and conceptual manner",
    "I ignore the facts in favor of the patterns",
    "I tend to consider values, likes, and dislikes",
    "I decide based on what is valued",
    "I ignore reasons in favor of what is liked"];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("startline").style.display = "none"
        document.getElementById("start").style.display = "none"
    }

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement_1").innerHTML = questions_1[current_question];
    document.getElementById("Statement_2").innerHTML = questions_2[current_question];
    if (current_question < 4){
        oi += score;
    }
    else if (current_question < 7){
        di += score;
    }
    else if (current_question < 10){
        d += score;
    }
    else if (current_question < 13){
        n += score;
    }
    else if (current_question < 16){
        f += score;
    }

    if (current_question > (questions_1.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement_1").style.display = "none";
        document.getElementById("Statement_2").style.display = "none";
        get_result();
    }
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";

    document.getElementById("bar_M").style.width = (((9-oi) / 9) * 100) + "%";
    document.getElementById("bar_S").style.width = ((di / 9) * 100) + "%";
    document.getElementById("bar_F").style.width = (((9-d) / 9) * 100) + "%";
    document.getElementById("bar_P").style.width = (((9-n) / 9) * 100) + "%";
    document.getElementById("bar_1").style.width = (((9-f) / 9) * 100) + "%";

    document.getElementById("bar_B").style.width = ((oi / 9) * 100) + "%";
    document.getElementById("bar_A").style.width = (((9-di) / 9) * 100) + "%";
    document.getElementById("bar_V").style.width = ((d / 9) * 100) + "%";
    document.getElementById("bar_Q").style.width = ((n / 9) * 100) + "%";
    document.getElementById("bar_2").style.width = ((f / 9) * 100) + "%";

    var raw_type;

    var C1;
    var C2;
    var C3;
    var C4;
    var C5;

    if (oi >= 5) {
        C1 = "O";
    }
    else {
        C1 = "G";
    }

    if (di >= 5) {
        C2 = "S";
    }
    else {
        C2 = "T";
    }

    if (d >= 5) {
        C3 = "D";
    }
    else {
        C3 = "O";
    }

    if (n >= 5) {
        C4 = "N";
    }
    else {
        C4 = "S";
    }

    if (f >= 5) {
        C5 = "F";
    }
    else {
        C5 = "T";
    }

    raw_type = C1 + C2 + C3 + C4 + C5;

    var full_type;

    if (raw_type == "OSDNF") {
        full_type = "Fi/Ni";
    }
    else if (raw_type == "OSDNT") {
        full_type = "Ti/Ni";
    }
    else if (raw_type == "OSDSF") {
        full_type = "Fi/Si";
    }
    else if (raw_type == "OSDST") {
        full_type = "Ti/Si";
    }
    else if (raw_type == "OSONF") {
        full_type = "Ni/Fi";
    }
    else if (raw_type == "OSONT") {
        full_type = "Ni/Ti";
    }
    else if (raw_type == "OSOSF") {
        full_type = "Si/Fi";
    }
    else if (raw_type == "OSOST") {
        full_type = "Si/Ti";
    }
    else if (raw_type == "OTDNF") {
        full_type = "Fe/Ni";
    }
    else if (raw_type == "OTDNT") {
        full_type = "Te/Ni";
    }
    else if (raw_type == "OTDSF") {
        full_type = "Fe/Si";
    }
    else if (raw_type == "OTDST") {
        full_type = "Te/Si";
    }
    else if (raw_type == "OTONF") {
        full_type = "Ni/Fe";
    }
    else if (raw_type == "OTONT") {
        full_type = "Ni/Te";
    }
    else if (raw_type == "OTOSF") {
        full_type = "Si/Fe";
    }
    else if (raw_type == "OTOST") {
        full_type = "Si/Te";
    }
    else if (raw_type == "GSDNF") {
        full_type = "Fi/Ne";
    }
    else if (raw_type == "GSDNT") {
        full_type = "Ti/Ne";
    }
    else if (raw_type == "GSDSF") {
        full_type = "Fi/Se";
    }
    else if (raw_type == "GSDST") {
        full_type = "Ti/Se";
    }
    else if (raw_type == "GSONF") {
        full_type = "Ne/Fi";
    }
    else if (raw_type == "GSONT") {
        full_type = "Ne/Ti";
    }
    else if (raw_type == "GSOSF") {
        full_type = "Se/Fi";
    }
    else if (raw_type == "GSOST") {
        full_type = "Se/Ti";
    }
    else if (raw_type == "GTDNF") {
        full_type = "Fe/Ne";
    }
    else if (raw_type == "GTDNT") {
        full_type = "Te/Ne";
    }
    else if (raw_type == "GTDSF") {
        full_type = "Fe/Se";
    }
    else if (raw_type == "GTDST") {
        full_type = "Te/Se";
    }
    else if (raw_type == "GTONF") {
        full_type = "Ne/Fe";
    }
    else if (raw_type == "GTONT") {
        full_type = "Ne/Te";
    }
    else if (raw_type == "GTOSF") {
        full_type = "Se/Fe";
    }
    else if (raw_type == "GTOST") {
        full_type = "Se/Te";
    }

    document.getElementById("type").innerHTML = full_type;
}




