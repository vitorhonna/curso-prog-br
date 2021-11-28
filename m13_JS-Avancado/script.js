function print(msg) {
    let printMsg = document.createElement("p");
    printMsg.innerHTML = `<strong style="color: lightgray">${typeof msg}:</strong> ${msg}`;
    document.querySelector("#print").append(printMsg);
}

function clearPage() {
    document.querySelector("#print").innerText = "";
}

function clear() {
    clearPage();
    console.clear();
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

// addUser("Vitor", listUsers);

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

// addUser3("Vitor")
//     .then(listUsers3)
//     .catch((error) => {
//         console.log(error.msg);
//     });

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

// run();

// -----------------------------------------------------------------------------------------

// Higher-Order Functions

// Filter

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

let studentsUnder30 = students.filter((student) => {
    return student.age < 30;
});

let studentsOver30 = students.filter((student) => {
    return student.age > 30;
});
console.log("Students under 30: ", studentsUnder30);
console.log("Students over 30: ", studentsOver30);

// Map

let studentsDescription = students.map((student) => {
    return `${student.name} is ${student.age} years old`;
});

console.log(studentsDescription);
studentsDescription.forEach((description) => print(description));

// Reduce

let order = [
    { item: "Hamburger", price: 20 },
    { item: "Fries", price: 12 },
    { item: "Coke", price: 9 },
    { item: "Chocolate Cake", price: 16 },
];

let orderTotal = order.reduce((total, item) => {
    return total + item.price;
}, 0);

console.log("orderTotal =", orderTotal);

let orderItems = order.reduce((items, item) => {
    return items + " " + item.item;
}, "Order Items:");

console.log(orderItems);

// -----------------------------------------------------------------------------------------

// Referência vs Valor

// Passagem por referência

let objA = { name: "John", age: 5 };
let objB = objA;
objB.age = 10;
console.log(objA.age); // 10
console.log(objB.age); // 10

let arrA = [1, 2, 3];
let arrB = arrA;
arrB[0] = 100;
console.log(arrA[0]); // 100
console.log(arrB[0]); // 100

// Passagem por valor

let a = 5;
let b = a;
b = 10;
console.log(a); // 5
console.log(b); // 10

// Reatribuição total

let obj_A = { name: "John", age: 5 };
let obj_B = obj_A;
obj_B = { name: "Mary", age: 10 };
console.log(obj_A.age); // 5
console.log(obj_B.age); // 10

let arr_A = [1, 2, 3];
let arr_B = arr_A;
arr_B = [100, 200, 300];
console.log(arr_A); // [1, 2, 3]
console.log(arr_B); // [100, 200, 300]

// Contornando a passagem por referência:

let arrA_2 = [1, 2, 3];
let arrB_2 = arrA_2.slice();
arrB_2[0] = 100;
console.log(arrA_2); // [1, 2, 3]
console.log(arrB_2); // [100, 2, 3]

let arrA_3 = [1, 2, 3];
let arrB_3 = [...arrA_3, 4, 5, 6];
arrB_3[0] = 100;
console.log(arrA_3); // [1, 2, 3]
console.log(arrB_3); // [100, 2, 3, 4, 5, 6]

let objA_2 = { name: "John", age: 5 };
let objB_2 = Object.assign({ hair: "black" }, objA_2);
objB_2.age = 10;
console.log(objA_2); // {name: 'John', age: 5}
console.log(objB_2); // {hair: 'black', name: 'John', age: 10}

let objA_3 = { name: "John", age: 5 };
let objB_3 = { ...objA_3, hair: "black" };
objB_3.age = 10;
console.log(objA_3); // {name: 'John', age: 5}
console.log(objB_3); // {name: 'John', age: 10, hair: 'black'}

// -----------------------------------------------------------------------------------------

// Spread operator

let person = {
    name: "John",
    age: 25,
};

let contact = {
    phoneNumber: "123456789",
    email: "john.doe@gmail.com",
};

let personContact = { ...person, ...contact };

console.log(personContact);
// {name: 'John', age: 25, phoneNumber: '123456789', email: 'john.doe@gmail.com'}

// -----------------------------------------------------------------------------------------

// Desestruturação

let personInfo = {
    name: "John",
    age: 25,
    phoneNumber: "123456789",
    email: "john.doe@gmail.com",
};

let { name, email, number, ...otherInfo } = personInfo;

console.log(name); // John
console.log(email); // john.doe@gmail.com
console.log(number); // undefined
console.log(otherInfo); // {age: 25, phoneNumber: '123456789'}

let array = [1, 2, 3];
let [pos0, pos1, pos2] = array;
console.log(pos0); // 1

// -----------------------------------------------------------------------------------------

// fetch
clear();

let currencyCode = "EUR";

let APIurl = `https://v6.exchangerate-api.com/v6/4d40d8e180e79b77a58e09fc/pair/${currencyCode}/BRL`;

fetch(APIurl)
    .then((response) => {
        return response.json();
    })
    .then((responseJSON) => {
        let conversion_rate = responseJSON.conversion_rate;
        console.log(conversion_rate);
        print(`1 ${currencyCode} = ${conversion_rate} BRL`);
    });

async function getExchangeRate(currencyCode) {
    let APIurl = `https://v6.exchangerate-api.com/v6/4d40d8e180e79b77a58e09fc/pair/${currencyCode}/BRL`;
    let response = await fetch(APIurl);
    let responseJSON = await response.json();
    let conversion_rate = responseJSON.conversion_rate;
    console.log(conversion_rate);
    print(`1 ${currencyCode} = ${conversion_rate} BRL`);
}

getExchangeRate(currencyCode);

// -----------------------------------------------------------------------------------------

// try catch finally

// let userName = "";

// try {
//     if (userName === "") {
//         throw new Error("O nome não pode ser vazio");
//     }
//     console.log(userName);
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("Boa noite");
// }
