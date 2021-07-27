const numbers = document.getElementsByClassName("numbers");
const operands = document.getElementsByClassName("operand");

const screen = document.getElementById("screen");
const acButton = document.getElementById("ac-key");
const delButton = document.getElementById("del");
const decimal = document.getElementById(".");
const equals = document.getElementById("=")

num1 = 0
operation = ""
num2 = 0
localNumberEntered = 0; // to keep track of the numbers entered 

screen.addEventListener("click" , function(){
    console.log("tapped!");
    //TODO - add relevant function
})
acButton.addEventListener("click" , function(){
    console.log("tapped!");
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
    screen.innerHTML = add(num1,num2)
    console.log( "-->" +add(num1,num2));    
})

for (let index = 0; index < numbers.length; index++) {
     numbers[index].addEventListener("click" , function () {
         int = parseInt( this.innerHTML);
         console.log( "--->" +this.innerHTML);
         localNumberEntered == 0 ? setNum1(int) : setNum2(int);  
     }) 
 }
// parseInt()

for (let index = 0; index < operands.length; index++) {
    const element = operands[index];
    element.addEventListener('click', function (){
        console.log("operand: " + this.innerHTML );
        updateOperand(this.innerHTML);
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
    num1 = int;
    changeScreen(int)
    localNumberEntered++;
    console.log("num1: ->" + int);
}

function setNum2(int){
    num2 = int;
    changeScreen(int)
    console.log("num2: ->" + int);
}

function addNum(int){
    localNumberEntered == 0 ? setNum1(int) : setNum2(int);  
}

function add(num1 , num2) {
    return num1 + num2;
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
