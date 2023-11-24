var current_question = -1;
var score = 0;

var suitability = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = ["I am passionate about working with the human body.",
    "I have great communication and social skills.",
    "I really enjoy supporting others in any way.",
    "I enjoy synthesizing complex information to arrive at an answer.",
    "I am adaptable and deal with stress well.",
    "I am willing to work hard and smart to become better.",
    "I am considered as an excellent teamplayer.",
    "I am excellent at dealing with fine details.",
    "I only choose a medical career because it will make me rich.",
    "I don't really like working with people.",
    "I have a hard time focusing and working for long hours.",
    "I often feel overwhelmed by change and chaos.",
    "I often lie and cheat to get ahead."];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    }

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];

    if (current_question > 8){
        suitability = suitability + (4 - score)
    }
    else {
        suitability = suitability + score
    }
    
    if (current_question > 12){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        suitability = Math.round((suitability / 52) * 100)
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("result").innerHTML = "Your medical career suitability is " + suitability + "%"

    if (suitability >= 80) {
        document.getElementById("description").innerHTML = "You would have a great time pursuing a medical lifestyle!"
    }
    else if (suitability >=50) {
        document.getElementById("description").innerHTML = "Although you may have a good time having a medical lifestyle, make sure to check out other options before deciding."
    }
    else {
        document.getElementById("description").innerHTML = "You are better off pursuing something else. Medical lifestyle may not be for you."
    }
}




