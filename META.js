var current_question = -1;
var score = 0;

var m = 0;
var e = 0;
var t = 0;
var a = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = ["I highly value teamwork and delegate people to get things done.",
    "I focus on the present and live in the moment.",
    "I am keen on fighting and enjoy combat activities.",
    "I am generally considered as gifted by others.",
    "I actively give to others in order to maintain relationships.",
    "I am generally a practical and hands-on person.",
    "I am highly territorial and protective of my comfort.",
    "I am pretty serious and don't laugh often.",
    "I am generally a highly confident and decisive person.",
    "I am generally emotionally stable and cheerful.",
    "I would do anything to stand out as much as I can.",
    "I can handle stress well thanks to my patience.",
    "I can be unwilling to engage in deep thought.",
    "I vastly prefer being with others than alone time.",
    "I tend to show my authentic, real self to everyone.",
    "I can easily focus on one thing for a long time.",
    "I heavily favor my instincts in my decisions.",
    "I am spontaneous and playful but also reckless.",
    "I can be uncooperative and too willing to fight.",
    "I support others by deeply understanding them.",
    "I can be impatient and get angry easily.",
    "I am generally humble and dislike standing out too much.",
    "I tend to enjoy a great adventure and thrill.",
    "I don't like memorization and I prefer fully understanding concepts."];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question % 4 == 1){
        m = m + score
    }
    else if (current_question % 4 == 2){
        e = e + score
    }
    else if (current_question % 4 == 3){
        t = t + score
    }
    else if (current_question % 4 == 0){
        a = a + score
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        m = Math.round((m / 18) * 100)
        e = Math.round((e / 18) * 100)
        t = Math.round((t / 18) * 100)
        a = Math.round((a / 18) * 100)
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("result_m").innerHTML = "Your M factor is " + m + "%"
    document.getElementById("result_e").innerHTML = "Your E factor is " + e + "%"
    document.getElementById("result_t").innerHTML = "Your T factor is " + t + "%"
    document.getElementById("result_a").innerHTML = "Your A factor is " + a + "%"
    
    document.getElementById("bar_m").style.width = m + "%"
    document.getElementById("bar_e").style.width = e + "%"
    document.getElementById("bar_t").style.width = t + "%"
    document.getElementById("bar_a").style.width = a + "%"
}




