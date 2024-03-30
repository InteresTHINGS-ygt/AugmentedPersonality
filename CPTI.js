var current_question = -1;
var score = 0;

var Se = 14;
var Si = 14;
var Ne = 14;
var Ni = 14;
var Te = 14;
var Ti = 14;
var Fe = 14;
var Fi = 14;
// Function scores are between 0 and 28

var ENFJ = 56;
var ENFP = 56;
var ENTJ = 56;
var ENTP = 56;
var ESFJ = 56;
var ESFP = 56;
var ESTJ = 56;
var ESTP = 56;
var INFJ = 56;
var INFP = 56;
var INTJ = 56;
var INTP = 56;
var ISFJ = 56;
var ISFP = 56;
var ISTJ = 56;
var ISTP = 56;
// Type scores are between 0 and 196

var test_status = 0;


function buttonclick(score) {
    var statement_1 = ["I am group-oriented and pursue unity",
                        "I am confident about others’ feelings and helping others",
                        "In my decisions, I am highly focused on the emotional atmosphere",
                        "I often actively help others and resolve conflicts",
                        "I often try to cater to the community",
                        "I prefer giving emotional support over practical solutions",
                        "I may twist the truth in order to preserve harmony",
                        "I prefer expressing my feelings in indirect ways such as art",
                        "I live according to my deeply-felt values",
                        "I often naturally stand out from others",
                        "I am empathetic in a one-to-one manner",
                        "I sometimes have a hard time with objective standards",
                        "I don’t have a real need to logically justify my decisions if they fit my values",
                        "I tend to have many interests which can be unrelated",
                        "I enjoy new ideas, challenges, and mental stimulation",
                        "I dislike structure as it limits possibilities",
                        "I tend to be forgetful when it comes to practical details",
                        "I sometimes remember random things out of nowhere",
                        "I tend to struggle living in the moment because of my future focus",
                        "I am all about the big picture and don’t really remember the details",
                        "I can sometimes be like a fortune teller with my predictions",
                        "I am drawn towards the unconscious world and gathering insights",
                        "I have a carpe diem attitude towards life",
                        "I tend to be an opportunistic person who acts instinctively",
                        "My humor is mostly about practical jokes based on present details",
                        "I am generally routinized and predictable",
                        "I generally stick with what I know and what has worked",
                        "I am result-oriented and focused on getting things done"];

    var statement_2 = ["I put a lot of value on being myself and being authentic",
                        "I am often bold when it comes to new, exotic ideas",
                        "I trust my sixth sense and intuitive hunches",
                        "I try to maximize the pleasure of the moment",
                        "I am highly focused on self-care and sensory maintenance",
                        "I find practical solutions wherever I go",
                        "I can be accidentally rude and miss social cues",
                        "I am generally talkative and referencing random things and connections",
                        "I seek and harbor hidden symbolic meanings",
                        "I readily adapt to the changing environment",
                        "I can focus on one thing for a long time and master it",
                        "I generally think emotions hinder the ability to make effective decisions",
                        "Everything needs to make logical sense to me",
                        "I have a laser focus vision about the future",
                        "I tend to seek new sensory experiences",
                        "I usually follow the rules in favor of physical safety and comfort",
                        "I try to use my time as efficiently as possible",
                        "I am generally confident about my own analysis",
                        "I generally dislike planning for the future",
                        "I focus on duties, details, and doing what is needed",
                        "My decisions have to be true to objective facts and data",
                        "I want to know how things and ideas work",
                        "I tend to have a hard time with change and branching out of my comfort zone",
                        "I am generally confident about my planning skills",
                        "I tend to learn things in order to tinker around with the knowledge",
                        "I define myself through my accomplishments and don’t overthink my identity",
                        "I make decisions according to my inner sense of truth",
                        "I tend to be focused more on the process than the result"];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block";
        document.getElementById("start").style.display = "none";
    }
    
    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").style.display = "none";
    document.getElementById("statement_1").innerHTML = statement_1[current_question];
    document.getElementById("statement_2").innerHTML = statement_2[current_question];

    
    if (current_question == 1) {
        Fe -= score;
        Fi += score;
    }
    else if (current_question == 2) {
        Fe -= score;
        Ne += score;
    }
    else if (current_question == 3) {
        Fe -= score;
        Ni += score;
    }
    else if (current_question == 4) {
        Fe -= score;
        Se += score;
    }
    else if (current_question == 5) {
        Fe -= score;
        Si += score;
    }
    else if (current_question == 6) {
        Fe -= score;
        Te += score;
    }
    else if (current_question == 7) {
        Fe -= score;
        Ti += score;
    }
    else if (current_question == 8) {
        Fi -= score;
        Ne += score;
    }
    else if (current_question == 9) {
        Fi -= score;
        Ni += score;
    }
    else if (current_question == 10) {
        Fi -= score;
        Se += score;
    }
    else if (current_question == 11) {
        Fi -= score;
        Si += score;
    }
    else if (current_question == 12) {
        Fi -= score;
        Te += score;
    }
    else if (current_question == 13) {
        Fi -= score;
        Ti += score;
    }
    else if (current_question == 14) {
        Ne -= score;
        Ni += score;
    }
    else if (current_question == 15) {
        Ne -= score;
        Se += score;
    }
    else if (current_question == 16) {
        Ne -= score;
        Si += score;
    }
    else if (current_question == 17) {
        Ne -= score;
        Te += score;
    }
    else if (current_question == 18) {
        Ne -= score;
        Ti += score;
    }
    else if (current_question == 19) {
        Ni -= score;
        Se += score;
    }
    else if (current_question == 20) {
        Ni -= score;
        Si += score;
    }
    else if (current_question == 21) {
        Ni -= score;
        Te += score;
    }
    else if (current_question == 22) {
        Ni -= score;
        Ti += score;
    }
    else if (current_question == 23) {
        Se -= score;
        Si += score;
    }
    else if (current_question == 24) {
        Se -= score;
        Te += score;
    }
    else if (current_question == 25) {
        Se -= score;
        Ti += score;
    }
    else if (current_question == 26) {
        Si -= score;
        Te += score;
    }
    else if (current_question == 27) {
        Si -= score;
        Ti += score;
    }
    else if (current_question == 28) {
        Te -= score;
        Ti += score;
    }

    if (current_question > (statement_1.length - 1)) {
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        ENFJ = (3 * Fe + Ni + Se - Ti - Si) + 56;
        ENFP = (3 * Ne + Fi + Te - Si - Ti) + 56;
        ENTJ = (3 * Te + Ni + Se - Fi - Si) + 56;
        ENTP = (3 * Ne + Ti + Fe - Si - Fi) + 56;
        ESFJ = (3 * Fe + Si + Ne - Ti - Ni) + 56;
        ESFP = (3 * Se + Fi + Te - Ni - Ti) + 56;
        ESTJ = (3 * Te + Si + Ne - Fi - Ni) + 56;
        ESTP = (3 * Se + Ti + Fe - Ni - Fi) + 56;
        INFJ = (3 * Ni + Fe + Ti - Se - Te) + 56;
        INFP = (3 * Fi + Ne + Si - Te - Se) + 56;
        INTJ = (3 * Ni + Te + Fi - Se - Fe) + 56;
        INTP = (3 * Ti + Ne + Si - Fe - Se) + 56;
        ISFJ = (3 * Si + Fe + Ti - Ne - Te) + 56;
        ISFP = (3 * Fi + Se + Ni - Te - Ne) + 56;
        ISTJ = (3 * Si + Te + Fi - Ne - Fe) + 56;
        ISTP = (3 * Ti + Se + Ni - Fe - Ne) + 56;
        get_result();
    }
}




function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("ENFJ").innerHTML = "ENFJ: " + Math.round(ENFJ / 196 * 10000) / 100;
    document.getElementById("ENFP").innerHTML = "ENFP: " + Math.round(ENFP / 196 * 10000) / 100;
    document.getElementById("ENTJ").innerHTML = "ENTJ: " + Math.round(ENTJ / 196 * 10000) / 100;
    document.getElementById("ENTP").innerHTML = "ENTP: " + Math.round(ENTP / 196 * 10000) / 100;
    document.getElementById("ESFJ").innerHTML = "ESFJ: " + Math.round(ESFJ / 196 * 10000) / 100;
    document.getElementById("ESFP").innerHTML = "ESFP: " + Math.round(ESFP / 196 * 10000) / 100;
    document.getElementById("ESTJ").innerHTML = "ESTJ: " + Math.round(ESTJ / 196 * 10000) / 100;
    document.getElementById("ESTP").innerHTML = "ESTP: " + Math.round(ESTP / 196 * 10000) / 100;
    document.getElementById("INFJ").innerHTML = "INFJ: " + Math.round(INFJ / 196 * 10000) / 100;
    document.getElementById("INFP").innerHTML = "INFP: " + Math.round(INFP / 196 * 10000) / 100;
    document.getElementById("INTJ").innerHTML = "INTJ: " + Math.round(INTJ / 196 * 10000) / 100;
    document.getElementById("INTP").innerHTML = "INTP: " + Math.round(INTP / 196 * 10000) / 100;
    document.getElementById("ISFJ").innerHTML = "ISFJ: " + Math.round(ISFJ / 196 * 10000) / 100;
    document.getElementById("ISFP").innerHTML = "ISFP: " + Math.round(ISFP / 196 * 10000) / 100;
    document.getElementById("ISTJ").innerHTML = "ISTJ: " + Math.round(ISTJ / 196 * 10000) / 100;
    document.getElementById("ISTP").innerHTML = "ISTP: " + Math.round(ISTP / 196 * 10000) / 100;
}




