let count = 0;


let countEl = document.getElementById("count-el");

// Function for increment button
function increment() {
  count++;
  countEl.innerText = count;

}

let saveEl = document.getElementById("save-el");


function save() {
  let countDash = count + " -- "
  saveEl.innerText += " " + countDash
  countEl.innerText = 0
  count = 0
}


