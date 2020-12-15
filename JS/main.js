/**
 * @file Beispiel für die Nutzung der "Engine".
 * @module Beispiel
 */
/**
 * @var {number} WIDTH Die Anzahl aller Spalten
 */
var WIDTH = window.innerWidth;
/**
 * @var {number} HEIGHT Die Anzahl aller Zeilen
 */
var HEIGHT = window.innerHeight;
/**
 * @constant {number} TILESIZE Die Breite und Höhe jeder Zelle
 */
const TILESIZE = 1;
/**
 * @constant {canvasClass} c Die canvasClass
 */
const c = new canvasClass("canvasID", "canvas", WIDTH * TILESIZE, HEIGHT * TILESIZE, "white");

window.onresize = function () {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    c.resize(WIDTH, HEIGHT);
}

const times = [];
var fps, minFPS = Infinity,
    maxFPS = 0,
    frameTime = 0,
    time, animationFrame;
/**
 * Setzt alles in den Startzustand
 */
function init() {
    cancelAnimationFrame(animationFrame);
    c.cls();
    time = performance.now();
    animationFrame = requestAnimationFrame(draw);
}

/**
 * Zeichnet alles
 */
function draw() {
    cancelAnimationFrame(animationFrame);
    drawFPS();
    /*Zeichne
    --------------*/

    /*--------------
     */
    calculateFPS();
    animationFrame = requestAnimationFrame(draw);
}
/**
 * Stoppt alles
 */
function stop() {
    cancelAnimationFrame(animationFrame);
}

/**
 * Zeichnet die FPS auf das Canvas
 */
function drawFPS() {
    c.fillText(WIDTH - 80, 25, "FPS: " + fps, "13px Times New Roman", "white");
    c.fillText(WIDTH - 80, 45, "Max. FPS: " + maxFPS, "13px Times New Roman", "white");
    c.fillText(WIDTH - 80, 65, "Min. FPS: " + minFPS, "13px Times New Roman", "white");
    c.fillText(WIDTH - 80, 85, "TPF: " + frameTime, "13px Times New Roman", "white");
}

/**
 * Berechnet die FPS
 */
function calculateFPS() {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
    }
    times.push(now);
    fps = times.length;
    if (fps < minFPS && now >= 2000)
        minFPS = fps;
    if (fps > maxFPS)
        maxFPS = fps;

}

init();