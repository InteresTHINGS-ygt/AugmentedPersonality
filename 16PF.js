var current_question = -1;
var score = 0;

var vam = 0;
var alc = 0;
var tim = 0;
var cyc = 0;
var lum = 0;
var mas = 0;
var rob = 0;
var sha = 0;
var col = 0;
var hun = 0;
var fan = 0;
var hyp = 0;
var Q1 = 0;
var Q2 = 0;
var Q3 = 0;
var Q4 = 0;


var test_status = 0;

function buttonclick(score) {
    var questions_1 = ["I prefer alone time",
    "I stick with close friends",
    "My moods change easily",
    "I tend to overreact to things",
    "I keep a peaceful atomsphere",
    "I prefer having others take charge",
    "I tend to take things seriously",
    "I keep a formal appearance",
    "Some rules need to be broken",
    "I tend to do whatever I want",
    "It's difficult for me to approach others",
    "I feel shy in social situations",
    "I am generally detached from feelings",
    "I prefer impersonal appraoches",
    "I readily trust other people",
    "I always believe that things will go well",
    "I have my feet on the ground",
    "I find practical solutions using common sense",
    "I readily share personal information with others",
    "I say whatever I think or feel",
    "I am confident about my abilities",
    "I am not a worrier",
    "I stick to what is best for me",
    "I prefer familiar routines",
    "I am a teams and groups person",
    "I prefer fitting in",
    "I tend to tolerate disorder",
    "I am fine with approximations",
    "I am fine waiting for a long time",
    "I tend to take it easy"];

    var questions_2 = ["I prefer being with others",
    "I am keen on meeting new people",
    "My moods tend to stay level",
    "I control my emotional reactions",
    "I fight for what I want",
    "I am the person to take charge",
    "I approach life in a playful manner",
    "I am generally enthusiastic",
    "I generally follow the rules",
    "I tend to do what is right",
    "I am the first to interact with new people",
    "I am a socially confident person",
    "I feel things deeply",
    "I am sensitive to others' feelings",
    "I am wary of people I don't know",
    "I sense danger before anyone else",
    "I have my head in the clouds",
    "I find creative solutions using imagination",
    "I keep my personal information private",
    "I keep my thoughts and feelings to myself",
    "I frequently doubt my abilities",
    "I frequently fear for the worst",
    "I branch out into new experiences",
    "I prefer variety over routine",
    "I prefer doing things independently",
    "I prefer standing out",
    "Everything has its place",
    "I need precision in my life",
    "I am essentially time driven",
    "I am prone to frustration when things go wrong"];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = "";
    document.getElementById("questions_1").innerHTML = questions_1[current_question];
    document.getElementById("questions_2").innerHTML = questions_2[current_question];
    if (current_question < 3){
        vam += score;
    }
    else if (current_question < 5){
        tim += score;
    }
    else if (current_question < 7){
        cyc += score;
    }
    else if (current_question < 9){
        lum += score;
    }
    else if (current_question < 11){
        mas += score;
    }
    else if (current_question < 13){
        rob += score;
    }
    else if (current_question < 15){
        sha += score;
    }
    else if (current_question < 17){
        col += score;
    }
    else if (current_question < 19){
        hun += score;
    }
    else if (current_question < 21){
        fan += score;
    }
    else if (current_question < 23){
        hyp += score;
    }
    else if (current_question < 25){
        Q1 += score;
    }
    else if (current_question < 27){
        Q2 += score;
    }
    else if (current_question < 29){
        Q3 += score;
    }
    else if (current_question < 31){
        Q4 += score;
    }

    if (current_question > (questions_1.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("questions_1").style.display = "none";
        document.getElementById("questions_2").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        vam = Math.round((vam / 9) * 100)
        alc = Math.round((alc / 9) * 100)
        tim = Math.round((tim / 9) * 100)
        cyc = Math.round((cyc / 9) * 100)
        lum = Math.round((lum / 9) * 100)
        mas = Math.round((mas / 9) * 100)
        rob = Math.round((rob / 9) * 100)
        sha = Math.round((sha / 9) * 100)
        col = Math.round((col / 9) * 100)
        hun = Math.round((hun / 9) * 100)
        fan = Math.round((fan / 9) * 100)
        hyp = Math.round((hyp / 9) * 100)
        Q1 = Math.round((Q1 / 9) * 100)
        Q2 = Math.round((Q2 / 9) * 100)
        Q3 = Math.round((Q3 / 9) * 100)
        Q4 = Math.round((Q4 / 9) * 100)
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("desc").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("result_vam").innerHTML = "Warmth - " + vam + "%";
    document.getElementById("result_alc").innerHTML = "Reasoning - " + alc + "%";
    document.getElementById("result_tim").innerHTML = "Emotional Stability - " + tim + "%";
    document.getElementById("result_cyc").innerHTML = "Dominance - " + cyc + "%";
    document.getElementById("result_lum").innerHTML = "Liveliness - " + lum + "%";
    document.getElementById("result_mas").innerHTML = "Rule Consciousness - " + mas + "%";
    document.getElementById("result_rob").innerHTML = "Social Boldness - " + rob + "%";
    document.getElementById("result_sha").innerHTML = "Sensitivity - " + sha + "%";
    document.getElementById("result_col").innerHTML = "Vigilance - " + col + "%";
    document.getElementById("result_hun").innerHTML = "Abstractedness - " + hun + "%";
    document.getElementById("result_fan").innerHTML = "Privateness - " + fan + "%";
    document.getElementById("result_hyp").innerHTML = "Apprehension - " + hyp + "%";
    document.getElementById("result_Q1").innerHTML = "Openness to Change - " + Q1 + "%";
    document.getElementById("result_Q2").innerHTML = "Independence - " + Q2 + "%";
    document.getElementById("result_Q3").innerHTML = "Perfectionism - " + Q3 + "%";
    document.getElementById("result_Q4").innerHTML = "Tension - " + Q4 + "%";
    
    document.getElementById("bar_vam").style.width = vam + "%";
    document.getElementById("bar_alc").style.width = alc + "%";
    document.getElementById("bar_tim").style.width = tim + "%";
    document.getElementById("bar_cyc").style.width = cyc + "%";
    document.getElementById("bar_lum").style.width = lum + "%";
    document.getElementById("bar_mas").style.width = mas + "%";
    document.getElementById("bar_rob").style.width = rob + "%";
    document.getElementById("bar_sha").style.width = sha + "%";
    document.getElementById("bar_col").style.width = col + "%";
    document.getElementById("bar_hun").style.width = hun + "%";
    document.getElementById("bar_fan").style.width = fan + "%";
    document.getElementById("bar_hyp").style.width = hyp + "%";
    document.getElementById("bar_Q1").style.width = Q1 + "%";
    document.getElementById("bar_Q2").style.width = Q2 + "%";
    document.getElementById("bar_Q3").style.width = Q3 + "%";
    document.getElementById("bar_Q4").style.width = Q4 + "%";
}




