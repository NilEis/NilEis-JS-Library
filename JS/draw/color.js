/**
 * @file Stellt die Klasse {@link Color} zur Verfügung
 */
class Color {
    /**
     * Initialisiert das Objekt mit den gegebenen Farben
     * @param {number} r Rot
     * @param {number} g Grün
     * @param {number} b Blau
     * @param {number} [a=1.0] Alpha 
     */
    constructor(r, g, b, a = 1.0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;

    }

    /**
     * Gibt die Farbe als Hex Wert zurück
     * @returns {string} Die Farbe
     */
    getHex() {
        return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }

    /**
     * Gibt die Farbe als Integer zurück
     * @returns {number} Die Farbe
     */
    getInt() {
        return ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b);
    }

    /**
     * Addiert die Farbe mit einer anderen
     * @param {Color} c Die zu addierende Farbe
     */
    add(c) {
        this.r = clamp(this.r + c.r, 0, 255);
        this.g = clamp(this.g + c.g, 0, 255);
        this.b = clamp(this.b + c.b, 0, 255);
    }

    /**
     * Zieht eine andere Farbe von der Farbe ab
     * @param {Color} c Die abzuziehende Farbe
     */
    sub(c) {
        this.r = clamp(this.r - c.r, 0, 255);
        this.g = clamp(this.g - c.g, 0, 255);
        this.b = clamp(this.b - c.b, 0, 255);
    }
    /**
     * Multipliziert die Farbe mit einem Wert
     * @param {number} v Der Wert mit dem multipliziert wird
     */
    mul(v) {
        this.r = clamp(this.r * v, 0, 255);
        this.g = clamp(this.g * v, 0, 255);
        this.b = clamp(this.b * v, 0, 255);
    }

    /**
     * Dividiert die Farbe mit einem Wert
     * @param {number} v Der Wert durch den geteilt wird
     */
    div(v) {
        this.r = clamp(this.r / v, 0, 255);
        this.g = clamp(this.g / v, 0, 255);
        this.b = clamp(this.b / v, 0, 255);
    }

    /**
     * Addiert zwei Farben
     * @param {Color} c1 Farbe 1
     * @param {Color} c2 Farbe 2
     * @returns {Color} Die neue Farbe
     */
    static add(c1, c2) {
        return new Color(clamp(c1.r + c2.r, 0, 255), clamp(c1.g + c2.g, 0, 255), clamp(c1.b + c2.b, 0, 255), clamp(c1.a + c2.a, 0.0, 1.0));
    }

    /**
     * Subtrahiert zwei Farben
     * @param {Color} c1 Farbe 1
     * @param {Color} c2 Farbe 2
     * @returns {Color} Die neue Farbe
     */
    static add(c1, c2) {
        return new Color(clamp(c1.r - c2.r, 0, 255), clamp(c1.g - c2.g, 0, 255), clamp(c1.b - c2.b, 0, 255));
    }

    /**
     * Konvertiert RGB zu Hex
     * @param {number} r Rot
     * @param {number} g Grün
     * @param {number} b Blau
     */
    static rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    /**
     * Konvertiert eine Farbe im Hexadezimalformat zu RGB
     * @param {string} hex Der Hex String
     */
    static hexToRgb(hex) {
        const c = parseInt(hex, 16);
        const r = (c >> 16) & 255;
        const g = (c >> 8) & 255;
        const b = c & 255;
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    /**
     * Vermischt zwei Farben um einen bestimmten Wert
     * @param {Color} c1 Farbe 1
     * @param {Color} c2 Farbe 2
     * @param {number} v Mischfaktor
     * @returns {Color} Die neue Farbe
     */
    static mix(c1, c2, v) {
        return new Color((c1.r * (1 - v)) + (c2.r * v), (c1.g * (1 - v)) + (c2.g * v), (c1.b * (1 - v)) + (c2.b * v));
    }
}