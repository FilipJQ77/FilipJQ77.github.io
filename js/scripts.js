var intervalID = window.setInterval(log, 1000);

function log() {
    console.log("A");
}

var audio = new Audio("https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d3/Cave1.ogg");

function sound() {
    audio.play();
}