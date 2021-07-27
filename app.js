const numbers = document.getElementsByClassName("numbers");
const operands = document.getElementsByClassName("operand");

const screen = document.getElementById("screen");
const acButton = document.getElementById("ac-key");
const delButton = document.getElementById("del");
// const decimal = document.getElementById(".");
const equals = document.getElementById("=")

let num1 = ""
let operation = ""
let num2 = ""
let results = ""
localcount = 0;
previousOperand = ""

firstNum = true;

// screen.addEventListener("click" , function(){
//     console.log("tapped!");
//     //TODO - add relevant function
// })


acButton.addEventListener("click" , function (){
    console.log("AC!!!");
    num1 = ""
    operation = ""
    num2 = "" 
    firstNum = true;
    screen.innerHTML = ""
    localcount = 0;
    previousOperand = ""
    //TODO - add relevant function
})
delButton.addEventListener("click" , function(){
    console.log("del---");
    if (firstNum) {
        num1 = num1.slice(0, num1.length - 1)
        updateScreen(num1)
    }
    else{
        num2 = num2.slice(0, num2.length - 1)
        updateScreen(num2)
    }
    //TODO - add relevant function
})
// decimal.addEventListener("click" , function(){
//     console.log("tapped!");
//     //TODO - add relevant function
// })


// function showResult() {
//     screen.innerHTML = add(num1,num2)
//     console.log( "-->" +add(num1,num2));
// }
equals.addEventListener("click", function () {
    screen.innerHTML = compute(operation);
    console.log( "result -->" +compute(operation));   
})

for (let index = 0; index < numbers.length; index++) {
     numbers[index].addEventListener("click" , function () {
        //  int = parseInt( this.innerHTML);
         int = this.innerHTML;
         console.log( "--->" +this.innerHTML);
         firstNum ? setNum1(int) : setNum2(int);  
     }) 
 }
// parseInt()
// ******************************** OPERANDS ***********************************
for (let index = 0; index < operands.length; index++) {
    const element = operands[index];
    element.addEventListener('click', function (){
        console.log("operand: " + this.innerHTML );
        updateOperand(this.innerHTML);
        firstNum = false
        localcount++;
        if (localcount > 1){
            num1 =  compute(previousOperand)
            updateScreen(num1)
            console.log("if ran!");
            num2 = ""
        }
        previousOperand = this.innerHTML;
        //TODO - add relevant function
    })
}

function updateScreen(params) {
    screen.innerHTML = params
}

function updateOperand(op) {
    operation = op;
}

function setNum1 (int){
    num1 += int;
    updateScreen(num1)
    
    console.log("num1: ->" + num1);
}

function setNum2(int){
    num2 += int;
    updateScreen(num2)
    console.log("num2: ->" + num2);
}

// function addNum(int){
//     // localNumberEntered == 0 ? setNum1(int) : setNum2(int);  
//     firstNum ? setNum1(int) : setNum2(int);  
// }


function compute(op) {

    switch (op) {
        case "+":
            return add(num1, num2)
        case "-":
            return sub(num1,num2)

        case "*":
            return multiply(num1,num2)

        case "/":
            return divide(num1,num2)
        default:
            return "error....";
    }
    
}


// ********************** FUNCTIONS **************************************


function add(num1 , num2) {
    let v1 = parseInt(num1)
    let v2 = parseInt(num2)
    return v1 + v2;
}

function sub(num1 , num2) {
    return num1 - num2;
}

function multiply(num1 , num2) {
    return num1 * num2;
}

function divide(num1 , num2) {
    return num1 / num2;
}
