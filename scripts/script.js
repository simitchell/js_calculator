document.addEventListener('DOMContentLoaded', () => {
    alert("Hello.");
})



const button0 = document.getElementById("0");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");

const buttonEquals = document.getElementById("equals");
const buttonDecimal = document.getElementById("decimal");
const buttonMultiply = document.getElementById("mult");
const buttonDivide = document.getElementById("divide");
const buttonPlus = document.getElementById("plus");
const buttonMinus = document.getElementById("minus");
const buttonNeg = document.getElementById("plus-minus");
const buttonPerc = document.getElementById("percent");
const buttonClear = document.getElementById("AC");

const buttonEvent = document.querySelectorAll('button');

buttonEvent.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.value);
        alert(button.value);
    });
});
    
// button0.addEventListener('click', () => {
//     console.log("You've clicked zero");
//     console.log(button0.value);
//     alert(button0.value);
// });

// button1.addEventListener('click', () => {
//     console.log("You've clicked 1");
//     // calcscreen.innerHTML = newHTML;
// });

// button2.addEventListener('click', () => {
//     console.log("You've clicked 2");
// });

// button3.addEventListener('click', () => {
//     console.log("You've clicked 3");
// });

// button4.addEventListener('click', () => {
//     console.log("You've clicked 4");
// });

// button5.addEventListener('click', () => {
//     console.log("You've clicked 5");
// });

// button6.addEventListener('click', () => {
//     console.log("You've clicked 6");
// });

// button7.addEventListener('click', () => {
//     console.log("You've clicked 7");
// });

// button8.addEventListener('click', () => {
//     console.log("You've clicked 8");
// });

// button9.addEventListener('click', () => {
//     console.log("You've clicked 9");
// });

// buttonEquals.addEventListener('click', () => {
//     console.log("You've clicked equals");
// });

// buttonDecimal.addEventListener('click', () => {
//     console.log("You've clicked decimal");
// });

// buttonMultiply.addEventListener('click', () => {
//     console.log("You've clicked multiply");
// });

// buttonDivide.addEventListener('click', () => {
//     console.log("You've clicked divide");
// });

// buttonPlus.addEventListener('click', () => {
//     console.log("You've clicked plus");
// });

// buttonMinus.addEventListener('click', () => {
//     console.log("You've clicked minus");
// });

// buttonPerc.addEventListener('click', () => {
//     console.log("You've clicked percent");
// });

// buttonNeg.addEventListener('click', () => {
//     console.log("You've clicked the inversion");
// });

// buttonClear.addEventListener('click', () => {
//     console.log("You've clicked All Clear");
// });