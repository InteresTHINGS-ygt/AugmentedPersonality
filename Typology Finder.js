var current_question = -1;
var score = 0;

var chol = 0;
var mel = 0;
var san = 0;
var phleg = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = [

        "I feel at home with abstract concepts.",
        "I often get lost in thought.",
        "I feel alive with mental stimulation.",
        "I have an hunger for knowledge.",
        "I am considered an idea generator.",
        "I am more physical than mental.",
        "I prefer simple tasks over complex ones.",
        "I am not very keen on learning.",
        "I don't learn for the sake of it.",
        "I wouldn't be an academic researcher.",
        "I am often engaged with aesthetics.",
        "I feel the best when I try new things.",
        "I enjoy wild flights of fantasy.",
        "I highly appreciate variety and diversity.",
        "I need to engage in creative outlets.",
        "I am not a very artistic person.",
        "I prefer reality over fantasy.",
        "I prefer staying in my comfort zone.",
        "I tend to have a conservative approach to life.",
        "I am generally practical and down-to-earth.",
        "I am ambitious and goal-oriented.",
        "I easily concentrate in my work.",
        "I can be some sort of a workaholic.",
        "I am about getting things done efficiently.",
        "I manage my time and work hard.",
        "I tend to get distracted easily.",
        "I am more about play than work.",
        "I tend to waste time with useless things.",
        "I often procrastinate and postpone.",
        "I am often seen as lazy.",
        "I make plans and organize things.",
        "I am precise and perfectionistic.",
        "I tend to schedule and routinize my days.",
        "I often feel the need to clean up.",
        "I make my decisions carefully.",
        "I often forget why I went there in the first place.",
        "I am not bothered by messy places.",
        "I think routines are too limiting.",
        "I don't have set places for everything.",
        "I act spontaneously rather than planfully.",
        "I am often the life of the party.",
        "I regularly make new friends.",
        "I enjoy time with others more than alone time.",
        "I don't like missing out on social events.",
        "I am cheerful and laugh a lot.",
        "I don't get excited and amused easily.",
        "I often distance myself from other people.",
        "I tend to come across as reserved.",
        "I am private and have strong boundaries.",
        "I am a serious person who doesn't laugh easily.",
        "I take charge and lead my environment.",
        "I am often the first person to act.",
        "I would make for an effective leader.",
        "I try to persuade people.",
        "I often find myself initiating conversations.",
        "I rarely dominate the conversations.",
        "I prefer taking more passive roles.",
        "I take a long time to make decisions.",
        "I am not keen on speaking my mind.",
        "I prefer working behindthescenes.",
        "I often inquire about others' well being.",
        "I enjoy helping and doing for others.",
        "I often take care of others' feelings.",
        "I have a soft heart for the underdog.",
        "I think mercy is important.",
        "I am more tough-minded than tender-hearted.",
        "I tend to stay cold and rational in my decisions.",
        "I can be unsympathetic to others.",
        "I can't stand weak and needy people.",
        "I am not very interested in being charitable.",
        "I try to act as fairly as possible.",
        "I don't like flaunting my abilities.",
        "I steer clear of conflict.",
        "I am respectful of my social community.",
        "I communicate tactfully with others.",
        "I often think I am a superior person.",
        "I often lie and cheat to get ahead.",
        "I feel stimulated by a good fight.",
        "I tend to be direct and unfiltered.",
        "I don't really care about social niceties.",
        "I am familiar with feelings of doubt and worry.",
        "I get caught up in my past failures.",
        "I often feel overwhelmed by the demands of life.",
        "I am considered a sensitive and vulnerable person.",
        "I often feel insecure and threatened.",
        "I rarely feel on edge.",
        "I don't worry much about worst case scenarios.",
        "I feel comfortable in my own skin.",
        "I am generally secure and confident.",
        "I often think too little about my problems.",
        "I am generally an impatient person.",
        "I can be sort of an emotional rollarcoaster.",
        "I often find myself overindulging in things.",
        "I feel angry when things don't go my way.",
        "I don't have much emotional control.",
        "I am generally chill and calm.",
        "I am not a person who gets annoyed easily.",
        "I easily control my reactions to things.", 
        "I tend to calm down easily.",
        "I don't have many pet peeves."

        ];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question < 5){
        chol = chol + score
    }
    else if (current_question < 10){
        mel = mel + score
    }
    else if (current_question < 15){
        san = san + score
    }
    else if (current_question < 20){
        phleg = phleg + score
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        chol = Math.round((chol / 64) * 100)
        mel = Math.round((mel / 64) * 100)
        san = Math.round((san / 64) * 100)
        phleg = Math.round((phleg / 64) * 100)
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("result_chol").innerHTML = "Choleric: " + chol + "%"
    document.getElementById("result_mel").innerHTML = "Melancholic: " + mel + "%"
    document.getElementById("result_san").innerHTML = "Sanguine: " + san + "%"
    document.getElementById("result_phleg").innerHTML = "Phlegmatic: " + phleg + "%"
    
}



