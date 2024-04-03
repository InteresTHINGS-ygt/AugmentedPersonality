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

var vit = 0;
var mat = 0;
var gi = 0;
var ap = 0;

var openness = 0;
var conscientiousness = 0;
var extraversion = 0;
var agreeableness = 0;
var neuroticism = 0;

var test_status = 0;

var enn_6 = 0;
var se = 0;



function buttonclick(score) {
    document.getElementById("manualb").style.display = "none"

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
        int = Math.round((int / 25) * 10000) / 100
        opn = Math.round((opn / 25) * 10000) / 100
        ind = Math.round((ind / 25) * 10000) / 100
        ord = Math.round((ord / 25) * 10000) / 100
        ent = Math.round((ent / 25) * 10000) / 100
        asr = Math.round((asr / 25) * 10000) / 100
        com = Math.round((com / 25) * 10000) / 100
        pol = Math.round((pol / 25) * 10000) / 100
        wtd = Math.round((wtd / 25) * 10000) / 100
        vol = Math.round((vol / 25) * 10000) / 100

        openness = Math.round((int + opn) / 2)
        conscientiousness = Math.round((ind + ord) / 2)
        extraversion = Math.round((ent + asr) / 2)
        agreeableness = Math.round((com + pol) / 2)
        neuroticism = Math.round((wtd + vol) / 2)

        vit = Math.round(((3 * ent) + (3 * (100 - wtd)) + opn + ind + asr + (100 - vol)) / 10);
        mat = Math.round((ind + (3 * asr) + (3 * (100 - pol)) + ent + (100 - com) + (100 - int) + (100 - opn)) / 11);
        gi = Math.round(((3 * opn) + (3 * (100 - ord)) + (3 * (100 - pol)) + (3 * vol) + wtd + (100 - com) + (100 - ind)) / 15);
        ap = Math.round(((3 * ind) + (3 * ord) + (3 * asr) + (3 * vol) + wtd + (100 - pol)) / 14);

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
    int = document.getElementById("int_m").valueAsNumber;
    opn = document.getElementById("opn_m").valueAsNumber;
    ind = document.getElementById("ind_m").valueAsNumber;
    ord = document.getElementById("ord_m").valueAsNumber;
    ent = document.getElementById("ent_m").valueAsNumber;
    asr = document.getElementById("asr_m").valueAsNumber;
    com = document.getElementById("com_m").valueAsNumber;
    pol = document.getElementById("pol_m").valueAsNumber;
    wtd = document.getElementById("wtd_m").valueAsNumber;
    vol = document.getElementById("vol_m").valueAsNumber;

    openness = ((int + opn) / 2)
    conscientiousness = ((ind + ord) / 2)
    extraversion = ((ent + asr) / 2)
    agreeableness = ((com + pol) / 2)
    neuroticism = ((wtd + vol) / 2)

    vit = Math.round(((3 * ent) + (3 * (100 - wtd)) + opn + ind + asr + (100 - vol)) / 10);
    mat = Math.round((ind + (3 * asr) + (3 * (100 - pol)) + ent + (100 - com) + (100 - int) + (100 - opn)) / 11);
    gi = Math.round(((3 * opn) + (3 * (100 - ord)) + (3 * (100 - pol)) + (3 * vol) + wtd + (100 - com) + (100 - ind)) / 15);
    ap = Math.round(((3 * ind) + (3 * ord) + (3 * asr) + (3 * vol) + wtd + (100 - pol)) / 14);

    get_result();
}

function get_result() {
    document.getElementById("all_results").style.display = "";
    document.getElementById("test").style.display = "none";
    document.getElementById("manual").style.display = "none";
    document.getElementById("question_number").innerHTML = "Five Traits, Ten Aspects";
    document.getElementById("Statement").style.display = "none";
    document.getElementById("Statement_1").style.display = "none";
    document.getElementById("Statement_2").style.display = "none";

    // Trait scores
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

    // General profile
    if (int > 70) {
        document.getElementById("int_desc").innerHTML = "You deeply appreciate philosophical thought. You enjoy learning and playing with ideas and concepts. You are likely to enjoy mentally stimulating careers involving research and complex knowledge."
    }
    else if (int > 30) {
        document.getElementById("int_desc").innerHTML = "You have a moderate level of interest in intellectual, mental activities. You may occassionally enjoy ideas and concepts, but you don't like to go too far into these pursuits."
    }
    else {
        document.getElementById("int_desc").innerHTML = "You tend to prefer thinking in plain and simple terms. You highly favor the practical applications of ideas rather than actively learning about how they work. You would rather do something less mentally stimulating."
    }

    if (opn > 70) {
        document.getElementById("opn_desc").innerHTML = "You are highly creative with a vivid imagination. You enjoy change and new experiences. You would be considered as adventurous, experimental, and unconventional. You may even enjoy artistic pursuits."
    }
    else if (opn > 30) {
        document.getElementById("opn_desc").innerHTML = "You are moderately open to new experiences. While you mostly prefer the tried-and-true, you may also enjoy an occassional change. You may have big dreams but you also try to keep things realistic."
    }
    else {
        document.getElementById("opn_desc").innerHTML = "You are generally a person of tradition and routines. You vastly prefer the facts over the fantasy. You tend to be disinterested in artistic experiences, prefering something more grounded."
    }

    if (ind > 70) {
        document.getElementById("ind_desc").innerHTML = "You are driven to achieve your lofty goals. When you are focused, nothing can distract you. You may have some tendency towards being a workaholic. You are generally an hardworking and efficient person."
    }
    else if (ind > 30) {
        document.getElementById("ind_desc").innerHTML = "While you may not be the hardest worker, you still like to get things done. "
    }
    else {
        document.getElementById("ind_desc").innerHTML = "You tend to prefer thinking in plain and simple terms. You highly favor the practical applications of ideas rather than actively learning about how they work. You would rather do something less mentally stimulating."
    }

    if (ord > 70) {
        document.getElementById("ord_desc").innerHTML = "You deeply appreciate philosophical thought. You enjoy learning and playing with ideas and concepts. You are likely to enjoy mentally stimulating careers involving research and complex knowledge."
    }
    else if (ord > 30) {
        document.getElementById("ord_desc").innerHTML = "You have a moderate level of interest in intellectual, mental activities. You may occassionally enjoy ideas and concepts, but you don't like to go too far into these pursuits."
    }
    else {
        document.getElementById("ord_desc").innerHTML = "You tend to prefer thinking in plain and simple terms. You highly favor the practical applications of ideas rather than actively learning about how they work. You would rather do something less mentally stimulating."
    }

    if (ent > 70) {
        document.getElementById("ent_desc").innerHTML = "You deeply appreciate philosophical thought. You enjoy learning and playing with ideas and concepts. You are likely to enjoy mentally stimulating careers involving research and complex knowledge."
    }
    else if (ent > 30) {
        document.getElementById("ent_desc").innerHTML = "You have a moderate level of interest in intellectual, mental activities. You may occassionally enjoy ideas and concepts, but you don't like to go too far into these pursuits."
    }
    else {
        document.getElementById("ent_desc").innerHTML = "You tend to prefer thinking in plain and simple terms. You highly favor the practical applications of ideas rather than actively learning about how they work. You would rather do something less mentally stimulating."
    }

    if (asr > 70) {
        document.getElementById("asr_desc").innerHTML = "You deeply appreciate philosophical thought. You enjoy learning and playing with ideas and concepts. You are likely to enjoy mentally stimulating careers involving research and complex knowledge."
    }
    else if (asr > 30) {
        document.getElementById("asr_desc").innerHTML = "You have a moderate level of interest in intellectual, mental activities. You may occassionally enjoy ideas and concepts, but you don't like to go too far into these pursuits."
    }
    else {
        document.getElementById("asr_desc").innerHTML = "You tend to prefer thinking in plain and simple terms. You highly favor the practical applications of ideas rather than actively learning about how they work. You would rather do something less mentally stimulating."
    }

    if (com > 70) {
        document.getElementById("com_desc").innerHTML = "You deeply appreciate philosophical thought. You enjoy learning and playing with ideas and concepts. You are likely to enjoy mentally stimulating careers involving research and complex knowledge."
    }
    else if (com > 30) {
        document.getElementById("com_desc").innerHTML = "You have a moderate level of interest in intellectual, mental activities. You may occassionally enjoy ideas and concepts, but you don't like to go too far into these pursuits."
    }
    else {
        document.getElementById("com_desc").innerHTML = "You tend to prefer thinking in plain and simple terms. You highly favor the practical applications of ideas rather than actively learning about how they work. You would rather do something less mentally stimulating."
    }

    if (pol > 70) {
        document.getElementById("pol_desc").innerHTML = "You deeply appreciate philosophical thought. You enjoy learning and playing with ideas and concepts. You are likely to enjoy mentally stimulating careers involving research and complex knowledge."
    }
    else if (pol > 30) {
        document.getElementById("pol_desc").innerHTML = "You have a moderate level of interest in intellectual, mental activities. You may occassionally enjoy ideas and concepts, but you don't like to go too far into these pursuits."
    }
    else {
        document.getElementById("pol_desc").innerHTML = "You tend to prefer thinking in plain and simple terms. You highly favor the practical applications of ideas rather than actively learning about how they work. You would rather do something less mentally stimulating."
    }

    if (wtd > 70) {
        document.getElementById("wtd_desc").innerHTML = "You deeply appreciate philosophical thought. You enjoy learning and playing with ideas and concepts. You are likely to enjoy mentally stimulating careers involving research and complex knowledge."
    }
    else if (wtd > 30) {
        document.getElementById("wtd_desc").innerHTML = "You have a moderate level of interest in intellectual, mental activities. You may occassionally enjoy ideas and concepts, but you don't like to go too far into these pursuits."
    }
    else {
        document.getElementById("wtd_desc").innerHTML = "You tend to prefer thinking in plain and simple terms. You highly favor the practical applications of ideas rather than actively learning about how they work. You would rather do something less mentally stimulating."
    }

    if (vol > 70) {
        document.getElementById("vol_desc").innerHTML = "You deeply appreciate philosophical thought. You enjoy learning and playing with ideas and concepts. You are likely to enjoy mentally stimulating careers involving research and complex knowledge."
    }
    else if (vol > 30) {
        document.getElementById("vol_desc").innerHTML = "You have a moderate level of interest in intellectual, mental activities. You may occassionally enjoy ideas and concepts, but you don't like to go too far into these pursuits."
    }
    else {
        document.getElementById("vol_desc").innerHTML = "You tend to prefer thinking in plain and simple terms. You highly favor the practical applications of ideas rather than actively learning about how they work. You would rather do something less mentally stimulating."
    }

    // Compound traits
    document.getElementById("vit").innerHTML = "Vitality: " + vit + "%";
    document.getElementById("mat").innerHTML = "Materialism: " + mat + "%";
    document.getElementById("gi").innerHTML = "General Instability: " + gi + "%";
    document.getElementById("ap").innerHTML = "Type A Personality: " + ap + "%";

    document.getElementById("bar_vit").style.width = vit + "%";
    document.getElementById("bar_mat").style.width = mat + "%";
    document.getElementById("bar_gi").style.width = gi + "%";
    document.getElementById("bar_ap").style.width = ap + "%";

    // Predominant patterns
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

    // Prediction Zone
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




