// console.log(
//   (document.querySelector("#title1").textContent += " Título Principal")
// );
// console.log(title1.textContent);

// console.log(document.querySelector("h2").setAttribute("class", "red"))
document.querySelector("h2").className = "red";

let p = document.querySelector(".paragrafoTeste");
// console.log(p);
// console.log(p.innerHTML);
// console.log(p.textContent);
// console.log(p.innerText);

function divClicked(div) {
  div.textContent = "Div was clicked!";
  div.style = "background-color: purple; color: white";
}

function onDiv(div) {
  div.textContent = "Click here";
  div.style = "background-color: orange; color: black";
}

function outDiv(div) {
  div.textContent = "Click here";
  div.style = "background-color: blue; color: white";
}

function insertText(text) {
  let p = document.querySelector(".textoInserido");
  p.textContent = text.value;
}

let div = document.querySelector(".divTeste");
div.onclick = changeText;

function changeText() {
  this.textContent = "New text!";
  this.style = "background-color: purple; color: white";
}

function f1(tag) {
  console.log("teste1");
  console.log(this); // Imprime o objeto window
  console.log(tag);
}

function f2(e) {
  console.log("teste2");
  console.log(this); // Imprime a tag p com id ref
  console.log(e);
}

let p_ref = document.querySelector("#ref");
p_ref.addEventListener("click", f2);

let person = {
  name: "Vitor",
  age: "26",
};

// console.log(JSON.stringify(person));

let cat = '{"name": "Tom", "sound": "meow"}';

// console.log(JSON.parse(cat));

// function teste() {
//   document.querySelector("#sec").textContent = "123";
// }

var interval;
let countingTime = false;

function updateSeconds() {
  let seconds = Number(sec.textContent) + 1;
  if (seconds < 10) {
    sec.textContent = "0" + seconds;
  } else {
    sec.textContent = seconds;
  }
}

function updateMinutes() {
  let minutes = Number(min.textContent) + 1;
  if (minutes < 10) {
    min.textContent = "0" + minutes;
  } else {
    min.textContent = minutes;
  }
}

function timer() {
  if (!countingTime) {
    countingTime = true;
    interval = setInterval(() => {
      let seconds = Number(sec.textContent);
      if (seconds < 59) {
        updateSeconds();
      } else {
        sec.textContent = "00";
        updateMinutes();
      }
    }, 1000);
  }
}

function stopTimer() {
  countingTime = false;
  clearInterval(interval);
  console.log("stopped");
}

function reset() {
  document.querySelector("#sec").textContent = "00";
  document.querySelector("#min").textContent = "00";
}

document.querySelector("#start").addEventListener("click", timer);
document.querySelector("#stop").addEventListener("click", stopTimer);
document.querySelector("#reset").addEventListener("click", reset);
