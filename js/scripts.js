var intervalID = window.setInterval(log, 100);

function log() {
    console.log("A");
}

var audio = new Audio('https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6d/Cave2.ogg/revision/latest');

function sound() {
    audio.play();
}