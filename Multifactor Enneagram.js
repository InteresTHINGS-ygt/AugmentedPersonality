var current_question = -1;
var score = 0;

var one = 0;
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
var eight = 0;
var nine = 0;


var test_status = 0;

function buttonclick(score) {
    var questions = [

        "I feel angry and resentful when I fail to meet my perfectionistic standards.", 

        "My critical and fault-finding tendencies has left me in trouble with other people.", 

        "I demand discipline and inhibit spontaneity and pursuit of pleasure.",

        "I am harshly critical of myself and I always strive to be better.",

        "I need rules and structure to function and I am methodical.",

        "I postpone pleasure in order to be more disciplined and hardworking.",

        "I tend to be patronizing when it comes to high standards.",

        "I demand privileges and boost my self-worth by being the center of attention.",

        "My excessively romantic orientation makes me overinvolved in relationships.",

        "I feel the need to be attractive, affectionate, and seductive.",

        "I tend to give to others so I can get the love I need.",

        "I favor my emotions and expressing them way more than my thoughts.",

        "I tend to be histrionic and equate pleasure with being loved.",

        "I can become temperamental when I feel unloved and unneded.",

        "I need to be appreciated, so I only show the best parts of myself to others.",

        "My need for achievement has made me aggressive and ruthless.",

        "I have an easy time marketing myself and getting the attention I need.",

        "I have trouble understanding my true self because of my modified image.",

        "I mirror my environment and thrive on admirations of others.",

        "I control my emotions in order to appear more desirable and achieve more.",

        "I feel empty inside, so I constantly chase accomplishments.",

        "I envy people who live seemingly normal lives but I don’t want to live an ordinary life.",

        "I tend to feel inadequate and inferior to others.",

        "I tend to suffer a lot and I tend to use my suffering to get love and attention from others.",

        "I mix my emotions with intellect in order to make them more meaningful.",

        "I channel my pain into art and beauty, so I can feel more understood.",

        "I feel superior to others who are not as deep and unique as me.",

        "I need to be refined and beautiful, and I attempt to be different than who I am.",

        "I withhold myself from my environment in order to conserve my limited energy.",

        "My detachment from others makes it easier to discard relationships.",

        "I fear being overwhelmed by environment, so I laser-focus on my interests.",

        "I am not connected to my feelings, and I have trouble being emotional without overthinking.",

        "I tend to observe vastly more than I participate fully.",

        "I shield myself from pain because I’m very sensitive to pain.",

        "I replace actually living with reading and understanding the world instead.",

        "I am very conscious of my own anxiety and insecurity.",

        "I need to control myself and the environment in order to feel safe and sound.",

        "I need to know what’s true and possible consequences before I can act.",

        "I feel threatened in an unsafe world, so I act friendly to gain support.",

        "I fear making mistakes, so I need to be precise and follow instructions.",

        "I tend to idealize authority and things but at the same time, rebel against them.",

        "In order to shield against rejection, I become suspiciously critical and self-deprecating.",

        "I need to enjoy life, so I don’t feel guilty about seeking pleasure.",

        "I tend to be rebellious and view others as equals.",

        "My lack of self-discipline and unwillingness to postpone pleasure makes me unstable.",

        "I can easily attract others by appearing happy and optimistic.",

        "I prioritize my own needs over others, which it makes me rather exploitative.",

        "I reframe problems and avoid them in order to escape from pain and negativity.",

        "I’m never satisfied with the present world, so I need to seek the next big thing.",

        "I take pleasure in intensity, aggression, and fighting for my independence.",

        "When I feel frustrated, I can easily express my anger without any guilt.",

        "I am strongly opposed to authority and tradition in order to pursue power.",

        "I need to avoid vulnerability, so I act superior and powerful.",

        "I prioritize action over intellect and feelings, and make decisions fast and instinctively.",

        "I tend to see others as potential competitors or targets of exploitation.",

        "Morality is for the weak, I will aggressively do what I want.", 

        "I tend to numb myself with routine and mindless activities.",

        "My detachment from the outer world makes me forgetful and fuzzy.",

        "I am not very aware of myself, so I live vicariously through others.",

        "I need to protect the peace, so I tend to go along with what others want.",

        "I am not as important as others, which it means I can’t assert myself and I need to adapt instead.",

        "My resigned attitude makes me laid-back and self-effacing.",

        "I see myself as adaptable in self-concept, so I don’t have a strong internal identity."
        ];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];

    if (current_question < 8){
        one += score
    }
    else if (current_question < 15){
        two += score
    }
    else if (current_question < 22){
        three += score
    }
    else if (current_question < 29){
        four += score
    }
    else if (current_question < 36){
        five += score
    }
    else if (current_question < 43){
        six += score
    }
    else if (current_question < 50){
        seven += score
    }
    else if (current_question < 57){
        eight += score
    }
    else if (current_question < 64){
        nine += score
    }

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        one = Math.round((one / 7) * 100)
        two = Math.round((two / 7) * 100)
        three = Math.round((three / 7) * 100)
        four = Math.round((four / 7) * 100)
        five = Math.round((five / 7) * 100)
        six = Math.round((six / 7) * 100)
        seven = Math.round((seven / 7) * 100)
        eight = Math.round((eight / 7) * 100)
        nine = Math.round((nine / 7) * 100)

        get_result();
    }
    
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("one").innerHTML = "One: " + one + "%"
    document.getElementById("two").innerHTML = "Two: " + two + "%"
    document.getElementById("three").innerHTML = "Three: " + three + "%"
    document.getElementById("four").innerHTML = "Four: " + four + "%"
    document.getElementById("five").innerHTML = "Five: " + five + "%"
    document.getElementById("six").innerHTML = "Six: " + six + "%"
    document.getElementById("seven").innerHTML = "Seven: " + seven + "%"
    document.getElementById("eight").innerHTML = "Eight: " + eight + "%"
    document.getElementById("nine").innerHTML = "Nine: " + nine + "%"
}




