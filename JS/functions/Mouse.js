/**
 * @file Stellt Funktionen zum Zugriff auf die Maus zur verfügung
 * @module mouse.js
 */

/**
 * @var mouseX Die x-Position der Maus 
 * @type {number}
 */
var mouseX = 0;

/**
 * @var mouseY Die y-Position der Maus
 * @type {number}
 */
var mouseY = 0;

var mouseDown = 0;

/**
 * @var mouseDown Die Variabel speichert, ob eine der Maustasten gedrückt ist
 * @type {boolean}
 * @example
 * if(mouseDown)
 *      console.log("Eine Maustaste wurde gedrückt");
 * else
 *      console.log("Es wurde keine Taste gedrückt");
 * //Kürzer:
 * console.log(mouseDown ? "Eine Maustaste wurde gedrückt" : "Es wurde keine Taste gedrückt")
 */

document.body.onmousedown = function (e) {
    mouseDown = 1;
}

document.body.onmouseup = function () {
    mouseDown = 0;
}
//Die Funktion wird ausgeführt wenn die Maus bewegt wird.
function updateMouse(e) {
    mouseX = e.pageX - c.canvas.offsetLeft;
    mouseY = e.pageY - c.canvas.offsetTop;
}