function colorToRGB(arr) {
    return "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
}

function mulRGB(rgb, v) {
    return [clamp(rgb[0] * v, 0, 255), clamp(rgb[1] * v, 0, 255), clamp(rgb[2] * v, 0, 255)];
}

function divRGB(rgb, v) {
    return [clamp(rgb[0] / v, 0, 255), clamp(rgb[1] / v, 0, 255), clamp(rgb[2] / v, 0, 255)];
}

function addRGB(c1, c2) {
    return [clamp(c1[0] + c2[0], 0, 255), clamp(c1[1] + c2[1], 0, 255), clamp(c1[2] + c2[2], 0, 255)];
}

function mixRGB(rgb1, rgb2, v) {
    return addRGB(mulRGB(rgb1, (1 - v)), mulRGB(rgb2, v));
}