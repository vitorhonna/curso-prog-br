const canvas = document.querySelector("#canvas");

const context = canvas.getContext("2d");

// Linhas
context.moveTo(2.5, 0);
context.lineTo(250, 250);
context.lineTo(497.5, 0);
// context.lineTo(497.5, 497.5);
// context.lineTo(2.5, 497.5);
// context.lineTo(2.5, 0);
context.lineWidth = 5;
context.strokeStyle = "darkblue";
context.stroke();

// Retângulos
context.fillStyle = "lightskyblue";
context.fillRect(20, 380, 150, 100);

context.strokeRect(330, 380, 150, 100);

context.rect(200, 330, 100, 150);
context.fill();
context.stroke();

context.clearRect(40, 420, 400, 20);

// Path
context.beginPath();
context.strokeStyle = "black";
context.fillStyle = "lightgray";
context.moveTo(25, 75);
context.lineTo(200, 250);
context.lineTo(25, 250);
context.closePath();
context.fill();
context.stroke();

// Circles
context.beginPath();
context.strokeStyle = "black";
context.fillStyle = "lightgray";
const { x_center, y_center, radius, start, end } = {
    x_center: 250 + 250 * (2 / 3),
    y_center: 250 * (4 / 5),
    radius: 25,
    start: Math.PI * 0,
    end: Math.PI * 2,
};
context.arc(x_center, y_center, radius, start, end);
context.fill();
context.stroke();
