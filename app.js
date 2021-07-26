const numbers = document.getElementsByClassName("numbers");
const operands = document.getElementsByClassName("operand");
const screen = document.getElementsByClassName("screen");
const acButton = document.getElementById("ac-key");
const delButton = document.getElementById("del");
const decimal = document.getElementById(".")

// decimal.addEventListener('click' ,function (){
//     console.log("tapped");
// })


 for (let index = 0; index < numbers.length; index++) {
     numbers[index].addEventListener("click" ,function () {
         console.log("tapped!");
         //TODO - add relevent function
     } )
 }


for (let index = 0; index < operands.length; index++) {
    const element = operands[index];
    element.addEventListener('click', function (){
        console.log("touch");
        //TODO - add relevent function
    })
}

