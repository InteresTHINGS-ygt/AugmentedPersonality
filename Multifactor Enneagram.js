var current_question = -1;
var score = 0;

var one = 24;
var two = 24;
var three = 24;
var four = 24;
var five = 24;
var six = 24;
var seven = 24;
var eight = 24;
var nine = 24;
// Type scores are between 0 and 48

var body = 0;
var heart = 0;
var head = 0;
var react = 0;
var pos = 0;
var comp = 0;
var attach = 0;
var fru = 0;
var rej = 0;
var sup = 0;
var asr = 0;
var wtd = 0;
var light = 0;
var dark = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = ["I am more likely to help others because...",
                        "I am more likely to get things done...",
                        "I am am more likely to be self-critical because...",
                        "I am more likely to gather information...",
                        "I am more likely to follow the rules because...",
                        "My idealism is more like...",
                        "I am more likely to express my anger when I...",
                        "I am more likely to be...",
                        "I am more likely to get my attention through...",
                        "I am more likely to be focused on...",
                        "I am more likely to be...",
                        "I am more likely to help others because...",
                        "I am more likely to...",
                        "I am more likely to manipulate others through...",
                        "I am more likely to...",
                        "Others more often need to see my...",
                        "I am more likely to focus on the...",
                        "I am more likely to be focused on...",
                        "I am more likely to...",
                        "I am more likely to be...",
                        "I am more likely to be focused on...",
                        "I am more likely to be...",
                        "I am more likely to have a/an...",
                        "When I feel disappointed, I am more likely to...",
                        "I am more likely to...",
                        "I am more likely to be...",
                        "I am more likely to...",
                        "I am more likely to be...",
                        "I tend to be more...",
                        "I am more about...",
                        "I am more likely to...",
                        "When it comes to fear,  I am more likely to...",
                        "When things go haywire, I am more likely to...",
                        "I am more likely to seek...",
                        "I am more likely to...",
                        "My sense of stability is more like..."];

    var statement_1 = ["It's the morally right thing to do (focus on right/wrong)",
                        "The right way, even if it is slower",
                        "I have done something morally wrong",
                        "To improve and perfect the world, for practical purpose",
                        "It's morally wrong to break them (focus on internal standards)",
                        "Perfection, there cannot be any mistakes",
                        "Should, repressing anything else",
                        "Too perfectionistic and rigid",
                        "Giving to others so I feel loved",
                        "Others' feelings, as I need to take care of them",
                        "Too willing to give to others and express",
                        "I am confident about what the other person needs, and to feel needed",
                        "Feel obligated to help, I tend to put others' needs over my own needs",
                        "Flattery and compliments",
                        "Know what others want, so I can directly help them",
                        "Image of success, I need to be impressive even if I hide the real me",
                        "Final result, I need to achieve my goals",
                        "How I appear to others, am I impressive or not?",
                        "Play to win (focus on the result)",
                        "A polished image of success and fame",
                        "Ambition and getting things done",
                        "Involved with my own feelings to understand myself and craft my identity",
                        "Very strong sense of self, based on inner emotional experience",
                        "Complain that I will never get what I need",
                        "Feel like I am full of vulnerability",
                        "Emotionally intense, I need to fully experience the highs and lows",
                        "Trust only my mind, as others are less informed",
                        "Focused and detached, I need to feel competent",
                        "Cerebral, I need to think things through before acting",
                        "Contrasts, fine details, detachment, focused mental activity",
                        "Vividly imagine worst-case scenarios",
                        "Recognize my fears, so I can defeat them",
                        "Worry or overthink more than I should",
                        "Variety, I don't want to miss out on pleasure",
                        "Seek what I want, as I know what I need for my enjoyment",
                        "Actively controlling my environment, as I need to feel strong"];

    var statement_2 = ["I have to take care of others’ feelings (focus on others' feelings)",
                        "The most efficient way, even if it cuts corners",
                        "I feel inferior to others as I tend to envy others",
                        "For the sake of it, for my own competence",
                        "Bad things can happen if I break them (focus on worst case scenario)",
                        "Optimism, as negativity is too painful",
                        "Want to, without rules or restrictions",
                        "Too lax and unproductive",
                        "Being the best so I feel valuable",
                        "My own feelings, as I explore them in depth",
                        "Too private and emotionally detached",
                        "I need to feel protected and safe, so I want to be supported",
                        "Feel limited by responsibility, I need my freedom and I help when I want to",
                        "Power and force",
                        "Go along with other people's desires in order to keep harmony",
                        "Real self, I need to show the real me even if I feel broken",
                        "Process, I need to understand the world",
                        "Avoiding bad consequences, am I safe or not?",
                        "Play to have fun (focus on the pleasure)",
                        "A raw showcase of strength and power",
                        "Relaxation and inner peace of mind",
                        "Detached from feelings in order to understand the world and how things work",
                        "Wavering sense of self, I do a lot of “it depends on the situation”",
                        "Move on to the new, better things",
                        "Avoid vulnerability in order to feel stronger",
                        "Emotionally calm, I need to feel peaceful and relaxed",
                        "Struggle trusting my mind, as the world is uncertain",
                        "Expansive and variety-seeking, I need to feel satisfied",
                        "Physical, I tend to act readily and instinctively",
                        "Similarities, harmony, comfort, drifting mental activity",
                        "Believe that things will work for the best",
                        "Deny my fears, so I feel stronger",
                        "Downplay the importance of the problem",
                        "Intensity, I need to feel powerful",
                        "Go along with what others want, as I need to keep the peace",
                        "Having inner peace and even-keeled attitude, as I need to feel comfortable"];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block";
        document.getElementById("start").style.display = "none";
    }
    
    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    document.getElementById("statement_1").innerHTML = statement_1[current_question];
    document.getElementById("statement_2").innerHTML = statement_2[current_question];

    
    if (current_question == 1) {
        one -= score;
        two += score;
    }
    else if (current_question == 2) {
        one -= score;
        three += score;
    }
    else if (current_question == 3) {
        one -= score;
        four += score;
    }
    else if (current_question == 4) {
        one -= score;
        five += score;
    }
    else if (current_question == 5) {
        one -= score;
        six += score;
    }
    else if (current_question == 6) {
        one -= score;
        seven += score;
    }
    else if (current_question == 7) {
        one -= score;
        eight += score;
    }
    else if (current_question == 8) {
        one -= score;
        nine += score;
    }
    else if (current_question == 9) {
        two -= score;
        three += score;
    }
    else if (current_question == 10) {
        two -= score;
        four += score;
    }
    else if (current_question == 11) {
        two -= score;
        five += score;
    }
    else if (current_question == 12) {
        two -= score;
        six += score;
    }
    else if (current_question == 13) {
        two -= score;
        seven += score;
    }
    else if (current_question == 14) {
        two -= score;
        eight += score;
    }
    else if (current_question == 15) {
        two -= score;
        nine += score;
    }
    else if (current_question == 16) {
        three -= score;
        four += score;
    }
    else if (current_question == 17) {
        three -= score;
        five += score;
    }
    else if (current_question == 18) {
        three -= score;
        six += score;
    }
    else if (current_question == 19) {
        three -= score;
        seven += score;
    }
    else if (current_question == 20) {
        three -= score;
        eight += score;
    }
    else if (current_question == 21) {
        three -= score;
        nine += score;
    }
    else if (current_question == 22) {
        four -= score;
        five += score;
    }
    else if (current_question == 23) {
        four -= score;
        six += score;
    }
    else if (current_question == 24) {
        four -= score;
        seven += score;
    }
    else if (current_question == 25) {
        four -= score;
        eight += score;
    }
    else if (current_question == 26) {
        four -= score;
        nine += score;
    }
    else if (current_question == 27) {
        five -= score;
        six += score;
    }
    else if (current_question == 28) {
        five -= score;
        seven += score;
    }
    else if (current_question == 29) {
        five -= score;
        eight += score;
    }
    else if (current_question == 30) {
        five -= score;
        nine += score;
    }
    else if (current_question == 31) {
        six -= score;
        seven += score;
    }
    else if (current_question == 32) {
        six -= score;
        eight += score;
    }
    else if (current_question == 33) {
        six -= score;
        nine += score;
    }
    else if (current_question == 34) {
        seven -= score;
        eight += score;
    }
    else if (current_question == 35) {
        seven -= score;
        nine += score;
    }
    else if (current_question == 36) {
        eight -= score;
        nine += score;
    }
    

    if (current_question > (statement_1.length - 1)) {
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Type Scores";

        body = (eight + nine + one) / 3;
        heart = (two + three + four) / 3;
        head = (five + six + seven) / 3;
        react = (four + six + eight) / 3;
        pos = (two + seven + nine) / 3;
        comp = (one + three + five) / 3;
        attach = (three + six + nine) / 3;
        fru = (one + four + seven) / 3;
        rej = (two + five + eight) / 3;
        sup = (one + two + six) / 3;
        asr = (three + seven + eight) / 3;
        wtd = (four + five + nine) / 3;
        light = (one + two + seven) / 3;
        dark = (four + five + eight) / 3;

        get_result();
    }
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("triads").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("statement_1").style.display = "none";
    document.getElementById("statement_2").style.display = "none";
    document.getElementById("one").innerHTML = "Type 1: " + Math.round(one / 48 * 10000) / 100 + "%";
    document.getElementById("two").innerHTML = "Type 2: " + Math.round(two / 48 * 10000) / 100 + "%";
    document.getElementById("three").innerHTML = "Type 3: " + Math.round(three / 48 * 10000) / 100 + "%";
    document.getElementById("four").innerHTML = "Type 4: " + Math.round(four / 48 * 10000) / 100 + "%";
    document.getElementById("five").innerHTML = "Type 5: " + Math.round(five / 48 * 10000) / 100 + "%";
    document.getElementById("six").innerHTML = "Type 6: " + Math.round(six / 48 * 10000) / 100 + "%";
    document.getElementById("seven").innerHTML = "Type 7: " + Math.round(seven / 48 * 10000) / 100 + "%";
    document.getElementById("eight").innerHTML = "Type 8: " + Math.round(eight / 48 * 10000) / 100 + "%";
    document.getElementById("nine").innerHTML = "Type 9: " + Math.round(nine / 48 * 10000) / 100 + "%";

    document.getElementById("bar_1").style.width = Math.round(one / 48 * 10000) / 100 + "%";
    document.getElementById("bar_2").style.width = Math.round(two / 48 * 10000) / 100 + "%";
    document.getElementById("bar_3").style.width = Math.round(three / 48 * 10000) / 100 + "%";
    document.getElementById("bar_4").style.width = Math.round(four / 48 * 10000) / 100 + "%";
    document.getElementById("bar_5").style.width = Math.round(five / 48 * 10000) / 100 + "%";
    document.getElementById("bar_6").style.width = Math.round(six / 48 * 10000) / 100 + "%";
    document.getElementById("bar_7").style.width = Math.round(seven / 48 * 10000) / 100 + "%";
    document.getElementById("bar_8").style.width = Math.round(eight / 48 * 10000) / 100 + "%";
    document.getElementById("bar_9").style.width = Math.round(nine / 48 * 10000) / 100 + "%";

    document.getElementById("body").innerHTML = "Body / Anger: " + Math.round(body / 48 * 10000) / 100 + "%";
    document.getElementById("heart").innerHTML = "Heart / Shame: " + Math.round(heart / 48 * 10000) / 100 + "%";
    document.getElementById("head").innerHTML = "Head / Anxiety: " + Math.round(head / 48 * 10000) / 100 + "%";
    document.getElementById("reactive").innerHTML = "Reactive: " + Math.round(react / 48 * 10000) / 100 + "%";
    document.getElementById("positive").innerHTML = "Positive Outlook: " + Math.round(pos / 48 * 10000) / 100 + "%";
    document.getElementById("competency").innerHTML = "Competency: " + Math.round(comp / 48 * 10000) / 100 + "%";
    document.getElementById("attachment").innerHTML = "Attachment: " + Math.round(attach / 48 * 10000) / 100 + "%";
    document.getElementById("frustration").innerHTML = "Frustration: " + Math.round(fru / 48 * 10000) / 100 + "%";
    document.getElementById("rejection").innerHTML = "Rejection: " + Math.round(rej / 48 * 10000) / 100 + "%";
    document.getElementById("superego").innerHTML = "Superego: " + Math.round(sup / 48 * 10000) / 100 + "%";
    document.getElementById("assertive").innerHTML = "Assertive: " + Math.round(asr / 48 * 10000) / 100 + "%";
    document.getElementById("withdrawn").innerHTML = "Withdrawn: " + Math.round(wtd / 48 * 10000) / 100 + "%";
    document.getElementById("light").innerHTML = "Light Hexad: " + Math.round(light / 48 * 10000) / 100 + "%";
    document.getElementById("dark").innerHTML = "Dark Hexad: " + Math.round(dark / 48 * 10000) / 100 + "%";

    document.getElementById("bar_body").style.width = Math.round(body / 48 * 10000) / 100 + "%";
    document.getElementById("bar_heart").style.width = Math.round(heart / 48 * 10000) / 100 + "%";
    document.getElementById("bar_head").style.width = Math.round(head / 48 * 10000) / 100 + "%";
    document.getElementById("bar_reactive").style.width = Math.round(react / 48 * 10000) / 100 + "%";
    document.getElementById("bar_positive").style.width = Math.round(pos / 48 * 10000) / 100 + "%";
    document.getElementById("bar_competency").style.width = Math.round(comp / 48 * 10000) / 100 + "%";
    document.getElementById("bar_attachment").style.width = Math.round(attach / 48 * 10000) / 100 + "%";
    document.getElementById("bar_frustration").style.width = Math.round(fru / 48 * 10000) / 100 + "%";
    document.getElementById("bar_rejection").style.width = Math.round(rej / 48 * 10000) / 100 + "%";
    document.getElementById("bar_superego").style.width = Math.round(sup / 48 * 10000) / 100 + "%";
    document.getElementById("bar_assertive").style.width = Math.round(asr / 48 * 10000) / 100 + "%";
    document.getElementById("bar_withdrawn").style.width = Math.round(wtd / 48 * 10000) / 100 + "%";
    document.getElementById("bar_light").style.width = Math.round(light / 48 * 10000) / 100 + "%";
    document.getElementById("bar_dark").style.width = Math.round(dark / 48 * 10000) / 100 + "%";
}




