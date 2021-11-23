const video = document.querySelector("#video1");

function replay_5() {
    video.currentTime -= 5;
}

function forward_5() {
    video.currentTime += 5;
}

function stop() {
    video.pause();
    video.currentTime = 0;
    document.querySelector("#play_pause").textContent = "play_arrow";
    video.playbackRate = 1;
}

function play_pause() {
    if (video.paused) {
        video.play();
        document.querySelector("#play_pause").textContent = "pause";
    } else {
        video.pause();
        document.querySelector("#play_pause").textContent = "play_arrow";
    }
}

function toggleLoop() {
    if (video.toggleAttribute("loop")) {
        document.querySelector("#loop").style.color = "lightblue";
    } else {
        document.querySelector("#loop").style.color = "white";
    }
}

video.addEventListener("ended", () => {
    document.querySelector("#play_pause").textContent = "play_arrow";
});

function decreaseSpeed() {
    video.playbackRate -= 0.5;
}

function increaseSpeed() {
    video.playbackRate += 0.5;
}

const controls = document.querySelector(".controller");
function showControls() {
    controls.style.display = "flex";
}
function hideControls() {
    controls.style.display = "none";
}

const container = document.querySelector(".container");
container.onmouseover = () => {
    showControls();
};
container.onmouseout = () => {
    hideControls();
};
