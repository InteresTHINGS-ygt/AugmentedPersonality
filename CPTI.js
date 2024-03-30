var current_question = -1;
var score = 0;

var Se = 0;
var Si = 0;
var Ne = 0;
var Ni = 0;
var Te = 0;
var Ti = 0;
var Fe = 0;
var Fi = 0;
// Function scores are between 0 and 21

var ENFJ = 21;
var ENFP = 21;
var ENTJ = 21;
var ENTP = 21;
var ESFJ = 21;
var ESFP = 21;
var ESTJ = 21;
var ESTP = 21;
var INFJ = 21;
var INFP = 21;
var INTJ = 21;
var INTP = 21;
var ISFJ = 21;
var ISFP = 21;
var ISTJ = 21;
var ISTP = 21;
// Type scores are between 0 and 147

var test_status = 0;


function buttonclick(score) {
    var statement_1 = ["I often try to cater to the community",
    "In my decisions, I am highly focused on the emotional atmosphere",
    "I am group-oriented and pursue unity",
    "I often actively help others and resolve conflicts",
    "I prefer giving emotional support over practical solutions",
    "I am confident about others’ feelings and helping others",
    "I may twist the truth in order to preserve harmony",
    "I put a lot of value on being myself and being authentic",
    "I prefer expressing my feelings in indirect ways such as art",
    "I live according to my deeply-felt values",
    "I often naturally stand out from others",
    "I am empathetic in a one-to-one manner",
    "I don’t have a real need to logically justify my decisions if they fit my values",
    "I sometimes have a hard time with objective standards",
    "I tend to have many interests which can be unrelated",
    "I am generally talkative and referencing random things and connections",
    "I am often bold when it comes to new, exotic ideas",
    "I enjoy new ideas, challenges, and mental stimulation",
    "I dislike structure as it limits possibilities",
    "I tend to be forgetful when it comes to practical details",
    "I sometimes remember random things out of nowhere",
    "I trust my sixth sense and intuitive hunches",
    "I am drawn towards the unconscious world and gathering insights",
    "I seek and harbor hidden symbolic meanings",
    "I am all about the big picture and don’t really remember the details",
    "I have a laser focus vision about the future",
    "I can sometimes be like a fortune teller with my predictions",
    "I tend to struggle living in the moment because of my future focus",
    "I try to maximize the pleasure of the moment",
    "I tend to be opportunistic, realistic, and present-oriented",
    "My humor is mostly about practical jokes based on present details",
    "I have a carpe diem attitude towards life",
    "I readily adapt to the changing environment",
    "I am the first to seek new sensory experiences",
    "I generally dislike planning for the future",
    "I focus on duties, details, and doing what is needed",
    "I generally stick with what I know and what has worked",
    "I am generally routinized and predictable",
    "I can focus on one thing for a long time and master it",
    "I am highly focused on self-care and sensory maintenance",
    "I generally follow the rules in favor of physical safety and comfort",
    "I tend to have a hard time with change and branching out of my comfort zone",
    "I try to use my time as efficiently as possible",
    "I am result-oriented and focused on getting things done", 
    "I am generally confident about my planning skills",
    "I find practical solutions wherever I go",
    "My decisions have to be true to objective facts and data",
    "I generally think emotions hinder the ability to make effective decisions",
    "I define myself through my accomplishments and don’t overthink my identity",
    "I make decisions according to my inner sense of truth",
    "I want to know how things and ideas work",
    "I tend to be focused more on the process than the result",
    "Everything needs to make logical sense to me",
    "I tend to learn things in order to tinker around with the knowledge",
    "I can be accidentally rude and miss social cues",
    "I am generally confident about my own logical analysis"];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block";
        document.getElementById("start").style.display = "none";
    }
    
    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").style.display = "none";
    document.getElementById("statement_1").innerHTML = statement_1[current_question];

    
    if (current_question < 8) {
        Fe += score;
    }
    else if (current_question < 15) {
        Fi += score;
    }
    else if (current_question < 22) {
        Ne += score;
    }
    else if (current_question < 29) {
        Ni += score;
    }
    else if (current_question < 36) {
        Se += score;
    }
    else if (current_question < 43) {
        Si += score;
    }
    else if (current_question < 50) {
        Te += score;
    }
    else if (current_question < 57) {
        Ti += score;
    }
    

    if (current_question > (statement_1.length - 1)) {
        document.getElementById("question_number").style.display = "none";
        document.getElementById("statement_1").innerHTML = "";
        ENFJ = (2 * Fe + Ni + Se - Ti) + 21;
        ENFP = (2 * Ne + Fi + Te - Si) + 21;
        ENTJ = (2 * Te + Ni + Se - Fi) + 21;
        ENTP = (2 * Ne + Ti + Fe - Si) + 21;
        ESFJ = (2 * Fe + Si + Ne - Ti) + 21;
        ESFP = (2 * Se + Fi + Te - Ni) + 21;
        ESTJ = (2 * Te + Si + Ne - Fi) + 21;
        ESTP = (2 * Se + Ti + Fe - Ni) + 21;
        INFJ = (2 * Ni + Fe + Ti - Se) + 21;
        INFP = (2 * Fi + Ne + Si - Te) + 21;
        INTJ = (2 * Ni + Te + Fi - Se) + 21;
        INTP = (2 * Ti + Ne + Si - Fe) + 21;
        ISFJ = (2 * Si + Fe + Ti - Ne) + 21;
        ISFP = (2 * Fi + Se + Ni - Te) + 21;
        ISTJ = (2 * Si + Te + Fi - Ne) + 21;
        ISTP = (2 * Ti + Se + Ni - Fe) + 21;

        get_result();
    }
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("func").style.display = "";
    document.getElementById("ENFJ").innerHTML = "ENFJ: " + Math.round(ENFJ / 105 * 10000) / 100;
    document.getElementById("ENFP").innerHTML = "ENFP: " + Math.round(ENFP / 105 * 10000) / 100;
    document.getElementById("ENTJ").innerHTML = "ENTJ: " + Math.round(ENTJ / 105 * 10000) / 100;
    document.getElementById("ENTP").innerHTML = "ENTP: " + Math.round(ENTP / 105 * 10000) / 100;
    document.getElementById("ESFJ").innerHTML = "ESFJ: " + Math.round(ESFJ / 105 * 10000) / 100;
    document.getElementById("ESFP").innerHTML = "ESFP: " + Math.round(ESFP / 105 * 10000) / 100;
    document.getElementById("ESTJ").innerHTML = "ESTJ: " + Math.round(ESTJ / 105 * 10000) / 100;
    document.getElementById("ESTP").innerHTML = "ESTP: " + Math.round(ESTP / 105 * 10000) / 100;
    document.getElementById("INFJ").innerHTML = "INFJ: " + Math.round(INFJ / 105 * 10000) / 100;
    document.getElementById("INFP").innerHTML = "INFP: " + Math.round(INFP / 105 * 10000) / 100;
    document.getElementById("INTJ").innerHTML = "INTJ: " + Math.round(INTJ / 105 * 10000) / 100;
    document.getElementById("INTP").innerHTML = "INTP: " + Math.round(INTP / 105 * 10000) / 100;
    document.getElementById("ISFJ").innerHTML = "ISFJ: " + Math.round(ISFJ / 105 * 10000) / 100;
    document.getElementById("ISFP").innerHTML = "ISFP: " + Math.round(ISFP / 105 * 10000) / 100;
    document.getElementById("ISTJ").innerHTML = "ISTJ: " + Math.round(ISTJ / 105 * 10000) / 100;
    document.getElementById("ISTP").innerHTML = "ISTP: " + Math.round(ISTP / 105 * 10000) / 100;

    document.getElementById("Se").innerHTML = "Extraverted Sensation: " + Math.round(Se / 21 * 10000) / 100;
    document.getElementById("Si").innerHTML = "Introverted Sensation: " + Math.round(Si / 21 * 10000) / 100;
    document.getElementById("Ne").innerHTML = "Extraverted Intuition: " + Math.round(Ne / 21 * 10000) / 100;
    document.getElementById("Ni").innerHTML = "Introverted Intuition: " + Math.round(Ni / 21 * 10000) / 100;
    document.getElementById("Te").innerHTML = "Extraverted Thinking: " + Math.round(Te / 21 * 10000) / 100;
    document.getElementById("Ti").innerHTML = "Introverted Thinking: " + Math.round(Ti / 21 * 10000) / 100;
    document.getElementById("Fe").innerHTML = "Extraverted Feeling: " + Math.round(Fe / 21 * 10000) / 100;
    document.getElementById("Fi").innerHTML = "Introverted Feeling: " + Math.round(Fi / 21 * 10000) / 100;

    document.getElementById("bar_Se").style.width = Math.round(Se / 21 * 10000) / 100 + "%";
    document.getElementById("bar_Si").style.width = Math.round(Si / 21 * 10000) / 100 + "%";
    document.getElementById("bar_Ne").style.width = Math.round(Ne / 21 * 10000) / 100 + "%";
    document.getElementById("bar_Ni").style.width = Math.round(Ni / 21 * 10000) / 100 + "%";
    document.getElementById("bar_Te").style.width = Math.round(Te / 21 * 10000) / 100 + "%";
    document.getElementById("bar_Ti").style.width = Math.round(Ti / 21 * 10000) / 100 + "%";
    document.getElementById("bar_Fe").style.width = Math.round(Fe / 21 * 10000) / 100 + "%";
    document.getElementById("bar_Fi").style.width = Math.round(Fi / 21 * 10000) / 100 + "%";
}




