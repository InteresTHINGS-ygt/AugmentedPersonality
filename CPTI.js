var current_question = -1;
var score = 0;

var Se_d = 0;
var Si_d = 0;
var Ne_d = 0;
var Ni_d = 0;
var Te_d = 0;
var Ti_d = 0;
var Fe_d = 0;
var Fi_d = 0;

var Se_a = 0;
var Si_a = 0;
var Ne_a = 0;
var Ni_a = 0;
var Te_a = 0;
var Ti_a = 0;
var Fe_a = 0;
var Fi_a = 0;

var ENFJ = 0;
var ENFP = 0;
var ENTJ = 0;
var ENTP = 0;
var ESFJ = 0;
var ESFP = 0;
var ESTJ = 0;
var ESTP = 0;
var INFJ = 0;
var INFP = 0;
var INTJ = 0;
var INTP = 0;
var ISFJ = 0;
var ISFP = 0;
var ISTJ = 0;
var ISTP = 0;

var test_status = 0;

function buttonclick(score) {
    var questions = ["Tries to maximize the pleasure of the moment","Realistic, present, opportunistic","Humor often involves practical jokes, based on present details","Tends to be very pragmatic, adapting to the moment","Carpe diem approach to life, not much future planning","Often physically bold and stimulation-seeking","Focused on doing what's needed and their duties","Generally sticks with what they know, does not branch out too much","Appears level-headed and grounded even if actually stressed inside","Routine-oriented and predictable, usually follows the rules","Can focus on one thing for a long time and master it","Highly focused on sensory maintenance and self-care","Tends to have many interests, even if unrelated","Generally talkative and referencing, prone to changing topics","May be forgetful, yet remember random things","Gives off exotic vibes, usually bold with ideas","Enjoys new challenges with mental stimulation","Dislikes too much structure and limitations, explores possibilities","Trusts their sixth sense and intuition, flashes of insight","Mystical vibes from them, drawn to the mysterious and unconscious world","Seeks and harbors hidden meanings and impressions","Can be intense and predictive, like a fortune teller","Has a laser-focus vision for the far future, struggles living in the moment","Big-picture oriented, does not really remember the details","Busy and hardworking types, does not waste time","Very goal and result-oriented, a to-do list for every day","Life is soup, I am a spoon attitude, confidence about abilities","Can be reactive but they focus on goals instead","Generally more focused on efficiency than formality","Finds practical solutions wherever they go","Needs to logically justify their decisions","Lives according to their own logical principles and frameworks","Can be accidentally rude, may miss social cues, truth over tact","Learns things for the sake of it, wants to know how things work","May have outbursts due to emotional detachment","Everything needs to make logical sense for them","Highly community catering types","Focused on the emotional atmosphere","Group-oriented, tries to get along with others, pursues unity","Often actively helping others and resolving conflicts","Tends to give emotional support rather than practical solutions","Confident about other people's feelings and helping them","Puts a lot of value on being themselves and honesty","Expresses feelings in indirect ways","Often naturally stands out from others, lives according to their own values","May give melancholic vibes, emotionally intense","Empathetic in a one-to-one manner","No real need to logically justify their value-based decisions","Easygoing and takes in the moment as it is","Can have a subtle idealistic or intellectual side","Wants to do something physical even if reserved","More group-oriented than individualistic, actively responsible","Generally keen on organizing, directing, and being a part of something bigger","Can have a secret experimental side to them","Very individualistic and unique","Talkative in regards to areas of interest","Can be reminiscent or nostalgic, valuing comfort","Vigorously works towards achieving visions","Decisive with their goals and predictions","Generally active and working towards something","A sense of quiet confidence and steady drive","Not expressive or impressionable, tends to be stubborn","Strong personal values without overthinking it","Bold in general, physically or mentally","Can be purposefully provocative, debating or persuading","Appears highly charismatic and charming","Prefers groups despite being reserved","Very calm, sincere, and humble","May enjoy finding logical patterns in a non-offensive way","Often trying to stand out and expressing themselves in wild ways","Tends to be very emotionally expressive","Can be assertive and productive in bursts of energy"];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    }
d
    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];
    if (current_question < 7){
        Se_d += score;
    }
    else if (current_question < 13){
        Si_d += score;
    }
    else if (current_question < 19){
        Ne_d += score;
    }
    else if (current_question < 25){
        Ni_d += score;
    }
    else if (current_question < 31){
        Te_d += score;
    }
    else if (current_question < 37){
        Ti_d += score;
    }
    else if (current_question < 43){
        Fe_d += score;
    }
    else if (current_question < 49){
        Fi_d += score;
    }
    else if (current_question < 52){
        Se_a += score;
    }
    else if (current_question < 55){
        Si_a += score;
    }
    else if (current_question < 58){
        Ne_a += score;
    }
    else if (current_question < 61){
        Ni_a += score;
    }
    else if (current_question < 64){
        Te_a += score;
    }
    else if (current_question < 67){
        Ti_a += score;
    }
    else if (current_question < 70){
        Fe_a += score;
    }
    else if (current_question < 73){
        Fi_a += score;
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        ENFJ = Fe_d + Ni_a;
        ENFP = Ne_d + Fi_a;
        ENTJ = Te_d + Ni_a;
        ENTP = Ne_d + Ti_a;
        ESFJ = Fe_d + Si_a;
        ESFP = Se_d + Fi_a;
        ESTJ = Te_d + Si_a;
        ESTP = Se_d + Ti_a;
        INFJ = Ni_d + Fe_a;
        INFP = Fi_d + Ne_a;
        INTJ = Ni_d + Te_a;
        INTP = Ti_d + Ne_a;
        ISFJ = Si_d + Fe_a;
        ISFP = Fi_d + Se_a;
        ISTJ = Si_d + Te_a;
        ISTP = Ti_d + Se_a;
        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("ENFJ").innerHTML = "ENFJ: " + ENFJ;
    document.getElementById("ENFP").innerHTML = "ENFP: " + ENFP;
    document.getElementById("ENTJ").innerHTML = "ENTJ: " + ENTJ;
    document.getElementById("ENTP").innerHTML = "ENTP: " + ENTP;
    document.getElementById("ESFJ").innerHTML = "ESFJ: " + ESFJ;
    document.getElementById("ESFP").innerHTML = "ESFP: " + ESFP;
    document.getElementById("ESTJ").innerHTML = "ESTJ: " + ESTJ;
    document.getElementById("ESTP").innerHTML = "ESTP: " + ESTP;
    document.getElementById("INFJ").innerHTML = "INFJ: " + INFJ;
    document.getElementById("INFP").innerHTML = "INFP: " + INFP;
    document.getElementById("INTJ").innerHTML = "INTJ: " + INTJ;
    document.getElementById("INTP").innerHTML = "INTP: " + INTP;
    document.getElementById("ISFJ").innerHTML = "ISFJ: " + ISFJ;
    document.getElementById("ISFP").innerHTML = "ISFP: " + ISFP;
    document.getElementById("ISTJ").innerHTML = "ISTJ: " + ISTJ;
    document.getElementById("ISTP").innerHTML = "ISTP: " + ISTP;

}




