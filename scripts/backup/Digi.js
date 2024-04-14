var current_question = -1;
var score = 0;

var lateral = 0;
var lexical = 0;
var linear = 0;
var impressionistic = 0;

var laterality = 0;
var impressionism = 0;
var cereb_status = "";
var impressionistic_status = "";

var test_status = 0;

function buttonclick(score) {
    var questions = ["I tend to connect seemingly unrelated things and concepts together.",
                    "I understand things better when they are able to be formulated.",
                    "I prefer seeing and accepting things as they are.",
                    "I tend to have trouble with explaining my thoughts in words.",
                    "I generally consider a wide range of ideas and possibilities.",
                    "I highly favor categorization and organization of thought.",
                    "I tend to have a single train of thought going in my mind.",
                    "I prioritize the rawest form of thought over formulating them.",
                    "I am very likely to think about many interrelated things at once.",
                    "I tend to rely on systematic logic when it comes to my thoughts.",
                    "I generally focus on a single thing or task for a long time.",
                    "My thoughts tend to be series of raw impressions rather than something formulaic.",
                    "My thoughts can be best expressed as a spider web of connections.",
                    "I tend to refuse understandings without a formula or terminology.",
                    "I tend to communicate in a highly straightforward manner.",
                    "I heavily prioritize my instincts and impressions during thinking."];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    }

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question % 4 == 1){
        lateral = lateral + score
    }
    else if (current_question % 4 == 2){
        lexical = lexical + score
    }
    else if (current_question % 4 == 3){
        linear = linear + score
    }
    else if (current_question % 4 == 0){
        impressionistic = impressionistic + score
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        laterality = lateral - linear
        impressionism = impressionistic - lexical
        if (laterality == 0) {
            tiebreaker_c();
        }
        else if (impressionism == 0) {
            tiebreaker_r();
        }
        else {
            get_result();
        }
    }
    
}

function tiebreaker_c() {
    document.getElementById("test").style.display = "none";
    document.getElementById("tiebreaker_c").style.display = "block";
}

function tiebreaker_r() {
    document.getElementById("test").style.display = "none";
    document.getElementById("tiebreaker_r").style.display = "block";
}

function tiebreakerclick_c(score) {
    laterality += score;
    document.getElementById("tiebreaker_c").style.display = "none";
    if (impressionism == 0) {
        tiebreaker_r();
    }
    else {
        get_result();
    }
}

function tiebreakerclick_r(score) {
    impressionism += score;
    document.getElementById("tiebreaker_r").style.display = "none";
    get_result();
}

function get_result() {
    if (laterality > 6){
        cereb_status = "Very Lateral"
    }
    else if (laterality > 0){
        cereb_status = "Fairly Lateral"
    }
    else if (laterality > -7){
        cereb_status = "Fairly Linear"
    }
    else {
        cereb_status = "Very Linear"
    }

    if (impressionism > 6){
        impressionistic_status = "Very Impressionistic"
    }
    else if (impressionism > 0){
        impressionistic_status = "Fairly Impressionistic"
    }
    else if (impressionism > -7){
        impressionistic_status = "Fairly Lexical"
    }
    else {
        impressionistic_status = "Very Lexical"
    }
    document.getElementById("results").style.display = "block";
    document.getElementById("result1").innerHTML = "Your laterality is " + laterality + " (" + cereb_status + ")";
    document.getElementById("result2").innerHTML = "Your impressionism is " + impressionism + " (" + impressionistic_status + ")";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";

    if (laterality > 6){
        if (impressionism > 6){
            document.getElementById("result3").innerHTML = "You are a newtype!";
        }
        else if (impressionism <= 6 && impressionism > 0){
            document.getElementById("result3").innerHTML = "You are a fascinator!";
        }
        else if (impressionism >= -6 && impressionism < 0){
            document.getElementById("result3").innerHTML = "You are an analyst!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are a calculator!";
        }
    }
    else if (laterality <= 6 && laterality > 0){
        if (impressionism > 6){
            document.getElementById("result3").innerHTML = "You are an aesthetician!";
        }
        else if (impressionism <= 6 && impressionism > 0){
            document.getElementById("result3").innerHTML = "You are an overseer!";
        }
        else if (impressionism >= -6 && impressionism < 0){
            document.getElementById("result3").innerHTML = "You are a strategist!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are a technician!";
        }
    }
    else if (laterality >= -6 && laterality < 0){
        if (impressionism > 6){
            document.getElementById("result3").innerHTML = "You are a sensate!";
        }
        else if (impressionism <= 6 && impressionism > 0){
            document.getElementById("result3").innerHTML = "You are an externalist!";
        }
        else if (impressionism >= -6 && impressionism < 0){
            document.getElementById("result3").innerHTML = "You are a caregiver!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are a contemplator!";
        }
    }
    else {
        if (impressionism > 6){
            document.getElementById("result3").innerHTML = "You are a survivalist!";
        }
        else if (impressionism <= 6 && impressionism > 0){
            document.getElementById("result3").innerHTML = "You are a realist!";
        }
        else if (impressionism >= -6 && impressionism < 0){
            document.getElementById("result3").innerHTML = "You are a protector!";
        }
        else {
            document.getElementById("result3").innerHTML = "You are a bookkeeper!";
        }
    }

    var laterality_percentage = Math.round(((laterality + 12)/24) * 100);
    var impressionism_percentage = Math.round(((impressionism + 12)/24) * 100);

    var cp = laterality_percentage + "%";
    var rp = impressionism_percentage + "%";

    document.getElementById("point").style.bottom = cp;
    document.getElementById("point").style.left = rp;
}


