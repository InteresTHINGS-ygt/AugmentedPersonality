var current_question = -1;
var score = 0;

var chol = 0;
var mel = 0;
var san = 0;
var phleg = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = [

                    

            "I am ambitious and goal-oriented.",
            "I feel the need to do things the right way.",
            "I sometimes feel overly confident.",
            "I accept and tolerate everyone as they are.",
            "I am a person full of determination and confidence.",
            "I am precise and perfectionistic.",
            "I vastly prefer variety over routine.",
            "I feel content with myself.",
            "I have trouble slowing down and relaxing.",
            "I am serious and don't laugh easily.",
            "I feel bored easily when things are unchanging.",
            "I tend to be quiet and calm.",
            "I am competitive and need to be the best.",
            "I feel things very deeply even if I don't show it.",
            "I can be messy and forgetful.",
            "I avoid conflict as much as possible.",
            "I can be a sore loser.",
            "I pay attention to details.",
            "I am great at starting but bad at finishing.",
            "I try to keep life as stable as possible.",
            "I am often perceived as aggressive.",
            "I am an introspective person.",
            "I make friends easily.",
            "I have an easy time hiding emotions.",
            "I take charge and organize my environment.",
            "I have an analytical mind.",
            "I am often the life of the party.",
            "I am quiet but friendly.",
            "I am known as tough-minded.",
            "I am often considered as creative.",
            "I often prevent dull moments.",
            "I am patient and handle stress well.",
            "I tend to have explosive moods.",
            "I have very high standards for myself.",
            "I am easy to laugh.",
            "I tend to take the slow and steady approach when I'm doing things.",
            "I am a touchy-feely person.",
            "I often feel deep compassion and empathy.",
            "I enjoy new experiences and things.",
            "I easliy blend in the background.",
            "I tend to be quick to judge.",
            "I can be self-critical.",
            "I have a need for an interesting life.",
            "I don't have high expectations for my experiences.",
            "I am a natural leader.",
            "I often feel sad and blue.",
            "I am made out of positivity.",
            "I am a natural peacemaker.",
            "I get angry easily.",
            "I am familiar with feelings of worry.",
            "I am spontaneous and want to enjoy life.",
            "I don't have strong opinions.",
            "I can be considered impatient.",
            "I tend to doubt myself.",
            "I am a playful person with a good sense of humor.",
            "I can be stubborn and unchanging.",
            "I have lots of highs and lows when it comes to my feelings.",
            "I am somewhat reserved.",
            "I enjoy entertaining others.",
            "I easily relax and unwind.",
            "I go straight for the result.",
            "I am often considered as gifted.",
            "I prefer spending time with others rather than alone.",
            "I tend to have trouble taking action."


                    
        ];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question % 4 == 1){
        chol = chol + score
    }
    else if (current_question % 4 == 2){
        mel = mel + score
    }
    else if (current_question % 4 == 3){
        san = san + score
    }
    else if (current_question % 4 == 0){
        phleg = phleg + score
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        chol = Math.round((chol / 48) * 100)
        mel = Math.round((mel / 48) * 100)
        san = Math.round((san / 48) * 100)
        phleg = Math.round((phleg / 48) * 100)
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
    
    document.getElementById("bar_chol").style.width = m + "%"
    document.getElementById("bar_mel").style.width = e + "%"
    document.getElementById("bar_san").style.width = t + "%"
    document.getElementById("bar_phleg").style.width = a + "%"
}




