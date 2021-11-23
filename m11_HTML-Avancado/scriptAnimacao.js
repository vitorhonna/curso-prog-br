console.clear();

let canvas = document.querySelector("#canvas");
let player = document.querySelector("#player");

const step = 20;
const canvasPadding = 10;
const playerWidth = player.offsetWidth;
const playerHeight = player.offsetHeight;
const canvasWidth = canvas.offsetWidth - canvasPadding;
const canvasHeight = canvas.offsetHeight - canvasPadding;

let posX = 0;
let posY = 0;

// console.log(playerWidth);
// console.log(playerHeight);
// console.log(canvasWidth);
// console.log(canvasHeight);

// let position = 0;
// let move = setInterval(() => {
//     console.log(position + step + playerSize);
//     if (position + step + playerSize > 500) {
//         console.log("out", position + step + playerSize);
//         clearTimeout(move);
//     } else {
//         position += step;
//         player.style.left = `${position}px`;
//     }
// }, 100);

const Move = {
    up() {
        if (posY - step > canvasPadding) {
            posY -= step;
            player.style.top = `${posY}px`;
        } else {
            posY = canvasHeight - playerHeight;
            player.style.top = `${posY}px`;
        }
    },

    left() {
        if (posX - step > canvasPadding) {
            posX -= step;
            player.style.left = `${posX}px`;
        } else {
            posX = canvasWidth - playerWidth;
            player.style.left = `${posX}px`;
        }
    },

    right() {
        if (posX + playerWidth + step <= canvasWidth) {
            posX += step;
            player.style.left = `${posX}px`;
        } else {
            posX = canvasPadding;
            player.style.left = `${posX}px`;
        }
    },

    down() {
        if (posY + playerHeight + step <= canvasHeight) {
            posY += step;
            player.style.top = `${posY}px`;
        } else {
            posY = canvasPadding;
            player.style.top = `${posY}px`;
        }
    },
};

document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") {
        Move.up();
    } else if (e.key == "ArrowLeft") {
        Move.left();
    } else if (e.key == "ArrowRight") {
        Move.right();
    } else if (e.key == "ArrowDown") {
        Move.down();
    }
});
