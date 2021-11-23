const img = document.querySelector("#thumb");

img.addEventListener("click", () => {
    const attr = img.getAttribute("src");
    if (attr == "./assets/images/thumbs-up.png") {
        img.setAttribute("src", "./assets/images/thumbs-down.png");
    } else {
        img.setAttribute("src", "./assets/images/thumbs-up.png");
    }
});

const lista = document.querySelector("#list");
console.log(lista.dataset.num);

lista.dataset.num = "5";

// let listContent = "";
// for (let i = 0; i < lista.dataset.num; i++) {
//     listContent += `<li> ${i + 1} </li>`;
// }
// lista.innerHTML = listContent;

// ou
// for (let i = 0; i < lista.dataset.num; i++) {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = i + 1;

//     lista.append(listItem);
// }

// ou
for (let i = 0; i < lista.dataset.num; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<li> ${i + 1} </li>`;
    lista.append(listItem);
}
