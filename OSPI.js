var current_question = -1;
var score = 0;

var ios = 0;
var macos = 0;
var windows = 0;
var android = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = ["I often give good impressions to others.",
    "I am emotionally stable and handle stress well.",
    "I often find myself taking charge of organizations.",
    "I vastly prefer function over good looks.",
    "I often worry about how others perceive me.",
    "I have a hard time accepting my own problems.",
    "I am a highly strategic problem solver.",
    "I enjoy variety and novelty in my life.",
    "I am idealistic and believe that everything can be improved.",
    "I often work on my skills to get better at them.",
    "I can easily become overly controlling and bossy.",
    "I am unstable and prone to mood swings.",
    "I am generally enthusiastic and optimistic.",
    "I am generally relaxed and creative.",
    "I really enjoy high quality video games.",
    "I hate being limited and prefer to do whatever I want.",
    "I have a generally sleek and minimalistic style.",
    "I can be overly relaxed and slow to start.",
    "I am efficient and this makes me well-respected.",
    "I have a hard time adapting to my social environment.",
    "I often procrastinate because of my perfectionism.",
    "I am generally more casual than formal.",
    "I have a lot of trouble relaxing and slowing down.",
    "I am able to freely share my interests and feelings with others."];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    }

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question % 4 == 1){
        ios = ios + score
    }
    else if (current_question % 4 == 2){
        macos = macos + score
    }
    else if (current_question % 4 == 3){
        windows = windows + score
    }
    else if (current_question % 4 == 0){
        android = android + score
    }

    if (current_question > 19){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        ios = Math.round((ios / 24) * 100)
        macos = Math.round((macos / 24) * 100)
        windows = Math.round((windows / 24) * 100)
        android = Math.round((android / 24) * 100)
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("result_ios").innerHTML = "Your similarity to iOS/iPadOS is " + ios + "%"
    document.getElementById("result_macos").innerHTML = "Your similarity to macOS is " + macos + "%"
    document.getElementById("result_windows").innerHTML = "Your similarity to Windows is " + windows + "%"
    document.getElementById("result_android").innerHTML = "Your similarity to Android is " + android + "%"
}




