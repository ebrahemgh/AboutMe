"use strict";
let username = prompt("what is your name");
document.write(<h2>username</h2>);
// first question
let age = prompt("am i bigger than 24 years old ? yes or no");

console.log(age.toUpperCase());
if (age.toLowerCase() == "yes") {
    // console.log(age);
    alert("true");

}
else if (age.toLowerCase() == "no") {
    // console.log(age);

    alert("false");
}
else {
    // console.log(age);

    alert("please choose between yes or no");
}
//seconed question
let hair = prompt("do you think i have hair ?");
if (hair.toLowerCase() == "yes") {
    // console.log(hair);

    alert("true  ");
}
else if (hair.toLowerCase() == "no") {
    // console.log(hair);
    alert("false");
}
else {
    // console.log(hair);
    alert("choose between yes or no");
}
//third question
let tall = prompt("do you think i am taller than 190 sm ?");
if (tall.toLowerCase() == "yes") {
    alert("false ");
}
else if (tall.toLowerCase() == "no") {
    alert("true");
}
else {
    alert("choose between yes or no");
}
//fourth quistion
let study = prompt("do you thik i love styuding ?");
if (study.toLowerCase() == "yes") {
    alert(" false ");
}
else if (study.toLowerCase() == "no") {
    alert("true");
}
else {
    alert("choose between yes or no");
}
// last question
let pretty = prompt("do you thik i am pretty ?");
if (study.toLowerCase() == "yes") {
    alert(" thank you , you too  ");
}
else if (study.toLowerCase() == "no") {
    alert("allah ysam7ak");
}
else {
    alert("choose between yes or no");
}