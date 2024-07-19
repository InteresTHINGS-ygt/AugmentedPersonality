

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
        "What kind of work environment would you prefer?",
        "If I had to choose, I would rather...",
        "What kind of a role would you choose in a group?",
        "What would you rather do?",
        "In a group, would you rather...",
        "You have seen someone who is very successful in social media.",
        "You lost in a competitive video game.",
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
        "grounded in reality and common sense",
        "prioritizing relaxation over work",
        "unstructured and spontaneous",
        "serious and reserved",
        "someone who prefers following",
        "rather tough-minded and insensitive",
        "willing to fight or compete",
        "confident without experiencing much doubt",
        "emotionally stable and controlled",
        "Something in sales, driving, athletics, etc.",
        "Go back to familiar places for comfort",
        "Involving relaxation without much need for goals",
        "Flexible environment where things can be spontaneous",
        "Focus and get alone time",
        "Pick a passive or supportive role",
        "Something without much involvement with other people’s feelings",
        "Enjoy a good fight or argument",
        "Start focusing on my good qualities",
        "Stay composed and controlled",
        "Avoid engaging in abstract concepts",
        "Do things the way I have always done them",
        "Do whatever I feel like at the moment",
        "Adapt and go with the flow",
        "Have a serious attitude towards life",
        "Let others initiate things",
        "Not be easily swayed by others’ feelings",
        "Take advantage of situations for my own gain",
        "Feel confident about my abilities",
        "Control my cravings easily",
        "too simple-minded and incurious",
        "too traditional and conventional",
        "too much of a slacker",
        "too messy and impulsive",
        "too reserved and distant",
        "too much of a follower",
        "prone to selfishness and insensitivity",
        "prone to insulting and arguing with others",
        "prone to overconfidence",
        "prone to being apathetic",
        "I don’t overcomplicate things",
        "I am practical with good common sense",
        "I enjoy free time and relaxation",
        "I am adaptable and spontaneous",
        "I enjoy alone time and silence",
        "I reflect before acting",
        "I am good at making rational and impersonal decisions",
        "I am not afraid of going against others",
        "I am calm in stressful situations",
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
        "prone to worry, doubt, and fear",
        "impatient and irritable",
        "Something in science, philosophy, engineering, etc.",
        "Seek new places, cultures, and adventures",
        "Involving hard work and clear objectives",
        "Structured environment where everything is planned",
        "Engage in large groups",
        "Pick an active leadership role",
        "Something involved with helping others",
        "Maintain peace and harmony in the group",
        "Feel envious and discouraged",
        "Feel very upset and annoyed",
        "Enjoy mental challenges and puzzles",
        "Try out new ways to do things",
        "Squeeze in as much work as possible",
        "Plan and organize well in advance",
        "Highlight the funny moments in life",
        "Be the first and fastest to act",
        "Feel sensitivity towards others’ feelings",
        "Act in a fair and honest way",
        "Frequently doubt my abilities",
        "Overindulge in things such as food or social media",
        "prone to overcomplicating things",
        "too impractical and eccentric",
        "too much of a workaholic",
        "too stuffy and rigid",
        "can’t handle alone time",
        "too dominant and overwhelming",
        "too affected by others’ struggles",
        "too conflict-avoidant",
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
        "I notice danger before anyone else",
        "I am emotionally responsive"
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
        int = Math.round((int / 15) * 10000) / 100
        opn = Math.round((opn / 15) * 10000) / 100
        ind = Math.round((ind / 15) * 10000) / 100
        ord = Math.round((ord / 15) * 10000) / 100
        ent = Math.round((ent / 15) * 10000) / 100
        asr = Math.round((asr / 15) * 10000) / 100
        com = Math.round((com / 15) * 10000) / 100
        pol = Math.round((pol / 15) * 10000) / 100
        wtd = Math.round((wtd / 15) * 10000) / 100
        vol = Math.round((vol / 15) * 10000) / 100

        openness = Math.round((int + opn) / 2)
        conscientiousness = Math.round((ind + ord) / 2)
        extraversion = Math.round((ent + asr) / 2)
        agreeableness = Math.round((com + pol) / 2)
        neuroticism = Math.round((wtd + vol) / 2)

        pls = Math.round((extraversion + openness) / 2);
        stab = Math.round((agreeableness + conscientiousness + (100 - neuroticism)) / 3);
        vit = Math.round(((3 * ent) + (3 * (100 - wtd)) + opn + ind + asr + (100 - vol)) / 10);
        mat = Math.round((ind + (3 * asr) + (3 * (100 - pol)) + ent + (100 - com) + (100 - int) + (100 - opn)) / 11);
        ap = Math.round(((3 * ind) + (3 * ord) + (3 * asr) + (3 * vol) + wtd + (100 - pol)) / 14);
        ss = Math.round((3*opn + 3*(100 - ord) + 2*ent + 3*asr + 2*(100 - pol) + 3*(100 - wtd) + vol)/17);
        at = Math.round((ent + asr + 2*(100-pol) + 2*vol)/6);
        pop = Math.round((opn + ind + 3*ent + 2*asr + 2*com + pol + 3*(100-wtd) + 2*(100-vol))/15);
        spk = Math.round((2*opn + 2*(100-ind) + 3*(100-ord) + asr + 2*(100-com) + 3*(100-pol) + (100-wtd) + vol)/15);
        rad = Math.round((int + opn + (100-ord) + ent + asr + (100-com) + (100-pol) + wtd + vol)/9);
        intro = Math.round((2*int + 2*opn + ord + 2*(100-ent) + 2*(100-asr) + 2*wtd)/11);
        sen = Math.round((2*openness + (100-extraversion) + 3*agreeableness + 3*neuroticism)/9);
        mr = Math.round((openness + 3*conscientiousness + 2*agreeableness + 3*(100-neuroticism))/9);
        myst = Math.round((3*int + 3*opn + (100-ent) + (100-pol) + wtd + vol)/10);
        act = Math.round((opn + 3*ind + ord + 2*ent + 3*asr + 2*(100-wtd))/12);
        lib = Math.round((int + 3*opn + (100-ind) + 3*(100-ord) + (100-asr) + 2*com + wtd)/12);

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

    pls = Math.round((extraversion + openness) / 2);
    stab = Math.round((agreeableness + conscientiousness + (100 - neuroticism)) / 3);
    vit = Math.round(((3 * ent) + (3 * (100 - wtd)) + opn + ind + asr + (100 - vol)) / 10);
    mat = Math.round((ind + (3 * asr) + (3 * (100 - pol)) + ent + (100 - com) + (100 - int) + (100 - opn)) / 11);
    ap = Math.round(((3 * ind) + (3 * ord) + (3 * asr) + (3 * vol) + wtd + (100 - pol)) / 14);
    ss = Math.round((3*opn + 3*(100 - ord) + 2*ent + 3*asr + 2*(100 - pol) + 3*(100 - wtd) + vol)/17);
    at = Math.round((ent + asr + 2*(100-pol) + 2*vol)/6);
    pop = Math.round((opn + ind + 3*ent + 2*asr + 2*com + pol + 3*(100-wtd) + 2*(100-vol))/15);
    spk = Math.round((2*opn + 2*(100-ind) + 3*(100-ord) + asr + 2*(100-com) + 3*(100-pol) + (100-wtd) + vol)/15);
    rad = Math.round((int + opn + (100-ord) + ent + asr + (100-com) + (100-pol) + wtd + vol)/9);
    intro = Math.round((2*int + 2*opn + ord + 2*(100-ent) + 2*(100-asr) + 2*wtd)/11);
    sen = Math.round((2*openness + (100-extraversion) + 3*agreeableness + 3*neuroticism)/9);
    mr = Math.round((openness + 3*conscientiousness + 2*agreeableness + 3*(100-neuroticism))/9);
    myst = Math.round((3*int + 3*opn + (100-ent) + (100-pol) + wtd + vol)/10);
    act = Math.round((opn + 3*ind + ord + 2*ent + 3*asr + 2*(100-wtd))/12);
    lib = Math.round((int + 3*opn + (100-ind) + 3*(100-ord) + (100-asr) + 2*com + wtd)/12);

    get_result();
}

function get_result() {
    document.getElementById("all_results").style.display = "";
    document.getElementById("test").style.display = "none";
    document.getElementById("manual").style.display = "none";
    document.getElementById("entiretest").style.display = "none";
    document.getElementById("question_number").innerHTML = "";
    document.getElementById("Statement").style.display = "none";
    document.getElementById("Statement_1").style.display = "none";
    document.getElementById("Statement_2").style.display = "none";

    // Percentiles
    var scores = [openness, conscientiousness, extraversion, agreeableness, neuroticism, int, opn, ind, ord, ent, asr, com, pol, wtd, vol];
    var means = [63, 47, 60, 51, 58, 62, 65, 51, 42, 58, 62, 59, 43, 60, 57];
    var sds = [21, 27, 27, 26, 25, 25, 27, 31, 29, 28, 31, 30, 30, 29, 30];

    var z_scores = [-3, -2.5, -2.4, -2.3, -2.2, -2.1, -2,
                    -1.9, -1.8, -1.7, -1.6, -1.5, -1.4, -1.3, -1.2, -1.1, -1,
                    -0.9, -0.8, -0.7, -0.6, -0.5, -0.4, -0.3, -0.2, -0.1, 0,
                    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
                    1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2,
                    2.1, 2.2, 2.3, 2.4, 2.5];
    var percentiles = [0.5, 0.62, 0.82, 1.07, 1.39, 1.79, 2.28,
                        2.87, 3.59, 4.46, 5.48, 6.68, 8.08, 9.68, 11.5, 13.57, 15.87,
                        18.4, 21.19, 24.2, 27.43, 30.85, 34.46, 38.21, 42.07, 46.02, 50,
                        53.98, 57.93, 61.79, 65.54, 69.15, 72.58, 75.8, 78.81, 81.59, 84.13,
                        86.43, 88.49, 90.32, 91.92, 93.32, 94.52, 95.54, 96.41, 97.13, 97.73,
                        98.21, 98.61, 98.93, 99.18, 99.5];
    var p;
    var perc_results = [];

    for (i = 0 ; i < means.length ; i++) {
        var z = (scores[i] - means[i]) / sds[i];
        console.log(z);
        for (a = 0; a < z_scores.length; a++) {
            if (z_scores[a] >= z) {
                p = percentiles[a];
                break;
            }
        }
        perc_results.push(p);
    }
    
    console.log(perc_results);
    // Trait scores
    document.getElementById("OTE").innerHTML = "Openess to Experience: " + openness + "% - " + perc_results[0] + " Percentile";
    document.getElementById("int").innerHTML = "Intellectual Curiosity: " + int + "% - " + perc_results[5] + " Percentile";
    document.getElementById("opn").innerHTML = "Unconventionality: " + opn + "% - " + perc_results[6] + " Percentile";
    document.getElementById("CON").innerHTML = "Conscientiousness: " + conscientiousness + "% - " + perc_results[1] + " Percentile";
    document.getElementById("ind").innerHTML = "Industriousness: " + ind + "% - " + perc_results[7] + " Percentile";
    document.getElementById("ord").innerHTML = "Orderliness: " + ord + "% - " + perc_results[8] + " Percentile";
    document.getElementById("EXT").innerHTML = "Extraversion: " + extraversion + "% - " + perc_results[2] + " Percentile";
    document.getElementById("ent").innerHTML = "Enthusiasm: " + ent + "% - " + perc_results[9] + " Percentile";
    document.getElementById("asr").innerHTML = "Assertiveness: " + asr + "% - " + perc_results[10] + " Percentile";
    document.getElementById("AGR").innerHTML = "Agreeableness: " + agreeableness + "% - " + perc_results[3] + " Percentile";
    document.getElementById("com").innerHTML = "Compassion: " + com + "% - " + perc_results[11] + " Percentile";
    document.getElementById("pol").innerHTML = "Politeness: " + pol + "% - " + perc_results[12] + " Percentile";
    document.getElementById("NEU").innerHTML = "Neuroticism: " + neuroticism + "% - " + perc_results[4] + " Percentile";
    document.getElementById("wtd").innerHTML = "Negative Affect: " + wtd + "% - " + perc_results[13] + " Percentile";
    document.getElementById("vol").innerHTML = "Emotional Instability: " + vol + "% - " + perc_results[14] + " Percentile";

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

    // SLOAN
    var s;
    var l;
    var o;
    var a;
    var n;

    var res = (100-extraversion);
    var cal = (100-neuroticism);
    var uns = (100-conscientiousness);
    var ego = (100-agreeableness);
    var non = (100-openness);

    var primary;

    if (extraversion >= 50) {
        s = "S";
    }
    else if (extraversion < 50) {
        s = "R";
    }

    if (neuroticism >= 50) {
        l = "L";
    }
    else if (neuroticism < 50) {
        l = "C";
    }

    if (conscientiousness >= 50) {
        o = "O";
    }
    else if (conscientiousness < 50) {
        o = "U";
    }

    if (agreeableness >= 50) {
        a = "A";
    }
    else if (agreeableness < 50) {
        a = "E";
    }

    if (openness >= 50) {
        n = "I";
    }
    else if (openness < 50) {
        n = "N";
    }

    if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == openness) {
        primary = "Inquisitive";
    }
    else if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == conscientiousness) {
        primary = "Organized";
    }
    else if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == extraversion) {
        primary = "Social";
    }
    else if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == agreeableness) {
        primary = "Accommodating";
    }
    else if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == neuroticism) {
        primary = "Limbic";
    }
    else if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == non) {
        primary = "Noncurious";
    }
    else if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == uns) {
        primary = "Unstructured";
    }
    else if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == res) {
        primary = "Reserved";
    }
    else if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == ego) {
        primary = "Egocentric";
    }
    else if (Math.max(openness, conscientiousness, extraversion, agreeableness, neuroticism, res, cal, uns, ego, non) == cal) {
        primary = "Calm";
    }

    document.getElementById("sloan").innerHTML = "SLOAN notation: " + s + l + o + a + n + " - " + primary;

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
        document.getElementById("ind_desc").innerHTML = "While you may not be the hardest worker, you still like to get things done. You think being productive is important, but it is not the number one focus for you."
    }
    else {
        document.getElementById("ind_desc").innerHTML = "You are more of an easygoing person, and you may procrastinate pretty often. You tend to prefer play and relaxation over work and you may be prone to wasting time with unproductive pursuits."
    }

    if (ord > 70) {
        document.getElementById("ord_desc").innerHTML = "You highly appreciate structure and organization. You make decisions very carefully and you care a lot about even the tiniest details. You prefer planning in advance, and you may be a perfectionist as well."
    }
    else if (ord > 30) {
        document.getElementById("ord_desc").innerHTML = "You may very well be organized, but you have your messy moments too. You are not the most spontaneous person, but you are not uptight or rigid either."
    }
    else {
        document.getElementById("ord_desc").innerHTML = "You have a tendency to be quite disorderly. You may have a hard time planning and considering the details. You tend to dislike overly structured environments. You may also be adaptable and spontaneous."
    }

    if (ent > 70) {
        document.getElementById("ent_desc").innerHTML = "You are a person full of enthusiasm and joy. You feel energized by social interactions, and you may be considered as the life of the party. You are also highly playful and enjoy making new friends. You tend to express your emotions easily, especially the positive emotions."
    }
    else if (ent > 30) {
        document.getElementById("ent_desc").innerHTML = "You can be interested in social gatherings, but you also have a good desire for alone time. You easily balance moments of enthusiasm with moments of quiet focus."
    }
    else {
        document.getElementById("ent_desc").innerHTML = "You generally prefer alone time over being with people, and you may be seen as a reserved and serious person. You are generally quiet and you don't really pursue making new friends. You also tend to avoid loud social events."
    }

    if (asr > 70) {
        document.getElementById("asr_desc").innerHTML = "You are the type of person who takes charge and directs other people. You take control things quickly, and you tend to enjoy multitasking. You may be considered as dominant and persuasive, but also overwhelming for some people."
    }
    else if (asr > 30) {
        document.getElementById("asr_desc").innerHTML = "You have a moderate level of assertiveness in social situations. While you are not the most dominant, you are not that meek either. Generally, you take charge when the situation needs you to take charge."
    }
    else {
        document.getElementById("asr_desc").innerHTML = "You generally prefer letting others take charge. You tend to dislike most leadership roles, and you would be happy with a passive or supportive role. You may be better off working behind-the-scenes."
    }

    if (com > 70) {
        document.getElementById("com_desc").innerHTML = "You have a deep compasion and soft heart for other people. You frequently consider others' feelings while making decisions. You are sensitive and easily affected by others' tragedies. You tend to put other people's needs above your needs because you are sensitive to other people's needs."
    }
    else if (com > 30) {
        document.getElementById("com_desc").innerHTML = "While you generally care about other people, you also favor more rational and justice-oriented approaches in certain situations. While you may be a helpful person, you tend to consider your own needs before helping other people."
    }
    else {
        document.getElementById("com_desc").innerHTML = "You tend to be on the tough-minded side of the spectrum. You tend to be far more conderned about your own needs rather than other people's. You may not be as affected by other people's negative feelings. You may also think that emotions are for the weak."
    }

    if (pol > 70) {
        document.getElementById("pol_desc").innerHTML = "You care a lot about peace and cooperation, and you do whatever it takes to preserve a harmonious atmosphere. You heavily favor collaboration over competition, and you dislike fighting with others. You may be considered as conflict-avoidant. You are generally humble and dislike showing off."
    }
    else if (pol > 30) {
        document.getElementById("pol_desc").innerHTML = "While you may occassionally enjoy a good fight or competition, you don't want things to go too far. You are not a very arrogant or manipulative person, but you are not a pushover either. You find a balance between keeping social harmony and going for what you really want."
    }
    else {
        document.getElementById("pol_desc").innerHTML = "You may be prone to do things for your own personal gain. You are not afraid to show off or admit that you are a superior person. You are willing to fight or compete in order to get what you want. You prefer challenging others rather than smoothing the things out."
    }

    if (wtd > 70) {
        document.getElementById("wtd_desc").innerHTML = "You may easily feel anxious or doubtful in a wide range of situations. You tend to perceive danger before anyone else does. When something bad happens, you may easily feel discouraged. You are generally in touch with your negative feelings."
    }
    else if (wtd > 30) {
        document.getElementById("wtd_desc").innerHTML = "You may have occassional moments of worry but they don't really overwhelm you. You look at things from a balanced perspective, neither too positive nor too negative. While you may have negative moments, you are not a very pessimistic person."
    }
    else {
        document.getElementById("wtd_desc").innerHTML = "You are likely to be extraordinarily confident and calm in crisis situations. You don't feel anxious or discouraged in situations where others feel more overwhelmed. You may be somewhat prone to overconfidence and being unwilling to consider dangers."
    }

    if (vol > 70) {
        document.getElementById("vol_desc").innerHTML = "You may be somewhat of an emotional rollercoaster. You have highly changeable feelings, sometimes explosive even. You are somewhat prone to impatience and irritability when things go haywire. You generally prefer letting emotions run wild and free rather than controlling your reactions."
    }
    else if (vol > 30) {
        document.getElementById("vol_desc").innerHTML = "While you wouldn't be the most emotionally stable person, you do not have explosive feelings either. Setbacks can be somewhat annoying, but you don't get very upset or enraged. You have some level of control over your feelings."
    }
    else {
        document.getElementById("vol_desc").innerHTML = "You are generally an emotionally stable person, controlled in reactions. Setbacks do not annoy or irritate you that much. You are generally patient and can take a lot of beating before getting angry. You may also be somewhat prone to apathy."
    }

    // Strengths and weaknesses
    if (int > 70) {
        document.getElementById("int_st").innerHTML = "Curiosity and learning"
        document.getElementById("int_we").innerHTML = "Overcomplicates things"
    }
    else if (int < 30) {
        document.getElementById("int_st").innerHTML = "Concrete and practical"
        document.getElementById("int_we").innerHTML = "Simple-mindedness"
    }

    if (opn > 70) {
        document.getElementById("opn_st").innerHTML = "Creative and adventurous"
        document.getElementById("opn_we").innerHTML = "Impractical and eccentric"
    }
    else if (opn < 30) {
        document.getElementById("opn_st").innerHTML = "Grounded and realistic"
        document.getElementById("opn_we").innerHTML = "Closed to novelty"
    }

    if (ind > 70) {
        document.getElementById("ind_st").innerHTML = "Ambition and drive"
        document.getElementById("ind_we").innerHTML = "Prone to workaholism"
    }
    else if (ind < 30) {
        document.getElementById("ind_st").innerHTML = "Easygoing and takes easy"
        document.getElementById("ind_we").innerHTML = "Master procrastinator"
    }

    if (ord > 70) {
        document.getElementById("ord_st").innerHTML = "Structured and planful"
        document.getElementById("ord_we").innerHTML = "Uptight and rigid"
    }
    else if (ord < 30) {
        document.getElementById("ord_st").innerHTML = "Adaptable and spontaneous"
        document.getElementById("ord_we").innerHTML = "Disorganized and careless"
    }

    if (ent > 70) {
        document.getElementById("ent_st").innerHTML = "Sociable and joyful"
        document.getElementById("ent_we").innerHTML = "Can't handle alone time"
    }
    else if (ent < 30) {
        document.getElementById("ent_st").innerHTML = "Quietly focused"
        document.getElementById("ent_we").innerHTML = "Distant and reserved"
    }

    if (asr > 70) {
        document.getElementById("asr_st").innerHTML = "Good leader and influential"
        document.getElementById("asr_we").innerHTML = "Overwhelming for some people"
    }
    else if (asr < 30) {
        document.getElementById("asr_st").innerHTML = "Behind-the-scenes worker"
        document.getElementById("asr_we").innerHTML = "Submissive and meek"
    }

    if (com > 70) {
        document.getElementById("com_st").innerHTML = "Sympathetic and helpful"
        document.getElementById("com_we").innerHTML = "Overly sensitive to others"
    }
    else if (com < 30) {
        document.getElementById("com_st").innerHTML = "Tough-minded and rational"
        document.getElementById("com_we").innerHTML = "Selfish and insensitive"
    }

    if (pol > 70) {
        document.getElementById("pol_st").innerHTML = "Cooperative and humble"
        document.getElementById("pol_we").innerHTML = "Can be a doormat"
    }
    else if (pol < 30) {
        document.getElementById("pol_st").innerHTML = "Strong willpower"
        document.getElementById("pol_we").innerHTML = "Prone to fighting"
    }

    if (wtd > 70) {
        document.getElementById("wtd_st").innerHTML = "Senses danger before anyone else"
        document.getElementById("wtd_we").innerHTML = "Prone to doubt and worry"
    }
    else if (wtd < 30) {
        document.getElementById("wtd_st").innerHTML = "Confident without much doubt"
        document.getElementById("wtd_we").innerHTML = "Prone to overconfidence"
    }

    if (vol > 70) {
        document.getElementById("vol_st").innerHTML = "Emotionally dynamic and passionate"
        document.getElementById("vol_we").innerHTML = "Impatient and volatile"
    }
    else if (vol < 30) {
        document.getElementById("vol_st").innerHTML = "Stable and controlled"
        document.getElementById("vol_we").innerHTML = "Prone to apathy"
    }


    // Compound traits
    document.getElementById("pls").innerHTML = "Plasticity: " + pls + "%";
    document.getElementById("stab").innerHTML = "Stability: " + stab + "%";
    document.getElementById("vit").innerHTML = "Vitality: " + vit + "%";
    document.getElementById("mat").innerHTML = "Materialism: " + mat + "%";
    document.getElementById("ap").innerHTML = "Type A Personality: " + ap + "%";
    document.getElementById("ss").innerHTML = "Sensation-Seeking: " + ss + "%";
    document.getElementById("at").innerHTML = "Attention-Seeking: " + at + "%";
    document.getElementById("pop").innerHTML = "Popularity: " + pop + "%";
    document.getElementById("spk").innerHTML = "Spunkiness: " + spk + "%";
    document.getElementById("rad").innerHTML = "Radioactivity: " + rad + "%";
    document.getElementById("intro").innerHTML = "Introspection: " + intro + "%";
    document.getElementById("sen").innerHTML = "Sensitivity: " + sen + "%";
    document.getElementById("mr").innerHTML = "Maturity: " + mr + "%";
    document.getElementById("myst").innerHTML = "Mysteriousness: " + myst + "%";
    document.getElementById("act").innerHTML = "Activity: " + act + "%";
    document.getElementById("lib").innerHTML = "Liberalism: " + lib + "%";

    document.getElementById("bar_pls").style.width = pls + "%";
    document.getElementById("bar_stab").style.width = stab + "%";
    document.getElementById("bar_vit").style.width = vit + "%";
    document.getElementById("bar_mat").style.width = mat + "%";
    document.getElementById("bar_ap").style.width = ap + "%";
    document.getElementById("bar_ss").style.width = ss + "%";
    document.getElementById("bar_at").style.width = at + "%";
    document.getElementById("bar_pop").style.width = pop + "%";
    document.getElementById("bar_spk").style.width = spk + "%";
    document.getElementById("bar_rad").style.width = rad + "%";
    document.getElementById("bar_intro").style.width = intro + "%";
    document.getElementById("bar_sen").style.width = sen + "%";
    document.getElementById("bar_mr").style.width = mr + "%";
    document.getElementById("bar_myst").style.width = myst + "%";
    document.getElementById("bar_act").style.width = act + "%";
    document.getElementById("bar_lib").style.width = lib + "%";

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

    // MBTI and Enneagram

    var Se = Math.round((ent + asr + (100-int) + (100-ord)) / 4 * 100) / 100;
    var Si = Math.round((ind + 2*ord + (100-int) + 2*(100-opn) + (100-ent) + (100-asr)) / 8 * 100) / 100;
    var Ne = Math.round((2*int + 2*opn + 2*(100-ord) + 2*ent + asr + (100-ind)) / 10 * 100) / 100;
    var Ni = Math.round((2*int + ind + ord + (100-ent) + (100-asr)) / 6 * 100) / 100;
    var Te = Math.round((2*ind + 2*ord + 2*asr + int + (100-opn) + (100-com) + (100-pol)) / 10 * 100) / 100;
    var Ti = Math.round((2*int + 2*(100-ent) + ord + (100-ind) + (100-asr) + (100-com) + (100-pol)) / 9 * 100) / 100;
    var Fe = Math.round((2*com + 2*ent + ind + ord + asr + pol + (100-int)) / 9 * 100) / 100;
    var Fi = Math.round((2*(100-ord) + 2*(100-ent) + 2*(100-asr) + (100-ind) + opn + com + pol) / 10 * 100) / 100;

    document.getElementById("Se").innerHTML = "Extraverted Sensation: " + Se ;
    document.getElementById("Si").innerHTML = "Introverted Sensation: " + Si ;
    document.getElementById("Ne").innerHTML = "Extraverted Intuition: " + Ne ;
    document.getElementById("Ni").innerHTML = "Introverted Intuition: " + Ni ;
    document.getElementById("Te").innerHTML = "Extraverted Thinking: " + Te ;
    document.getElementById("Ti").innerHTML = "Introverted Thinking: " + Ti ;
    document.getElementById("Fe").innerHTML = "Extraverted Feeling: " + Fe ;
    document.getElementById("Fi").innerHTML = "Introverted Feeling: " + Fi ;

    document.getElementById("bar_Se").style.width = Se  + "%";
    document.getElementById("bar_Si").style.width = Si  + "%";
    document.getElementById("bar_Ne").style.width = Ne  + "%";
    document.getElementById("bar_Ni").style.width = Ni  + "%";
    document.getElementById("bar_Te").style.width = Te  + "%";
    document.getElementById("bar_Ti").style.width = Ti  + "%";
    document.getElementById("bar_Fe").style.width = Fe  + "%";
    document.getElementById("bar_Fi").style.width = Fi  + "%";

    var one = Math.round((2*(100-opn) + 2*ind + 2*ord + asr + pol + vol) / 9 * 100) / 100;
    var two = Math.round((2*(100-int) + ind + 2*ent + asr + 2*com + (100-vol)) / 9 * 100) / 100;
    var three = Math.round((2*ind + 2*asr + ord + ent + (100-int) + (100-com) + (100-wtd) + 2*(100-pol)) / 11 * 100) / 100;
    var four = Math.round((int + 2*opn + 2*(100-ind) + 2*(100-ord) + (100-ent) + (100-asr) + com + (100-pol) + 2*wtd + vol) / 14 * 100) / 100;
    var five = Math.round((2*int + opn + (100-ind) + 2*(100-ent) + 2*(100-asr) + 2*(100-com) + (100-pol) + wtd + (100-vol)) / 13 * 100) / 100;
    var six = Math.round((2*wtd + int + ind + ord + pol + vol) / 7 * 100) / 100;
    var seven = Math.round((int + 2*opn + 2*ent + asr + 2*(100-ind) + 2*(100-ord) + (100-pol) + (100-wtd)) / 12 * 100) / 100;
    var eight = Math.round(((100-int) + 2*ind + 2*asr + vol + 2*(100-wtd) + 2*(100-pol) + (100-com)) / 11 * 100) / 100;
    var nine = Math.round((2*com + 2*pol + (100-int) + 2*(100-ind) + (100-ord) + 2*(100-asr) + (100-vol)) / 11 * 100) / 100;

    document.getElementById("one").innerHTML = "Type 1: " + one  + "%";
    document.getElementById("two").innerHTML = "Type 2: " + two  + "%";
    document.getElementById("three").innerHTML = "Type 3: " + three  + "%";
    document.getElementById("four").innerHTML = "Type 4: " + four  + "%";
    document.getElementById("five").innerHTML = "Type 5: " + five  + "%";
    document.getElementById("six").innerHTML = "Type 6: " + six  + "%";
    document.getElementById("seven").innerHTML = "Type 7: " + seven  + "%";
    document.getElementById("eight").innerHTML = "Type 8: " + eight  + "%";
    document.getElementById("nine").innerHTML = "Type 9: " + nine  + "%";

    document.getElementById("bar_1").style.width = one  + "%";
    document.getElementById("bar_2").style.width = two  + "%";
    document.getElementById("bar_3").style.width = three  + "%";
    document.getElementById("bar_4").style.width = four  + "%";
    document.getElementById("bar_5").style.width = five  + "%";
    document.getElementById("bar_6").style.width = six  + "%";
    document.getElementById("bar_7").style.width = seven  + "%";
    document.getElementById("bar_8").style.width = eight  + "%";
    document.getElementById("bar_9").style.width = nine  + "%";

    // Alignment

    var chaotic = (3*opn + 3*(100-ord) + (100-pol) + (100-ind) + 2*vol) / 10;
    var good = (3*com + 3*pol + (100-asr) + (100-vol))/8;

    var c = chaotic + "%";
    var g = good + "%";

    document.getElementById("point_align").style.bottom = g;
    document.getElementById("point_align").style.left = c;

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




