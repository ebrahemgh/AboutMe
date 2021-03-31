"use strict";
let score = 0;
// let username = prompt("what is your name");
// document.write(username);
// first question
let age = prompt("am i bigger than 24 years old ? yes or no");

// console.log(age.toUpperCase());
function agefun() {
    if (age.toLowerCase() == "yes" || age.toLowerCase() == "y") {
        // console.log(age);
        alert("true");
        score = score + 1;
        return score;
    

    }
    else if (age.toLowerCase() == "no" || age.toLowerCase() == "n") {
        // console.log(age);

        alert("false");
    }
    else {
        // console.log(age);

        alert("please choose between yes or no");
    }
}
agefun(age);


//seconed question
let hair = prompt("do you think i have hair ?");
function hairfun() {
    if (hair.toLowerCase() == "yes" || hair.toLowerCase() == "y") {
        // console.log(hair);

        alert("true  ");
        score = score + 1;
    }
    else if (hair.toLowerCase() == "no" || hair.toLowerCase() == "n") {
        // console.log(hair);
        alert("false");
    }
    else {
        // console.log(hair);
        alert("choose between yes or no");
    }
}
hairfun(hair);
//third question
let tall = prompt("do you think i am taller than 190 sm ?");

function tallfun() {
    if (tall.toLowerCase() == "yes" || tall.toLowerCase() == "y") {
        alert("false ");
    }
    else if (tall.toLowerCase() == "no" || tall.toLowerCase() == "n") {
        alert("true");
        score = score + 1;

    }
    else {
        alert("choose between yes or no");
    }
}
tallfun(tall);
//fourth quistion
let study = prompt("do you thik i love styuding ?");

function studyfun() {
    if (study.toLowerCase() == "yes" || study.toLowerCase() == "y") {
        alert(" false ");
    }
    else if (study.toLowerCase() == "no" || study.toLowerCase() == "n") {
        alert("true");
        score = score + 1;

    }
    else {
        alert("choose between yes or no");
    }
}
studyfun(study);
// fivth question
let pretty = prompt("do you thik i am pretty ?");

function prettyfun() {
    if (study.toLowerCase() == "yes" || pretty.toLowerCase() == "y") {
        alert(" thank you , you too  ");
        score = score + 1;

    }
    else if (study.toLowerCase() == "no" || study.toLowerCase() == "n") {
        alert("allah ysam7ak");
    }
    else {
        alert("choose between yes or no");
    }
}
prettyfun(pretty);

// let counter = 0;
// let vv = 7;

// question 6
let num = null;
function guessnumber() {
    let compare = 7;
    let counter = 0;
    for (counter; counter < 4; counter++) {
        var num = prompt("guess a number between 0 to 10");

        if (num == compare) {
            alert("good guess you are true");
            score = score + 1;
            break;
        }
        else if (num < compare) {
            alert("too low");
        
        }
        else if (num > compare) {
            alert("too high");
        }
        else {
            alert("please choose between 0 and 10");
        }
    }
    if (counter > 4) {
        alert("you finished your attempted, the true value is 7")
    }
}
guessnumber(num);

// seven qquestoin

let  answers = ["mansaf", "burger", "potato", "pizza"];
let food = null;
function counterfun() {
    for (let counter3 = 0; counter3 < 6; counter3++) {
        let food = prompt("guess what is my favourit food you have 6 attemts if you lose i will be mad");
        if (food == answers[2]) {
            alert("good jop");
            score = score + 1;
            break;
        }
        else {
            alert("thter is some help mansaf,burger,potato,pizza")
            alert("try again dude ofc i dont like this dish ")
        }
    
    }
}
alert("your score is:" + score);
