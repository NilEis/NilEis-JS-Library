/**
 * @file Stellt mathematische Funktionen zur verfügung
 * @module math.js
 */

/**
 * Konvertiert eine Zahl, aus einem Bereich in einen anderen Bereich
 * Vorbild dafür war die {@link https://github.com/processing/p5.js/blob/master/src/math/calculation.js#L459|level.map} Funktion von {@link https://github.com/processing/p5.js|p5.js}.
 * @param {number} n Der Wert, der verändert werden soll    
 * @param {number} start1 Der Startwert des ersten Bereichs
 * @param {number} stop1 Der Endwert des ersten Bereichs
 * @param {number} start2 Der Startwert des zweiten Bereichs
 * @param {number} stop2 Der Endwert des zweiten Bereichs
 * @return {number} Die entsprechende Zahl im zweiten bereich
 * @example
 * var x = mapValue(0.5,0,1,0,10);
 * //Erwartete Ausgabe: 5
 */
function mapValue(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

/**
 * Die Funktion, testet ob ein Punkt oder Kreis ausserhalb eines Rechtecks ist
 * @param {vector2D} loc Die Position des Punktes
 * @param {vector} rect Die untere rechte Ecke des Rechtecks
 * @param {number} [r = 0] Der Radius, falls getestet werden soll ob ein Kreis ausserhalb des Rechtecks ist
 * @return {boolean}    True, wenn der Punkt ausserhalb des Rechteclks ist, sonst false
 */
function outOfBounds(loc, rect, r = 0) {
    if (loc.x + r > rect.x || loc.x - r < 0 || loc.y + r > rect.y || loc.y - r < 0)
        return true;
    return false;
}

/**
 * Die Funktion rechnet die Position eines Punktes in die entsprechende Position im {@link level#grid|grid} um.
 * @param {vector2D} loc Die position die zu einer Zellenkoordinate umgerechnet werden soll
 * @return {vector2D} Die Position im {@link level#grid|grid}
 */
function toCell(loc, tilesize) {
    let x = Math.floor(loc.x / tilesize);
    let y = Math.floor(loc.y / tilesize);
    return new vector2D(x, y);
}

/**
 * Die Funktion berechnet die {@link https://de.wikipedia.org/wiki/Manhattan-Metrik | Manhatten Distanz} zwische zwei punkten
 * @param {number} sX Die x-Position des ersten Punktes
 * @param {number} sY Die y-Position des ersten Punktes
 * @param {number} dX Die x-Position des zweiten punktes
 * @param {number} dY Die y-Position des zweiten Punktes
 * @return {number} Die Entfernung zwischen den punkten
 */
function manhattenDistance(sX, sY, dX, dY) {
    let tempX = Math.abs(dX - sX);
    let tempY = Math.abs(dY - sY);
    return tempX + tempY;
}

/**
 * Die Funktion berechnet den {@link https://de.wikipedia.org/wiki/Euklidischer_Abstand | euklidischen Abstand} zweier Punkte
 * @param {number} sX Die x-Position des ersten Punktes
 * @param {number} sY Die y-Position des ersten Punktes
 * @param {number} dX Die x-Position des zweiten punktes
 * @param {number} dY Die y-Position des zweiten Punktes
 * @return {number} Die Entfernung zwischen den punkten
 */
function euclideanDistance(sX, sY, dX, dY) {
    let tempX = Math.abs(dX - sX);
    let tempY = Math.abs(dY - sY);
    return Math.sqrt((tempX * tempX) + (tempY * tempY));
}

/**
 * Wandelt einen Winkel von rad zu deg um
 * @param {number} rad Der Winkel in rad
 */
function radToDeg(rad) {
    return rad * (180 / Math.PI);
}

/**
 * Wandelt einen Winkel von deg zu rad um
 * @param {number} deg Der Winkel in deg
 */
function degToRad(deg) {
    return deg * (Math.PI / 180);
}

/**
 * 
 * @param {number} p Der Wert, der genuzt wird
 * @param {number} min Das Minimum
 * @param {number} max Das Maximum
 */
function clamp(p, min, max) {
    return Math.min(Math.max(min, p), max)
}

/**
 * Die Funktion berechnet die Entfernung zwischen zwei Punkten im 2D-Raum
 * @param {number} ax Der Startpunkt in der x-Ebene
 * @param {number} ay Der Startpunkt in der y-Ebene
 * @param {number} bx Der Endpunkt in der x-Ebene
 * @param {number} by Der Endpunkt in der y-Ebene
 */
function dist(ax, ay, bx, by) {
    ax -= by;
    ay -= by;
    return (Math.sqrt(ax * ax + bx * bx));
}

/**
 * Interpoliert zwischen zwei Werten
 * @param {number} a 1. Wert
 * @param {number} b 2. Wert
 * @param {number} x Parameter
 */
function cSineInterpolate(a, b, x) {
    const ft = x * Math.PI;
    const f = (1 - Math.cos(ft)) * 0.5;

    return a * (1 - f) + b * f;
}

/**
 * Die Methode ergänzt Nullen vor der Zahl, so dass die Zahl auf eine bestimmte größe kommt
 * Bsp. 15.pad(4) => "0015"
 * @param {number} size Die Anzahl an Nullen
 */
Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}
/**
 * Gibt den Sinus von x zurück
 * @param {number} x Der Wert in Radien
 * @returns {number} Der Sinus von x
 */
function newSine(x) {
    return sineTable[Math.floor((x % 360) * 100)];
}

const sineTable = new Float32Array(36000);
for (let i = 0; i < 36000; i++)
    sineTable[i] = Math.sin(i / 100);

/**
 * Gibt den Cosinus von x zurück
 * @param {number} x Der Wert in Radien
 * @returns {number} Der Cosinus von x
 */
function newCos(x) {
    return sineTable[Math.floor((x % 360) * 100)];
}
const cosTable = new Float32Array(36000);
for (let i = 0; i < 36000; i++)
    cosTable[i] = Math.cos(i / 100);