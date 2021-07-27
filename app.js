const numbers = document.getElementsByClassName("numbers");
const operands = document.getElementsByClassName("operand");

const screen = document.getElementById("screen");
const acButton = document.getElementById("ac-key");
const delButton = document.getElementById("del");
const decimal = document.getElementById(".");
const equals = document.getElementById("=")

num1 = ""
operation = ""
num2 = ""
localNumberEntered = 0; // to keep track of the numbers entered 
firstNum = true;

// screen.addEventListener("click" , function(){
//     console.log("tapped!");
//     //TODO - add relevant function
// })


acButton.addEventListener("click" , function(){
    console.log("AC!!!");
    num1 = ""
    operation = ""
    num2 = "" 
    firstNum = true;
    screen.innerHTML = ""
        
    //TODO - add relevant function
})
delButton.addEventListener("click" , function(){
    console.log("tapped!");
    //TODO - add relevant function
})
decimal.addEventListener("click" , function(){
    console.log("tapped!");
    //TODO - add relevant function
})


function showResult() {
    screen.innerHTML = add(num1,num2)
    console.log( "-->" +add(num1,num2));
}
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

for (let index = 0; index < operands.length; index++) {
    const element = operands[index];
    element.addEventListener('click', function (){
        console.log("operand: " + this.innerHTML );
        updateOperand(this.innerHTML);
        firstNum = false
        //TODO - add relevant function
    })
}

function changeScreen(params) {
    screen.innerHTML = params
}

function updateOperand(op) {
    operation = op;
}

function setNum1 (int){
    num1 += int;
    changeScreen(num1)
    
    console.log("num1: ->" + num1);
}

function setNum2(int){
    num2 += int;
    changeScreen(num2)
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
