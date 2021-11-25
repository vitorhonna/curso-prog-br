function print(msg) {
    let printMsg = document.createElement("p");
    printMsg.innerHTML = `<strong style="color: lightgray">${typeof msg}:</strong> ${msg}`;
    document.querySelector("#print").append(printMsg);
}

function clearPage() {
    document.querySelector("#print").innerText = "";
}

// -----------------------------------------------------------------------------------------

function speakGeneric() {
    print(this.sound);
    console.log(this.sound);
}

const Dog = {
    sound: "Woof woof",
    speak: speakGeneric,
};

const Cat = {
    sound: "Meow meow",
    speak: speakGeneric,
};

Dog.speak(); // Woof woof
Cat.speak(); // Meow meow

speakGeneric(); // undefined

let function_bind = speakGeneric.bind(Dog);

function_bind(); // Woof woof
