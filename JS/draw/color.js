/**
 * @file Stellt Funktionen für Farben zur verfügung
 * @module color.js
 */
/**
 * Konvertiert das Array zu einem String, in der Form rgb(r,g,b)
 * @param {number[3]} arr Die Farbe
 * @returns {string} Die Farbe
 */
function colorToRGB(arr) {
    return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
}

/**
 * Multipliziert eine Farbe mit einem Wert
 * @param {number[3]} rgb Die Farbe
 * @param {number} v Der Wert mit dem multipliziert wird
 * @returns {number[3]} Die Farbe
 */
function mulRGB(rgb, v) {
    return [clamp(rgb[0] * v, 0, 255), clamp(rgb[1] * v, 0, 255), clamp(rgb[2] * v, 0, 255)];
}

/**
 * Dividiert eine Farbe mit einem Wert
 * @param {number[3]} rgb Die Farbe
 * @param {number} v Der Wert mit dem dividiert wird
 * @returns {number[3]} Die Farbe
 */
function divRGB(rgb, v) {
    return [clamp(rgb[0] / v, 0, 255), clamp(rgb[1] / v, 0, 255), clamp(rgb[2] / v, 0, 255)];
}

/**
 * Addiert zwei Farben
 * @param {number[3]} c1 Farbe1
 * @param {number[3]} c2 Farbe2
 * @returns {number[3]} Die Farbe
 */
function addRGB(c1, c2) {
    return [clamp(c1[0] + c2[0], 0, 255), clamp(c1[1] + c2[1], 0, 255), clamp(c1[2] + c2[2], 0, 255)];
}

/**
 * Mixt zwei Farben
 * @param {number[3]} rgb1 Farbe1
 * @param {number[3]} rgb2 Farbe2
 * @param {number} v 
 * @returns {number[3]} Die Farbe
 */
function mixRGB(rgb1, rgb2, v) {
    return addRGB(mulRGB(rgb1, (1 - v)), mulRGB(rgb2, v));
}