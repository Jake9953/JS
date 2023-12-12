let num1 = 9
let num2 = 5

let numEL1 = document.getElementById("num1-el").innerText = num1
let numEl2 = document.getElementById("num2-el").innerText = num2

let sumEL = document.getElementById("sum-el")

// Functions to add, minus, multiply and divide

function add() {
  sumEL.innerText = numEL1 + numEl2

}
function subtract() {
  sumEL.innerText = numEL1 - numEl2
}
function divide() {
  sumEL.innerText = numEL1 / numEl2
}
function multiply() {
  sumEL.innerText = numEL1 * numEl2
}
