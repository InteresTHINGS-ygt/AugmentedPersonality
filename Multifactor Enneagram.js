var current_question = -1;
var score = 0;

var one = 16;
var two = 16;
var three = 16;
var four = 16;
var five = 16;
var six = 16;
var seven = 16;
var eight = 16;
var nine = 16;
// Type scores are between 0 and 32

var test_status = 0;

function buttonclick(score) {
    var statement_1 = ["I am group-oriented and pursue unity",
                        "I am confident about others’ feelings and helping others",
                        "In my decisions, I am highly focused on the emotional atmosphere",
                        "I often actively help others and resolve conflicts",
                        "I often try to cater to the community",
                        "I prefer giving emotional support over practical solutions",
                        "I may twist the truth in order to preserve harmony",
                        "I prefer expressing my feeling in indirect ways such as art",
                        "I live according to my deeply-felt values",
                        "I often naturally stand out from others",
                        "I am empathetic in a one-to-one manner",
                        "I sometimes have a hard time with objective standards",
                        "I don’t have a real need to logically justify my decisions if they fit my values",
                        "I tend to have many interests which can be unrelated",
                        "I enjoy new challenges involving mental stimulation",
                        "I dislike structure as it limits possibilities",
                        "I tend to be forgetful when it comes to practical details",
                        "I sometimes remember random things out of nowhere",
                        "I tend to struggle living in the moment because of my future focus",
                        "I am all about the big picture and don’t really remember the details",
                        "I can sometimes be like a fortune teller with my predictions",
                        "I am drawn towards the unconscious world and gathering insights",
                        "I have a carpe diem attitude towards life",
                        "I tend to be opportunistic, realistic, and present-oriented",
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
                        "I tend to seek physical stimulation as it keeps me present",
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
        one -= score;
        two += score;
    }
    else if (current_question == 2) {
        one -= score;
        three += score;
    }
    else if (current_question == 3) {
        one -= score;
        four += score;
    }
    else if (current_question == 4) {
        one -= score;
        five += score;
    }
    else if (current_question == 5) {
        one -= score;
        six += score;
    }
    else if (current_question == 6) {
        one -= score;
        seven += score;
    }
    else if (current_question == 7) {
        one -= score;
        eight += score;
    }
    else if (current_question == 8) {
        one -= score;
        nine += score;
    }
    else if (current_question == 9) {
        two -= score;
        three += score;
    }
    else if (current_question == 10) {
        two -= score;
        four += score;
    }
    else if (current_question == 11) {
        two -= score;
        five += score;
    }
    else if (current_question == 12) {
        two -= score;
        six += score;
    }
    else if (current_question == 13) {
        two -= score;
        seven += score;
    }
    else if (current_question == 14) {
        two -= score;
        eight += score;
    }
    else if (current_question == 15) {
        two -= score;
        nine += score;
    }
    else if (current_question == 16) {
        three -= score;
        four += score;
    }
    else if (current_question == 17) {
        three -= score;
        five += score;
    }
    else if (current_question == 18) {
        three -= score;
        six += score;
    }
    else if (current_question == 19) {
        three -= score;
        seven += score;
    }
    else if (current_question == 20) {
        three -= score;
        eight += score;
    }
    else if (current_question == 21) {
        three -= score;
        nine += score;
    }
    else if (current_question == 22) {
        four -= score;
        five += score;
    }
    else if (current_question == 23) {
        four -= score;
        six += score;
    }
    else if (current_question == 24) {
        four -= score;
        seven += score;
    }
    else if (current_question == 25) {
        four -= score;
        eight += score;
    }
    else if (current_question == 26) {
        four -= score;
        nine += score;
    }
    else if (current_question == 27) {
        five -= score;
        six += score;
    }
    else if (current_question == 28) {
        five -= score;
        seven += score;
    }
    else if (current_question == 29) {
        five -= score;
        eight += score;
    }
    else if (current_question == 30) {
        five -= score;
        nine += score;
    }
    else if (current_question == 31) {
        six -= score;
        seven += score;
    }
    else if (current_question == 32) {
        six -= score;
        eight += score;
    }
    else if (current_question == 33) {
        six -= score;
        nine += score;
    }
    else if (current_question == 34) {
        seven -= score;
        eight += score;
    }
    else if (current_question == 35) {
        seven -= score;
        nine += score;
    }
    else if (current_question == 36) {
        eight -= score;
        nine += score;
    }
    

    if (current_question > (statement_1.length - 1)) {
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        
        get_result();
    }
}




function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("ENFJ").innerHTML = "ENFJ: " + Math.round(one / 196 * 10000) / 100;
    document.getElementById("ENFP").innerHTML = "ENFP: " + Math.round(two / 196 * 10000) / 100;
    document.getElementById("ENTJ").innerHTML = "ENTJ: " + Math.round(three / 196 * 10000) / 100;
    document.getElementById("ENTP").innerHTML = "ENTP: " + Math.round(four / 196 * 10000) / 100;
    document.getElementById("ESFJ").innerHTML = "ESFJ: " + Math.round(five / 196 * 10000) / 100;
    document.getElementById("ESFP").innerHTML = "ESFP: " + Math.round(six / 196 * 10000) / 100;
    document.getElementById("ESTJ").innerHTML = "ESTJ: " + Math.round(seven / 196 * 10000) / 100;
    document.getElementById("ESTP").innerHTML = "ESTP: " + Math.round(eight / 196 * 10000) / 100;
    document.getElementById("INFJ").innerHTML = "INFJ: " + Math.round(nine / 196 * 10000) / 100;
}




