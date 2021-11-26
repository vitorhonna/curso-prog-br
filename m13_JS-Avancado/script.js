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

// -----------------------------------------------------------------------------------------

function hi() {
    console.log("Hi");
}

function bye() {
    console.log("Bye");
}

function greetUser(greeting, name) {
    greeting();
    console.log(name);
}

greetUser(hi, "Vitor"); // Hi Vitor
greetUser(bye, "Vitor"); // Bye Vitor

// -----------------------------------------------------------------------------------------

// (1) Com callback:

let users = ["John", "James", "Joe", "Joseph"];

function addUser(name, callback) {
    setTimeout(() => {
        users.push(name);

        callback();
    }, 1000);
}

function listUsers() {
    console.log("(1) Com callback");
    console.log(users);
}

addUser("Vitor", listUsers);

// (2) Sem callback:

let users2 = ["John", "James", "Joe", "Joseph"];

function addUser2(name) {
    setTimeout(() => {
        users2.push(name);
    }, 1000);
}

function listUsers2() {
    console.log("(2) Sem callback:");
    console.log(users2);
}

addUser2("Vitor");

listUsers2();

// -----------------------------------------------------------------------------------------

// (3) Com promise

let users3 = ["John", "James", "Joe", "Joseph"];

function addUser3(name) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            users3.push(name);

            let error = false;

            if (!error) {
                resolve();
            } else {
                reject({
                    msg: "(3) Com promise ==> Alguma mensagem de erro! :(",
                });
            }
        }, 1000);
    });

    return promise;
}

function listUsers3() {
    console.log("(3) Com promise");
    console.log(users3);
}

addUser3("Vitor")
    .then(listUsers3)
    .catch((error) => {
        console.log(error.msg);
    });

// -----------------------------------------------------------------------------------------

// (4) Com async await

let users4 = ["John", "James", "Joe", "Joseph"];

function addUser4(name) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            users4.push(name);

            let error = false;

            if (!error) {
                resolve();
            } else {
                reject({
                    msg: "(4) Com async await ==> Alguma mensagem de erro! :(",
                });
            }
        }, 1000);
    });

    return promise;
}

function listUsers4() {
    console.log("(4) Com async await");
    console.log(users4);
}

async function run() {
    try {
        await addUser4("Vitor");
        listUsers4();
    } catch (error) {
        console.log(error.msg);
    }
}

run();

// -----------------------------------------------------------------------------------------

// Higher-Order Functions

// Filter
console.clear();

function newStudent(name, age) {
    return { name, age };
}

let students = [
    newStudent("Mario", 23),
    newStudent("José", 45),
    newStudent("Marcia", 29),
    newStudent("João", 35),
];

// for (let student of students) {
//     if (student.age < 30) {
//         print(student.name);
//         console.log(student.name);
//     }
// }

function under30(student) {
    return student.age < 30;
}

function over30(student) {
    return student.age > 30;
}

let studentsUnder30 = students.filter(under30);
let studentsOver30 = students.filter(over30);

console.log("Students under 30: ", studentsUnder30);
console.log("Students over 30: ", studentsOver30);
