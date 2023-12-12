// document.getElementById("count-el").innerText = 5;

let count = 0;

let countEl = document.getElementById("count-el");

// Function for increment button
function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  console.log(count)
}