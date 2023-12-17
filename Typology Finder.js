var current_question = -1;
var score = 0;

var int = 0;
var opn = 0;
var ind = 0;
var ord = 0;
var ent = 0;
var asr = 0;
var com = 0;
var pol = 0;
var wtd = 0;
var vol = 0;

var openness = 0;
var conscientiousness = 0;
var extraversion = 0;
var agreeableness = 0;
var neuroticism = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = [

        "Frequently consume educational content during free time.",
        "Set specific goals and work hard to achieve them.",
        "Pursue making new friends and keeping a wide social sphere.",
        "Give emotional support to others rather than giving rational solutions.",
        "Frequently imagine worst-case scenarios and threats.",
        "Be viewed as a creative, artistic, and unconventional person.",
        "Make schedules or routines for your day as it stabilizes your life.",
        "Make quick decisions with your action-oriented attitude.",
        "Steer clear of interpersonal conflict as much as possible.",
        "Often get angry or upset over seemingly minor inconveniences.",
        "Prefer mentally stimulating activities or jobs over simple ones.",
        "Be intentional with spending your time and don’t waste much of it.",
        "Often be considered as the enthusiastic one in the group.",
        "Often help or donate to others in order to take care of them.",
        "Feel easily discouraged by bad events or performance.",
        "Embrace alternative and eccentric lifestyles over traditional ones.",
        "Use your detail-oriented attitude to prevent mistakes and omissions.",
        "Prefer taking charge and leading over more passive roles.",
        "Focus on calming others down rather than shaking them up.",
        "Frequently be seen as having a temperamental attitude.",
        "Engage in solving puzzles such as Sudoku or Rubik’s Cube.",
        "Focus on getting things done and checking things off from a to-do list.",
        "Seek exciting and fun experiences to not feel bored.",
        "Vicariously feel pain if someone else is also experiencing pain.",
        "Often feel insecure and doubtful about your own abilities.",
        "Often daydream and view it as an essential part of life.",
        "Consider details and contingencies to make careful decisions.",
        "Be considered as having a strong personality.",
        "Prefer collaborating with others rather than competing with them.",
        "Often binge on food, social media, etc. to escape the moment.",
        "Often engage in philosophical or complex thought.",
        "Easily focus on finishing the task at hand.",
        "Usually prefer the company of others over alone time.",
        "Frequently inquire if others are feeling good or not.",
        "Be considered as a person with frequent negative feelings.",
        "Pursue understanding yourself and your feelings, values, and lifestyle.",
        "Often utilize planners or agendas to keep your life in order.",
        "Be eager to share your thoughts and opinions.",
        "Make a point to act and play as fair as possible.",
        "Frequently experience volatile mood shifts throughout the day.",
        "Be viewed as having an inquisitive and cerebral attitude.",
        "Prefer a productive lifestyle over a laid-back one.",
        "Frequently have a good laugh with others or yourself.",
        "Often be viewed as having a soft and tender heart.",
        "Often feel stopped by your fears and negative attitude.",
        "Prefer a new place, route, or method over a known one.",
        "Frequently be reminded of your highly orderly attitude.",
        "Often find yourself dominating the conversations.",
        "Rarely try to flaunt yourself and your abilities.",
        "Have somewhat extreme reactions to things in general.",
        "Feel satisfied by consuming complex, challenging material.",
        "Be seen as an ambitious and hardworking person.",
        "Often feel excited about social events such as parties.",
        "Often put others’ needs and well-being over your own.",
        "Easily get caught up in negative or pessimistic patterns.",
        "Frequently engage in creative outlets such as music and art.",
        "Work to keep your spaces as clean and orderly as possible.",
        "Often feel bored if you have to work behind-the-scenes.",
        "Be seen as a very humble and polite person.",
        "Be easily made to lose control of my own feelings."

        ];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];

    if (current_question % 10 == 1){
        int += score
    }

    else if (current_question % 10 == 2){
        ind += score
    }
   
    else if (current_question % 10 == 3){
        ent += score
    }
    
    else if (current_question % 10 == 4){
        com += score
    }
    
    else if (current_question % 10 == 5){
        wtd += score
    }
    
    else if (current_question % 10 == 6){
        opn += score
    }
    
    else if (current_question % 10 == 7){
        ord += score
    }
    
    else if (current_question % 10 == 8){
        asr += score
    }
    
    else if (current_question % 10 == 9){
        pol += score
    }
    
    else if (current_question % 10 == 0){
        vol += score
    }
    

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        int = Math.round((int / 18) * 100)
        opn = Math.round((opn / 18) * 100)
        ind = Math.round((ind / 18) * 100)
        ord = Math.round((ord / 18) * 100)
        ent = Math.round((ent / 18) * 100)
        asr = Math.round((asr / 18) * 100)
        com = Math.round((com / 18) * 100)
        pol = Math.round((pol / 18) * 100)
        wtd = Math.round((wtd / 18) * 100)
        vol = Math.round((vol / 18) * 100)

        openness = Math.round((int + opn) / 2)
        conscientiousness = Math.round((ind + ord) / 2)
        extraversion = Math.round((ent + asr) / 2)
        agreeableness = Math.round((com + pol) / 2)
        neuroticism = Math.round((wtd + vol) / 2)
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("OTE").innerHTML = "Openess to Experience: " + openness + "%";
    document.getElementById("int").innerHTML = "Intellect: " + int + "%";
    document.getElementById("opn").innerHTML = "Openness: " + opn + "%";
    document.getElementById("CON").innerHTML = "Conscientiousness: " + conscientiousness + "%";
    document.getElementById("ind").innerHTML = "Industriousness: " + ind + "%";
    document.getElementById("ord").innerHTML = "Orderliness: " + ord + "%";
    document.getElementById("EXT").innerHTML = "Extraversion: " + extraversion + "%";
    document.getElementById("ent").innerHTML = "Enthusiasm: " + ent + "%";
    document.getElementById("asr").innerHTML = "Assertiveness: " + asr + "%";
    document.getElementById("AGR").innerHTML = "Agreeableness: " + agreeableness + "%";
    document.getElementById("com").innerHTML = "Compassion: " + com + "%";
    document.getElementById("pol").innerHTML = "Politeness: " + pol + "%";
    document.getElementById("NEU").innerHTML = "Neuroticism: " + neuroticism + "%";
    document.getElementById("wtd").innerHTML = "Withdrawal: " + wtd + "%";
    document.getElementById("vol").innerHTML = "Volatility: " + vol + "%";
    
    document.getElementById("bar_OTEs").style.width = openness + "%";
    document.getElementById("bar_ints").style.width = int + "%";
    document.getElementById("bar_opns").style.width = opn + "%";
    document.getElementById("bar_CONs").style.width = conscientiousness + "%";
    document.getElementById("bar_inds").style.width = ind + "%";
    document.getElementById("bar_ords").style.width = ord + "%";
    document.getElementById("bar_EXTs").style.width = extraversion + "%";
    document.getElementById("bar_ents").style.width = ent + "%";
    document.getElementById("bar_asrs").style.width = asr + "%";
    document.getElementById("bar_AGRs").style.width = agreeableness + "%";
    document.getElementById("bar_coms").style.width = com + "%";
    document.getElementById("bar_pols").style.width = pol + "%";
    document.getElementById("bar_NEUs").style.width = neuroticism + "%";
    document.getElementById("bar_wtds").style.width = wtd + "%";
    document.getElementById("bar_vols").style.width = vol + "%";
}




