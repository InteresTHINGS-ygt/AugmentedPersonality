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


var test_status = 0;

function buttonclick(score) {
    var questions = ["I have a need for emotional intensity and authenticity.",
    "I am not afraid to dive deep into my darkest feelings and sides.",
    "I think that sadness connects us all together.",
    
    "I evaluate things according to my own values.",
    "I create a sense of identity through my inner experience.",
    "I have a need to create my own style.",
    
    "I enjoy reliving my past memories in vivid detail.",
    "I have a need for timelessness and durability in my things.",
    "I create routines that make me more relaxed and productive.",
    
    "I am loyal to my tasks and my interests.",
    "I tend to focus on one thing in order to master it.",
    "I am definitely more of a specialist.",
    
    "I frequently look at the bright side of life.",
    "I am often considered as enthusiastic and playful.",
    "I see the opportunity in every obstacle.",
    
    "I enjoy learning about a wide variety of topics.",
    "I have a need for new knowledge and research.",
    "I believe that knowledge is power.",
    
    "I am keen on automating my lifestyle.",
    "I create algorithms in order to make things easier.",
    "I am highly interested in artifical intelligence and robotics.",
    
    "I am able to adapt into any environment.",
    "I have a flexible approach to life that I can change at any moment.",
    "I am considered as a multi-faceted generalist.",
    
    "I am generally satisfied with whatever I have.",
    "I stick with whatever it is best for me rather than the newest fads.",
    "I try to keep things as peaceful as possible.",
    
    "I am the first to jump into new experiences.",
    "I enjoy taking risks in order to find the next rush.",
    "I instinctively act in order to take advantage of opportunities.",
    
    "I build strong emotional connections with the people around me.",
    "I readily help and support other people.",
    "I am devoted to my favorite values and causes.",
    
    "I have a laser focus on how the future will be.",
    "I am ambitious and focused on achieving the final result.",
    "I believe that with enough discipline, you can achieve anything."];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question < 4){
        vam += score;
    }
    else if (current_question < 7){
        alc += score;
    }
    else if (current_question < 10){
        tim += score;
    }
    else if (current_question < 13){
        cyc += score;
    }
    else if (current_question < 16){
        lum += score;
    }
    else if (current_question < 19){
        mas += score;
    }
    else if (current_question < 22){
        rob += score;
    }
    else if (current_question < 25){
        sha += score;
    }
    else if (current_question < 28){
        col += score;
    }
    else if (current_question < 31){
        hun += score;
    }
    else if (current_question < 34){
        fan += score;
    }
    else if (current_question < 37){
        hyp += score;
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
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
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("desc").style.display = "none";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("result_vam").innerHTML = "Intensity - The Vampire - " + vam + "%";
    document.getElementById("result_alc").innerHTML = "Evaluation - The Alchemist - " + alc + "%";
    document.getElementById("result_tim").innerHTML = "Timelessness - The Time Traveler - " + tim + "%";
    document.getElementById("result_cyc").innerHTML = "Specialization - The Cyclops - " + cyc + "%";
    document.getElementById("result_lum").innerHTML = "Optimism - The Luminary - " + lum + "%";
    document.getElementById("result_mas").innerHTML = "Curiosity - The Mastermind - " + mas + "%";
    document.getElementById("result_rob").innerHTML = "Algorithms - The Roboticist - " + rob + "%";
    document.getElementById("result_sha").innerHTML = "Diversity - The Shapeshifter - " + sha + "%";
    document.getElementById("result_col").innerHTML = "Contentment - The Collector - " + col + "%";
    document.getElementById("result_hun").innerHTML = "Adventure - The Hunter - " + hun + "%";
    document.getElementById("result_fan").innerHTML = "Devotion - The Fanatic - " + fan + "%";
    document.getElementById("result_hyp").innerHTML = "Ambition - The Hypnotist - " + hyp + "%";
    
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
}




