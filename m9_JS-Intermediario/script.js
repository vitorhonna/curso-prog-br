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
