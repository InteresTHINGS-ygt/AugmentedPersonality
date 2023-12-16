var current_question = -1;
var score = 0;

var IP = 0;
var IJ = 0;
var EP = 0;
var EJ = 0;

var EP_IJ = 0;
var EJ_IP = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = ["I prioritize my personal criteria in my decisions.",
                    "My worldview is based on my independent judgments.",
                    "I am able to do what I want without being pressured by others.",
                    "I prioritize personal uniqueness in my lifestyle.",
                    "I have a hard time adapting to the objective criteria.",
                    "I may be perceived as self-centered.",
                    
                    "I organize information to form internal impressions and keep things predictable.",
                    "I plan things out well in advance in order to avoid too much risk.",
                    "One of my strengths is my ability to plan ahead and organize.",
                    "I am great at preventing bad consequences by preparation.",
                    "I have a hard time with unexpected changes.",
                    "I can often be rigid and stubborn.",
                    
                    "I am considered as spontaneous and somewhat impulsive.",
                    "I often seek new experiences or possibilities.",
                    "I easily adapt to new and novel information.",
                    "One of my strengths is my flexibility and adaptability.",
                    "I have a hard time focusing on one thing for a long time as I feel bored.",
                    "I can come across as scattered and unprepared.",
                    
                    "I adjust myself to external expectations to contribute to others.",
                    "I make decisions primarily based on external and objective factors.",
                    "I am considered a natural teamplayer.",
                    "I excel at adapting to my chosen group.",
                    "I have a hard time actually knowing myself.",
                    "I tend to devalue individuality either in myself or others."];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    }

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question < 7){
        IP = IP + score
    }
    else if (current_question < 13){
        IJ = IJ + score
    }
    else if (current_question < 19){
        EP = EP + score
    }
    else if (current_question < 25){
        EJ = EJ + score
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        IP  = Math.round((IP/18) * 100);
        IJ  = Math.round((IJ/18) * 100);
        EP  = Math.round((EP/18) * 100);
        EJ  = Math.round((EJ/18) * 100);
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("IP").innerHTML = "Individualist - IxxP: " + IP;
    document.getElementById("IJ").innerHTML = "Builder - IxxJ: " + IJ;
    document.getElementById("EP").innerHTML = "Explorer - ExxP: " + EP;
    document.getElementById("EJ").innerHTML = "Teamplayer - ExxJ: " + EJ;

    document.getElementById("bar_IP").style.width = IP + "%"
    document.getElementById("bar_IJ").style.width = IJ + "%"
    document.getElementById("bar_EP").style.width = EP + "%"
    document.getElementById("bar_EJ").style.width = EJ + "%"
}




