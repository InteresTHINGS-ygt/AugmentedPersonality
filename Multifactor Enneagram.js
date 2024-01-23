var current_type = 1;
var i = 0

function set_type(type) {
    current_type = type;

    if (current_type == 1 && i == 0) {
        document.getElementById("test12").style.display = "";
        i = 1;
    }
    else if (current_type == 1 && i == 1) {
        document.getElementById("test13").style.display = "";
        i = 2;
    }
    else if (current_type == 1 && i == 2) {
        document.getElementById("test14").style.display = "";
        i = 3;
    }
    else if (current_type == 1 && i == 3) {
        document.getElementById("test15").style.display = "";
        i = 4;
    }
    else if (current_type == 1 && i == 4) {
        document.getElementById("test16").style.display = "";
        i = 5;
    }
    else if (current_type == 1 && i == 5) {
        document.getElementById("test17").style.display = "";
        i = 6;
    }
    else if (current_type == 1 && i == 6) {
        document.getElementById("test18").style.display = "";
        i = 7;
    }
    else if (current_type == 1 && i == 7) {
        document.getElementById("test19").style.display = "";
        i = 8;
    }
    else if (current_type == 1 && i == 8) {
        document.getElementById("type1").style.display = "";
    }
    //-------------------------------------------------------
    else if (current_type == 2 && i == 1) {
        document.getElementById("test23").style.display = "";
        i = 2;
    }
    else if (current_type == 2 && i == 2) {
        document.getElementById("test24").style.display = "";
        i = 3;
    }
    else if (current_type == 2 && i == 3) {
        document.getElementById("test25").style.display = "";
        i = 4;
    }
    else if (current_type == 2 && i == 4) {
        document.getElementById("test26").style.display = "";
        i = 5;
    }
    else if (current_type == 2 && i == 5) {
        document.getElementById("test27").style.display = "";
        i = 6;
    }
    else if (current_type == 2 && i == 6) {
        document.getElementById("test28").style.display = "";
        i = 7;
    }
    else if (current_type == 2 && i == 7) {
        document.getElementById("test29").style.display = "";
        i = 8;
    }
    else if (current_type == 2 && i == 8) {
        document.getElementById("type2").style.display = "";
    }
    //------------------------------------------------------
    else if (current_type == 3 && i == 2) {
        document.getElementById("test34").style.display = "";
        i = 3;
    }
    else if (current_type == 3 && i == 3) {
        document.getElementById("test35").style.display = "";
        i = 4;
    }
    else if (current_type == 3 && i == 4) {
        document.getElementById("test36").style.display = "";
        i = 5;
    }
    else if (current_type == 3 && i == 5) {
        document.getElementById("test37").style.display = "";
        i = 6;
    }
    else if (current_type == 3 && i == 6) {
        document.getElementById("test38").style.display = "";
        i = 7;
    }
    else if (current_type == 3 && i == 7) {
        document.getElementById("test39").style.display = "";
        i = 8;
    }
    else if (current_type == 3 && i == 8) {
        document.getElementById("type3").style.display = "";
    }
    //------------------------------------------------------
    else if (current_type == 4 && i == 3) {
        document.getElementById("test45").style.display = "";
    }
    else if (current_type == 4 && i == 4) {
        document.getElementById("test46").style.display = "";
    }
    else if (current_type == 4 && i == 5) {
        document.getElementById("test47").style.display = "";
    }
    else if (current_type == 4 && i == 6) {
        document.getElementById("test48").style.display = "";
    }
    else if (current_type == 4 && i == 7) {
        document.getElementById("test49").style.display = "";
    }
    else if (current_type == 4 && i == 8) {
        document.getElementById("type4").style.display = "";
    }
    //------------------------------------------------------
    else if (current_type == 5 && i == 4) {
        document.getElementById("test56").style.display = "";
    }
    else if (current_type == 5 && i == 5) {
        document.getElementById("test57").style.display = "";
    }
    else if (current_type == 5 && i == 6) {
        document.getElementById("test58").style.display = "";
    }
    else if (current_type == 5 && i == 7) {
        document.getElementById("test59").style.display = "";
    }
    else if (current_type == 5 && i == 8) {
        document.getElementById("type5").style.display = "";
    }
    //------------------------------------------------------
    else if (current_type == 6 && i == 5) {
        document.getElementById("test67").style.display = "";
    }
    else if (current_type == 6 && i == 6) {
        document.getElementById("test68").style.display = "";
    }
    else if (current_type == 6 && i == 7) {
        document.getElementById("test69").style.display = "";
    }
    else if (current_type == 6 && i == 8) {
        document.getElementById("type6").style.display = "";
    }
    //------------------------------------------------------
    else if (current_type == 7 && i == 6) {
        document.getElementById("test78").style.display = "";
    }
    else if (current_type == 7 && i == 7) {
        document.getElementById("test79").style.display = "";
    }
    else if (current_type == 7 && i == 8) {
        document.getElementById("type7").style.display = "";
    }
    //------------------------------------------------------
    else if (current_type == 8 && i == 7) {
        document.getElementById("test89").style.display = "";
    }
    else if (current_type == 8 && i == 8) {
        document.getElementById("type8").style.display = "";
    }
    //------------------------------------------------------
    else if (current_type == 9 && i == 8) {
        document.getElementById("type9").style.display = "";
    }
}

function start_test() {
    document.getElementById("Statement").style.display = "none";
    document.getElementById("start").style.display = "none";
    set_type(1);
}




