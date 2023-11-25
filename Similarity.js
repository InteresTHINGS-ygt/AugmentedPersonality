var int_you;
var opn_you;
var ind_you;
var ord_you;
var ent_you;
var asr_you;
var com_you;
var pol_you;
var wtd_you;
var vol_you;
var int_oth;
var opn_oth;
var ind_oth;
var ord_oth;
var ent_oth;
var asr_oth;
var com_oth;
var pol_oth;
var wtd_oth;
var vol_oth;

var int_dis, opn_dis, ind_dis, ord_dis, ent_dis, asr_dis, com_dis, pol_dis, wtd_dis, vol_dis;

var you = [];
var oth = [];
var dis = [];
var avg_you;
var avg_oth;
var pearson;
var similarity;
var similarity_b;
var similarity_c;
var similarity_d;
var lichnost_sim;
var dis_from_center;
var dis_similarity;
var dis_factor;
var cent_factor;

function log() {
    int_you = document.getElementById("int_you").valueAsNumber;
    opn_you = document.getElementById("opn_you").valueAsNumber;
    ind_you = document.getElementById("ind_you").valueAsNumber;
    ord_you = document.getElementById("ord_you").valueAsNumber;
    ent_you = document.getElementById("ent_you").valueAsNumber;
    asr_you = document.getElementById("asr_you").valueAsNumber;
    com_you = document.getElementById("com_you").valueAsNumber;
    pol_you = document.getElementById("pol_you").valueAsNumber;
    wtd_you = document.getElementById("wtd_you").valueAsNumber;
    vol_you = document.getElementById("vol_you").valueAsNumber;

    int_oth = document.getElementById("int_oth").valueAsNumber;
    opn_oth = document.getElementById("opn_oth").valueAsNumber;
    ind_oth = document.getElementById("ind_oth").valueAsNumber;
    ord_oth = document.getElementById("ord_oth").valueAsNumber;
    ent_oth = document.getElementById("ent_oth").valueAsNumber;
    asr_oth = document.getElementById("asr_oth").valueAsNumber;
    com_oth = document.getElementById("com_oth").valueAsNumber;
    pol_oth = document.getElementById("pol_oth").valueAsNumber;
    wtd_oth = document.getElementById("wtd_oth").valueAsNumber;
    vol_oth = document.getElementById("vol_oth").valueAsNumber;

    similarity = 0;
    similarity_b = 0;
    similarity_c = 0;
    similarity_d = 0;
    lichnost_sim = 0;
    dis_from_center = 0;
    dis_similarity = 0;
    dis_factor = 0;
    cent_factor = 0;
    you = [];
    oth = [];
    dis = [];

    int_dis = Math.abs(int_you - int_oth);
    opn_dis = Math.abs(opn_you - opn_oth);
    ind_dis = Math.abs(ind_you - ind_oth);
    ord_dis = Math.abs(ord_you - ord_oth);
    ent_dis = Math.abs(ent_you - ent_oth);
    asr_dis = Math.abs(asr_you - asr_oth);
    com_dis = Math.abs(com_you - com_oth);
    pol_dis = Math.abs(pol_you - pol_oth);
    wtd_dis = Math.abs(wtd_you - wtd_oth);
    vol_dis = Math.abs(vol_you - vol_oth);

    you.push(int_you);
    you.push(opn_you);
    you.push(ind_you);
    you.push(ord_you);
    you.push(ent_you);
    you.push(asr_you);
    you.push(com_you);
    you.push(pol_you);
    you.push(wtd_you);
    you.push(vol_you);

    oth.push(int_oth);
    oth.push(opn_oth);
    oth.push(ind_oth);
    oth.push(ord_oth);
    oth.push(ent_oth);
    oth.push(asr_oth);
    oth.push(com_oth);
    oth.push(pol_oth);
    oth.push(wtd_oth);
    oth.push(vol_oth);

    avg_you = you.reduce((sum, value) => sum + value, 0) / you.length;
    avg_oth = oth.reduce((sum, value) => sum + value, 0) / oth.length;

    let cov = 0;
    let varYou = 0;
    let varOth = 0;

    for (let i = 0; i < you.length; i++) {
        const diffYou = you[i] - avg_you;
        const diffOth = oth[i] - avg_oth;

        cov += diffYou * diffOth;
        varYou += diffYou * diffYou;
        varOth += diffOth * diffOth;
    }

    pearson = cov / (Math.sqrt(varYou * varOth));
    similarity = Math.round(((1 + pearson)/2) * 100);

    dis.push(int_dis);
    dis.push(opn_dis);
    dis.push(ind_dis);
    dis.push(ord_dis);
    dis.push(ent_dis);
    dis.push(asr_dis);
    dis.push(com_dis);
    dis.push(pol_dis);
    dis.push(wtd_dis);
    dis.push(vol_dis);
    var avg_dis = dis.reduce((sum, value) => sum + value, 0) / dis.length;
    var similarity_b = Math.round(100 - avg_dis);
    var similarity_c = Math.round((Math.pow((similarity_b / 100),2))*100);

    
    for (let i = 0; i < you.length; i++) {
        dis_from_center = Math.abs(50-((you[i]+oth[i])/2));
        dis_similarity = 100-(Math.abs(you[i]-oth[i]));
        dis_factor = (0.00774 * dis_similarity) + 0.226;
        cent_factor = ((0.0056 * dis_from_center) + 0.72) + (0.28 * (dis_similarity / 100));
        similarity_d = (dis_similarity * dis_factor * cent_factor) * 0.1;
        lichnost_sim += similarity_d;
        console.log("Distance From Center: " + dis_from_center);
        console.log("Distance Factor: " + dis_factor);
        console.log("Center Factor: " + cent_factor);
        console.log("Distance Similarity: " + dis_similarity);
        console.log("One Trait Similarity: " + similarity_d);
        console.log("Lichnost Similarity: " + lichnost_sim);
    }
    

    document.getElementById("Similarity").innerHTML = "You are " + similarity + "% similar to each other! (Pearson)";
    document.getElementById("Similarity_b").innerHTML = "You are " + similarity_b + "% similar to each other! (Mean Distance)";
    document.getElementById("Similarity_c").innerHTML = "You are " + similarity_c + "% similar to each other! (Quadratic Distance)";
    document.getElementById("Similarity_d").innerHTML = "You are " + Math.round(lichnost_sim) + "% similar to each other!";
}

