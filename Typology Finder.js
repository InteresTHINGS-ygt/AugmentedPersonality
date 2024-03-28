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

var enn_6 = 0;
var se = 0;


function buttonclick(score) {
    var questions = [
        "I am perceived/known by others as...",
        "I am perceived/known by others as...",
        "I am perceived/known by others as...",
        "I am perceived/known by others as...",
        "I am perceived/known by others as...",
        "I am perceived/known by others as...",
        "I am perceived/known by others as...",
        "I am perceived/known by others as...",
        "I am perceived/known by others as...",
        "I am perceived/known by others as...",
        "What kind of career would you prefer?",
        "What kind of vacation would you prefer?",
        "What kind of games would you play?",
        "What kind of environment would you prefer?",
        "If I had to choose, I would",
        "What kind of a role would you choose?",
        "What would you rather be?",
        "In a group, would you rather",
        "You have seen someone who is very successful.",
        "Something went wrong.",
        "I tend to...",
        "I tend to...",
        "I tend to...",
        "I tend to...",
        "I tend to...",
        "I tend to...",
        "I tend to...",
        "I tend to...",
        "I tend to...",
        "I tend to...",
        "One of my weaknesses would be...",
        "One of my weaknesses would be...",
        "One of my weaknesses would be...",
        "One of my weaknesses would be...",
        "One of my weaknesses would be...",
        "One of my weaknesses would be...",
        "One of my weaknesses would be...",
        "One of my weaknesses would be...",
        "One of my weaknesses would be...",
        "One of my weaknesses would be...",
        "If I could choose, my strengths would be...",
        "If I could choose, my strengths would be...",
        "If I could choose, my strengths would be...",
        "If I could choose, my strengths would be...",
        "If I could choose, my strengths would be...",
        "If I could choose, my strengths would be...",
        "If I could choose, my strengths would be...",
        "If I could choose, my strengths would be...",
        "If I could choose, my strengths would be...",
        "If I could choose, my strengths would be..."
        ];

    var statement_1 = [
        "practical and concrete thinker",
        "grounded in reality",
        "prioritizing relaxation over work",
        "unstructured and spontaneous",
        "serious and reserved",
        "someone who prefers following",
        "rather tough-minded and insensitive",
        "willing to fight or compete",
        "confident without much doubt",
        "emotionally stable and controlled",
        "Something more simple and concrete",
        "Go back to familiar places",
        "Involving relaxation without much need for goals",
        "Flexible environment where things can be spontaneous",
        "Focus and get alone time",
        "Pick a passive or support role",
        "Something less involved with other people’s feelings",
        "Compete with others",
        "Focus on my good qualities",
        "Control my emotional reactions",
        "Think in plain and simple terms",
        "Do things the way I have always done them",
        "Do whatever I feel like at the moment",
        "Adapt and go with the flow",
        "Keep things serious",
        "Let others initiate things",
        "Not be swayed by others’ feelings",
        "Do things for my own gain",
        "Feel confident about my abilities",
        "Control my cravings easily",
        "too simple-minded and incurious",
        "too traditional and conventional",
        "too much of a slacker",
        "too messy and impulsive",
        "too reserved and distant",
        "too much of a follower",
        "prone to selfishness and insensitivity",
        "prone to insulting",
        "prone to overconfidence",
        "prone to apathy",
        "I don’t overcomplicate things",
        "I am practical with good common sense",
        "I enjoy free time and relaxation",
        "I am adaptable and spontaneous",
        "I enjoy my alone time",
        "I reflect before acting",
        "I am good at making rational and impersonal decisions",
        "I am not afraid of going against others",
        "I am calm in high-pressure situations",
        "I am patient and composed"
    ]
    var statement_2 = [
        "curious and mentally engaged",
        "imaginative and open-minded",
        "ambitious and hardworking",
        "planful and organized",
        "sociable and enthusiastic",
        "someone who takes charge",
        "compassionate and helpful",
        "a harmonious person who is cooperative",
        "prone to worry and doubt",
        "impatient and irritable",
        "Something like a scientist, academician, philosopher, etc.",
        "Pursue new adventures",
        "Involving hard work and clear goals",
        "Structured environment where I can stay organized",
        "Socialize in large groups",
        "Pick an active or leadership role",
        "Something involved with helping others",
        "Collaborate with others",
        "Feel envious and discouraged",
        "Feel very upset and annoyed",
        "Exhibit curiosity towards new ideas",
        "Try out new ways to do things",
        "Squezze in as much work as possible",
        "Make detailed plans in advance",
        "Have fun and joke around",
        "Be the first to act",
        "Be sensitive towards others’ feelings",
        "Keep things fair and honest",
        "Frequently doubt my abilities",
        "Overindulge in certain things",
        "prone to overcomplicating things",
        "too impractical and eccentric",
        "too much of a workaholic",
        "too stuffy and rigid",
        "can’t handle alone time",
        "too dominant and overwhelming",
        "too affected by others’ struggles",
        "too willing to get along with others",
        "prone to negative thinking",
        "too much of an emotional rollercoaster",
        "I enjoy learning new things and concepts",
        "I am creative and imaginative",
        "I pursue my goals and achieve them",
        "I am organized and great with details",
        "I am sociable and enthusiastic",
        "I would be a good leader",
        "I am sympathetic and helpful",
        "I am peaceful and respectful",
        "I sense danger before anyone else",
        "I am definitely not apathetic"
    ]

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    document.getElementById("Statement_1").innerHTML = statement_1[current_question];
    document.getElementById("Statement_2").innerHTML = statement_2[current_question];

    if (current_question % 10 == 1){
        int += score;
    }

    else if (current_question % 10 == 3){
        ind += score;
    }
   
    else if (current_question % 10 == 5){
        ent += score;
    }
    
    else if (current_question % 10 == 7){
        com += score;
    }
    
    else if (current_question % 10 == 9){
        wtd += score;
    }
    
    else if (current_question % 10 == 2){
        opn += score;
    }
    
    else if (current_question % 10 == 4){
        ord += score;
    }
    
    else if (current_question % 10 == 6){
        asr += score;
    }
    
    else if (current_question % 10 == 8){
        pol += score;
    }
    
    else if (current_question % 10 == 0){
        vol += score;
    }
    

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        int = Math.round((int / 15) * 100)
        opn = Math.round((opn / 15) * 100)
        ind = Math.round((ind / 15) * 100)
        ord = Math.round((ord / 15) * 100)
        ent = Math.round((ent / 15) * 100)
        asr = Math.round((asr / 15) * 100)
        com = Math.round((com / 15) * 100)
        pol = Math.round((pol / 15) * 100)
        wtd = Math.round((wtd / 15) * 100)
        vol = Math.round((vol / 15) * 100)

        openness = Math.round((int + opn) / 2)
        conscientiousness = Math.round((ind + ord) / 2)
        extraversion = Math.round((ent + asr) / 2)
        agreeableness = Math.round((com + pol) / 2)
        neuroticism = Math.round((wtd + vol) / 2)
        get_result();
    }
}

function manualinsert() {
    document.getElementById("manual").style.display = "";
    document.getElementById("start").style.display = "none";
    document.getElementById("manualb").style.display = "none";
    document.getElementById("Statement").innerHTML = "Trait scores are between 0 and 100."
}

function reveal_patterns() {
    document.getElementById("pattern_desc").style.display = "";
}

function manual() {
    int = document.getElementById("int").valueAsNumber;
    opn = document.getElementById("opn").valueAsNumber;
    ind = document.getElementById("ind").valueAsNumber;
    ord = document.getElementById("ord").valueAsNumber;
    ent = document.getElementById("ent").valueAsNumber;
    asr = document.getElementById("asr").valueAsNumber;
    com = document.getElementById("com").valueAsNumber;
    pol = document.getElementById("pol").valueAsNumber;
    wtd = document.getElementById("wtd").valueAsNumber;
    vol = document.getElementById("vol").valueAsNumber;
    get_result()
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("manual").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("Statement").style.display = "none";
    document.getElementById("OTE").innerHTML = "Openess to Experience: " + openness + "%";
    document.getElementById("int").innerHTML = "Intellectual Curiosity: " + int + "%";
    document.getElementById("opn").innerHTML = "Unconventionality: " + opn + "%";
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
    document.getElementById("wtd").innerHTML = "Negative Affect: " + wtd + "%";
    document.getElementById("vol").innerHTML = "Emotional Instability: " + vol + "%";
    
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

    document.getElementById("charts_space").style.display = "";
    document.getElementById("typology_finder").style.display = "";
    document.getElementById("prediction").style.display = "";

    document.getElementById("point_oc").style.left = conscientiousness + "%";
    document.getElementById("point_oc").style.bottom = openness + "%";

    document.getElementById("point_oe").style.left = extraversion + "%";
    document.getElementById("point_oe").style.bottom = openness + "%";

    document.getElementById("point_oa").style.left = agreeableness + "%";
    document.getElementById("point_oa").style.bottom = openness + "%";

    document.getElementById("point_on").style.left = neuroticism + "%";
    document.getElementById("point_on").style.bottom = openness + "%";

    document.getElementById("point_ce").style.left = conscientiousness + "%";
    document.getElementById("point_ce").style.bottom = extraversion + "%";

    document.getElementById("point_ca").style.left = conscientiousness + "%";
    document.getElementById("point_ca").style.bottom = agreeableness + "%";

    document.getElementById("point_cn").style.left = conscientiousness + "%";
    document.getElementById("point_cn").style.bottom = neuroticism + "%";

    document.getElementById("point_ea").style.left = agreeableness + "%";
    document.getElementById("point_ea").style.bottom = extraversion + "%";

    document.getElementById("point_en").style.left = neuroticism + "%";
    document.getElementById("point_en").style.bottom = extraversion + "%";

    document.getElementById("point_an").style.left = neuroticism + "%";
    document.getElementById("point_an").style.bottom = agreeableness + "%";

    if (ord < 60) {
        document.getElementById("ennea1").style.display = "none";
    }
    
    if (com < 60) {
        document.getElementById("ennea2").style.display = "none";
    }

    if (ind < 60) {
        document.getElementById("ennea3").style.display = "none";
    }

    if (opn < 60 || wtd < 30) {
        document.getElementById("ennea4").style.display = "none";
    }

    if (int < 60 || ent > 70) {
        document.getElementById("ennea5").style.display = "none";
    }

    if (enn_6 < 4 || wtd < 30) {
        document.getElementById("ennea6").style.display = "none";
    }

    if (opn < 60 || ent < 60 || wtd > 80) {
        document.getElementById("ennea7").style.display = "none";
    }

    if (asr < 60 || pol > 50 || wtd > 50) {
        document.getElementById("ennea8").style.display = "none";
    }

    if (pol < 60) {
        document.getElementById("ennea9").style.display = "none";
    }

    if (ind > 80 || asr > 80) {
        document.getElementById("infp").style.display = "none";
        document.getElementById("intp").style.display = "none";
        document.getElementById("isfp").style.display = "none";
        document.getElementById("istp").style.display = "none";
    }

    if (ord < 40) {
        document.getElementById("infj").style.display = "none";
        document.getElementById("intj").style.display = "none";
        document.getElementById("isfj").style.display = "none";
        document.getElementById("istj").style.display = "none";
    }

    if (ord > 60) {
        document.getElementById("enfp").style.display = "none";
        document.getElementById("entp").style.display = "none";
        document.getElementById("esfp").style.display = "none";
        document.getElementById("estp").style.display = "none";
    }

    if (asr < 30 && ind < 40) {
        document.getElementById("enfj").style.display = "none";
        document.getElementById("entj").style.display = "none";
        document.getElementById("esfj").style.display = "none";
        document.getElementById("estj").style.display = "none";
    }

    if (opn > 80 || ord < 50) {
        document.getElementById("esfj").style.display = "none";
        document.getElementById("estj").style.display = "none";
        document.getElementById("isfj").style.display = "none";
        document.getElementById("istj").style.display = "none";
    }

    if (int < 40 || opn < 60) {
        document.getElementById("enfp").style.display = "none";
        document.getElementById("entp").style.display = "none";
        document.getElementById("infp").style.display = "none";
        document.getElementById("intp").style.display = "none";
    }

    if (int < 40) {
        document.getElementById("enfj").style.display = "none";
        document.getElementById("entj").style.display = "none";
        document.getElementById("infj").style.display = "none";
        document.getElementById("intj").style.display = "none";
    }

    if (ind < 50 || com > 90) {
        document.getElementById("entj").style.display = "none";
        document.getElementById("estj").style.display = "none";
        document.getElementById("intj").style.display = "none";
        document.getElementById("istj").style.display = "none";
    }

    if (com < 60) {
        document.getElementById("enfj").style.display = "none";
        document.getElementById("esfj").style.display = "none";
        document.getElementById("infj").style.display = "none";
        document.getElementById("isfj").style.display = "none";
    }

    if (com < 40) {
        document.getElementById("enfp").style.display = "none";
        document.getElementById("esfp").style.display = "none";
        document.getElementById("infp").style.display = "none";
        document.getElementById("isfp").style.display = "none";
    }

    if (com > 80) {
        document.getElementById("entp").style.display = "none";
        document.getElementById("estp").style.display = "none";
        document.getElementById("intp").style.display = "none";
        document.getElementById("istp").style.display = "none";
    }

    if (se < 3) {
        document.getElementById("esfp").style.display = "none";
        document.getElementById("estp").style.display = "none";
    }

    if (se < 1) {
        document.getElementById("isfp").style.display = "none";
        document.getElementById("istp").style.display = "none";
    }

    if (opn < 30 && ind > 40 && ent > 50) {
        document.getElementById("pop").style.display = "";
    }

    if (opn > 70 && ord > 70 && ent < 40) {
        document.getElementById("clas").style.display = "";
    }

    if (opn > 70 && ord < 30) {
        document.getElementById("rock").style.display = "";
    }

    if (ent > 60) {
        document.getElementById("dance").style.display = "";
    }

    if (ent > 60 && ord < 30) {
        document.getElementById("rap").style.display = "";
    }

    if (wtd > 70) {
        document.getElementById("repeat").style.display = "";
    }

    if (opn > 50 && wtd > 70) {
        document.getElementById("dark").style.display = "";
    }

    if (ent > 70 && wtd < 40) {
        document.getElementById("upbeat").style.display = "";
    }

    if (opn > 60 && ent > 50) {
        document.getElementById("apple").style.display = "";
    }

    if (int > 80 && ent < 30 && wtd > 70) {
        document.getElementById("anti").style.display = "";
    }

    if (int > 70 && ent < 50 && pol > 50 && wtd > 30) {
        document.getElementById("android").style.display = "";
    }

    if (int > 80 && opn > 70 && ent < 40 && com < 70) {
        document.getElementById("linux").style.display = "";
    }

    if (openness > 80) {
        document.getElementById("ipad").style.display = "";
    }

    if (opn > 60 && ent < 50 && neuroticism > 60) {
        document.getElementById("cat").style.display = "";
    }

    if (ind > 70 && ord > 30 && extraversion > 60 && agreeableness > 65) {
        document.getElementById("dog").style.display = "";
    }

    if (opn > 80) {
        document.getElementById("exo").style.display = "";
    }

    if (openness > 60 && conscientiousness < 40 && neuroticism > 50) {
        document.getElementById("night").style.display = "";
    }

    if (conscientiousness > 70) {
        document.getElementById("early").style.display = "";
    }

    if (int > 50 && extraversion < 40 && wtd > 50) {
        document.getElementById("winter").style.display = "";
    }

    if (extraversion > 60 && ent > 70) {
        document.getElementById("summer").style.display = "";
    }

    if (opn > 50 && ent > 50) {
        document.getElementById("iced").style.display = "";
    }

    if (opn > 60 && asr < 50 && agreeableness > 50 && wtd > 50) {
        document.getElementById("latte").style.display = "";
    }

    if (ind > 60 && asr > 60 && vol > 50 && pol < 50) {
        document.getElementById("esp").style.display = "";
    }

    if (conscientiousness > 50 && agreeableness > 50) {
        document.getElementById("che").style.display = "";
    }

    if (extraversion > 40 && neuroticism > 60) {
        document.getElementById("over").style.display = "";
    }

    if (vol < 50 && asr < 40) {
        document.getElementById("slow").style.display = "";
    }

    if (neuroticism > 60 && asr > 70) {
        document.getElementById("fast").style.display = "";
    }

    if (int > 75) {
        document.getElementById("rubik").style.display = "";
    }

    if (int > 70 && extraversion < 60) {
        document.getElementById("gla").style.display = "";
    }

    if (openness > 70 && wtd > 70) {
        document.getElementById("pers").style.display = "";
    }

    if (int > 65 && agreeableness < 80) {
        document.getElementById("eng").style.display = "";
    }

    if (int > 65 && conscientiousness > 70 && com > 70) {
        document.getElementById("med").style.display = "";
    }

    if (openness > 70 && asr > 70 && ind > 30) {
        document.getElementById("entr").style.display = "";
    }

    if (openness > 70 && ord < 40) {
        document.getElementById("create").style.display = "";
    }
}




