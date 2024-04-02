var current_question = -1;
var score = 0;

var Se = 21;
var Si = 21;
var Ne = 21;
var Ni = 21;
var Te = 21;
var Ti = 21;
var Fe = 21;
var Fi = 21;

var Se_a = 9;
var Si_a = 9;
var Ne_a = 9;
var Ni_a = 9;
var Te_a = 9;
var Ti_a = 9;
var Fe_a = 9;
var Fi_a = 9;

var Se_total = 60;
var Si_total = 60;
var Ne_total = 60;
var Ni_total = 60;
var Te_total = 60;
var Ti_total = 60;
var Fe_total = 60;
var Fi_total = 60;
// Dominant score is up to 42
// Auxiliary score is up to 18
// Total score is up to 60

var ENFJ = 30;
var ENFP = 30;
var ENTJ = 30;
var ENTP = 30;
var ESFJ = 30;
var ESFP = 30;
var ESTJ = 30;
var ESTP = 30;
var INFJ = 30;
var INFP = 30;
var INTJ = 30;
var INTP = 30;
var ISFJ = 30;
var ISFP = 30;
var ISTJ = 30;
var ISTP = 30;
// Type score is up to 60

var test_status = 0;


function buttonclick(score) {
    var statement_1 = ["I am group-oriented and desire to unite people",
    "I actively help others and resolve conflicts",
    "I am acutely aware of the general emotional atmosphere",
    "I cater my speech to the community that I am part of",
    "I tend to take offense when my ideas are criticized",
    "I prefer giving emotional support to others rather than practical solutions",
    "I may twist the truth in order to preserve harmony",
    "I express my feelings in indirect ways such as art or writing",
    "I am highly empathetic in a one-to-one manner","I live according to my deeply-felt values",
    "I tend to have a hard time with objective standards",
    "I don’t need to logically justify my decisions if it fits my identity and values",
    "I often feel ineffective and harshly criticize myself because of it",
    "I am often considered as a great brainstromer",
    "I am the first to explore new ideas and possibilities",
    "I dislike structure as it tends to limit possibilities",
    "I tend to fixate on my body or insignificant details when feeling extremely stressed",
    "I tend to be forgetful with practical details and self-care",
    "I struggle living in the moment because of my future focus",
    "I am all about the big picture and don’t really remember details",
    "I tend to overindulge in short-term pleasures when feeling extremely stressed",
    "I trust my own intuition in important decisions",
    "I maximize the pleasure of the moment",
    "I am prone to acting without considering future consequences",
    "I have an out of sight, out of mind approach to life",
    "I generally stick with what I know and what has worked before",
    "I can focus on one thing for a long time and master it",
    "I am confident about my planning and organization skills",
    "I am keen on humbly and quietly supporting my community",
    "I enjoy finding out logical patterns while keeping an eye on others’ feelings",
    "I contribute to others through my personal experience or insights",
    "I tend to be assertive and productive in bursts of passion",
    "I try out everything in order to find what aligns with my identity",
    "I am often stubborn and resolute when it comes to my values and integrity",
    "I see many ways to solve a specific problem or express my identity",
    "I become more talkative when there is something that really interests me",
    "I can be reminiscent or nostalgic in order to escape from reality",
    "I actively work towards realizing my future visions",
    "I often direct other people into my idea of the future",
    "I am generally realistic with subtle streaks of idealism"];

    var statement_2 = ["I put a lot of focus on being myself and being authentic",
    "I often go off-topic and connect unrelated concepts together",
    "I seek and harbor hidden symbolic meanings of things",
    "I readily adapt to the ever changing environment",
    "I am prone to seeing negative possibilities everywhere when I feel very stressed",
    "I find practical solutions wherever I go",
    "I can be accidentally rude and miss social cues",
    "I have many interests which are often unrelated to each other",
    "I can be somewhat of a fortune teller with my future predictions",
    "I act instinctively to take advantage of opportunities",
    "I tend to have a hard time with change and branching out of the familiar",
    "I think emotions hinder the ability to make effective decisions",
    "I am often disconnected from the emotional world and prone to apathy",
    "I am laser focused on how the future will unfold",
    "I am the first to seek new sensory experiences",
    "I follow the rules in order to ensure physical safety and comfort",
    "I define myself through my accomplishments and don’t overthink about my identity",
    "I am more about how things work rather than applying it practically",
    "I dislike planning for the future as I prefer spontaneity",
    "I focus on practical details and building routines",
    "I am result-oriented and focus on getting things done",
    "I make decisions based on my own idea of truth",
    "I focus on self-care and sensory maintenance",
    "I use my time as efficiently as possible",
    "I gather knowledge in order to tinker around with it",
    "I need to align my decisions with the objective facts and rules",
    "I build an internal map of how things connect to each other",
    "I am confident about my own logical analysis",
    "I am keen on standing out and expressing myself in wild ways",
    "I have a strong sense of identity which I don’t overthink - That’s just the way I am",
    "I onten enjoy debating or persuading others through charisma",
    "I have a sense of quiet confidence and a steady drive",
    "I readily explore or experiment to find what makes logical sense to me",
    "I am often bold with my logic, mentally or physically",
    "I am generally future-oriented but I have moments of thinking on my feet",
    "I determine the sensory experiences which they would suit me",
    "I mostly stick to the tried-and-true but I have a secret experimental side",
    "I am easygoing and take in the moment as it is",
    "I am keen on organizing and being a part of something bigger",
    "I actively stabilize my environment through what is readily available"
    ];

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
    else if (current_question == 29) {
        Fe_a -= score;
        Fi_a += score;
    }
    else if (current_question == 60) {
        Fe_a -= score;
        Te_a += score;
    }
    else if (current_question == 31) {
        Fe_a -= score;
        Ti_a += score;
    }
    else if (current_question == 32) {
        Fi_a -= score;
        Te_a += score;
    }
    else if (current_question == 33) {
        Fi_a -= score;
        Ti_a += score;
    }
    else if (current_question == 34) {
        Te_a -= score;
        Ti_a += score;
    }
    else if (current_question == 35) {
        Ne_a -= score;
        Ni_a += score;
    }
    else if (current_question == 36) {
        Ne_a -= score;
        Se_a += score;
    }
    else if (current_question == 37) {
        Ne_a -= score;
        Si_a += score;
    }
    else if (current_question == 38) {
        Ni_a -= score;
        Se_a += score;
    }
    else if (current_question == 39) {
        Ni_a -= score;
        Si_a += score;
    }
    else if (current_question == 40) {
        Se_a -= score;
        Si_a += score;
    }
    
    

    if (current_question > (statement_1.length - 1)) {
        document.getElementById("question_number").style.display = "none";
        document.getElementById("statement_1").innerHTML = "";
        ENFJ = Fe + Ni_a;
        ENFP = Ne + Fi_a;
        ENTJ = Te + Ni_a;
        ENTP = Ne + Ti_a;
        ESFJ = Fe + Si_a;
        ESFP = Se + Fi_a;
        ESTJ = Te + Si_a;
        ESTP = Se + Ti_a;
        INFJ = Ni + Fe_a;
        INFP = Fi + Ne_a;
        INTJ = Ni + Te_a;
        INTP = Ti + Ne_a;
        ISFJ = Si + Fe_a;
        ISFP = Fi + Se_a;
        ISTJ = Si + Te_a;
        ISTP = Ti + Se_a;

        Fe_total = Fe + Fe_a;
        Fi_total = Fi + Fi_a;
        Ne_total = Ne + Ne_a;
        Ni_total = Ni + Ni_a;
        Se_total = Se + Se_a;
        Si_total = Si + Si_a;
        Te_total = Te + Te_a;
        Ti_total = Ti + Ti_a;

        get_result();
    }
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("statement_1").style.display = "none";
    document.getElementById("statement_2").style.display = "none";
    document.getElementById("func").style.display = "";
    document.getElementById("ENFJ").innerHTML = "ENFJ: " + Math.round(ENFJ / 60 * 10000) / 100;
    document.getElementById("ENFP").innerHTML = "ENFP: " + Math.round(ENFP / 60 * 10000) / 100;
    document.getElementById("ENTJ").innerHTML = "ENTJ: " + Math.round(ENTJ / 60 * 10000) / 100;
    document.getElementById("ENTP").innerHTML = "ENTP: " + Math.round(ENTP / 60 * 10000) / 100;
    document.getElementById("ESFJ").innerHTML = "ESFJ: " + Math.round(ESFJ / 60 * 10000) / 100;
    document.getElementById("ESFP").innerHTML = "ESFP: " + Math.round(ESFP / 60 * 10000) / 100;
    document.getElementById("ESTJ").innerHTML = "ESTJ: " + Math.round(ESTJ / 60 * 10000) / 100;
    document.getElementById("ESTP").innerHTML = "ESTP: " + Math.round(ESTP / 60 * 10000) / 100;
    document.getElementById("INFJ").innerHTML = "INFJ: " + Math.round(INFJ / 60 * 10000) / 100;
    document.getElementById("INFP").innerHTML = "INFP: " + Math.round(INFP / 60 * 10000) / 100;
    document.getElementById("INTJ").innerHTML = "INTJ: " + Math.round(INTJ / 60 * 10000) / 100;
    document.getElementById("INTP").innerHTML = "INTP: " + Math.round(INTP / 60 * 10000) / 100;
    document.getElementById("ISFJ").innerHTML = "ISFJ: " + Math.round(ISFJ / 60 * 10000) / 100;
    document.getElementById("ISFP").innerHTML = "ISFP: " + Math.round(ISFP / 60 * 10000) / 100;
    document.getElementById("ISTJ").innerHTML = "ISTJ: " + Math.round(ISTJ / 60 * 10000) / 100;
    document.getElementById("ISTP").innerHTML = "ISTP: " + Math.round(ISTP / 60 * 10000) / 100;

    document.getElementById("Se").innerHTML = "Extraverted Sensation: " + Math.round(Se_total / 60 * 10000) / 100;
    document.getElementById("Si").innerHTML = "Introverted Sensation: " + Math.round(Si_total / 60 * 10000) / 100;
    document.getElementById("Ne").innerHTML = "Extraverted Intuition: " + Math.round(Ne_total / 60 * 10000) / 100;
    document.getElementById("Ni").innerHTML = "Introverted Intuition: " + Math.round(Ni_total / 60 * 10000) / 100;
    document.getElementById("Te").innerHTML = "Extraverted Thinking: " + Math.round(Te_total / 60 * 10000) / 100;
    document.getElementById("Ti").innerHTML = "Introverted Thinking: " + Math.round(Ti_total / 60 * 10000) / 100;
    document.getElementById("Fe").innerHTML = "Extraverted Feeling: " + Math.round(Fe_total / 60 * 10000) / 100;
    document.getElementById("Fi").innerHTML = "Introverted Feeling: " + Math.round(Fi_total / 60 * 10000) / 100;

    document.getElementById("bar_Se").style.width = Math.round(Se_total / 60 * 10000) / 100 + "%";
    document.getElementById("bar_Si").style.width = Math.round(Si_total / 60 * 10000) / 100 + "%";
    document.getElementById("bar_Ne").style.width = Math.round(Ne_total / 60 * 10000) / 100 + "%";
    document.getElementById("bar_Ni").style.width = Math.round(Ni_total / 60 * 10000) / 100 + "%";
    document.getElementById("bar_Te").style.width = Math.round(Te_total / 60 * 10000) / 100 + "%";
    document.getElementById("bar_Ti").style.width = Math.round(Ti_total / 60 * 10000) / 100 + "%";
    document.getElementById("bar_Fe").style.width = Math.round(Fe_total / 60 * 10000) / 100 + "%";
    document.getElementById("bar_Fi").style.width = Math.round(Fi_total / 60 * 10000) / 100 + "%";
}




