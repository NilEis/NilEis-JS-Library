// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.
class SoundPlayer {
    constructor(audioContext, filterNode) {
        this.audioCtx = audioContext;
        this.gainNode = this.audioCtx.createGain();
        if (filterNode) {
            // run output through extra filter (already connected to audioContext)
            this.gainNode.connect(filterNode);
        } else {
            this.gainNode.connect(this.audioCtx.destination);
        }
        this.oscillator = null;
    }



    setFrequency(val, when) {
        if (when) {
            this.oscillator.frequency.setValueAtTime(val, this.audioCtx.currentTime + when);
        } else {
            this.oscillator.frequency.setValueAtTime(val, this.audioCtx.currentTime);
        }
        return this;
    }

    setVolume(val, when) {
        if (when) {
            this.gainNode.gain.exponentialRampToValueAtTime(val, this.audioCtx.currentTime + when);
        } else {
            this.gainNode.gain.setValueAtTime(val, this.audioCtx.currentTime);
        }
        return this;
    }

    setWaveType(waveType) {
        this.oscillator.type = waveType;
        return this;
    }

    play(freq, vol, wave, when) {
        this.oscillator = this.audioCtx.createOscillator();
        this.oscillator.connect(this.gainNode);
        this.setFrequency(freq);
        if (wave) {
            this.setWaveType(wave);
        }
        this.setVolume(1 / 1000);
        if (when) {
            this.setVolume(1 / 1000, when - 0.02);
            this.oscillator.start(when - 0.02);
            this.setVolume(vol, when);
        } else {
            this.oscillator.start();
            this.setVolume(vol, 0.02);
        }
        return this;
    }

    stop(when) {
        if (when) {
            this.gainNode.gain.setTargetAtTime(1 / 1000, this.audioCtx.currentTime + when - 0.05, 0.02);
            this.oscillator.stop(this.audioCtx.currentTime + when);
        } else {
            this.gainNode.gain.setTargetAtTime(1 / 1000, this.audioCtx.currentTime, 0.02);
            this.oscillator.stop(this.audioCtx.currentTime + 0.05);
        }
        return this;
    }
}

const Notes = {
    C0: 16.351,
    Cis0: 17.324,
    Db0: 17.324,
    D0: 18.354,
    Dis0: 19.445,
    Eb0: 19.445,
    E0: 20.601,
    F0: 21.827,
    Fis0: 23.124,
    Gb0: 23.124,
    G0: 24.499,
    Gis0: 25.956,
    Ab0: 25.956,
    A0: 27.5,
    Ais0: 29.135,
    Bb0: 29.135,
    B0: 30.868,
    C1: 32.703,
    Cis1: 34.648,
    Db1: 34.648,
    D1: 36.708,
    Dis1: 38.891,
    Eb1: 38.891,
    E1: 41.203,
    F1: 43.654,
    Fis1: 46.249,
    Gb1: 46.249,
    G1: 48.999,
    Gis1: 51.913,
    Ab1: 51.913,
    A1: 55,
    Ais1: 58.27,
    Bb1: 58.27,
    B1: 61.735,
    C2: 65.406,
    Cis2: 69.296,
    Db2: 69.296,
    D2: 73.416,
    Dis2: 77.782,
    Eb2: 77.782,
    E2: 82.407,
    F2: 87.307,
    Fis2: 92.499,
    Gb2: 92.499,
    G2: 97.999,
    Gis2: 103.826,
    Ab2: 103.826,
    A2: 110,
    Ais2: 116.541,
    Bb2: 116.541,
    B2: 123.471,
    C3: 130.813,
    Cis3: 138.591,
    Db3: 138.591,
    D3: 146.832,
    Dis3: 155.563,
    Eb3: 155.563,
    E3: 164.814,
    F3: 174.614,
    Fis3: 184.997,
    Gb3: 184.997,
    G3: 195.998,
    Gis3: 207.652,
    Ab3: 207.652,
    A3: 220,
    Ais3: 233.082,
    Bb3: 233.082,
    B3: 246.942,
    C4: 261.626,
    Cis4: 277.183,
    Db4: 277.183,
    D4: 293.665,
    Dis4: 311.127,
    Eb4: 311.127,
    E4: 329.628,
    F4: 349.228,
    Fis4: 369.994,
    Gb4: 369.994,
    G4: 391.995,
    Gis4: 415.305,
    Ab4: 415.305,
    A4: 440,
    Ais4: 466.164,
    Bb4: 466.164,
    B4: 493.883,
    C5: 523.251,
    Cis5: 554.365,
    Db5: 554.365,
    D5: 587.33,
    Dis5: 622.254,
    Eb5: 622.254,
    E5: 659.255,
    F5: 698.456,
    Fis5: 739.989,
    Gb5: 739.989,
    G5: 783.991,
    Gis5: 830.609,
    Ab5: 830.609,
    A5: 880,
    Ais5: 932.328,
    Bb5: 932.328,
    B5: 987.767,
    C6: 1046.502,
    Cis6: 1108.731,
    Db6: 1108.731,
    D6: 1174.659,
    Dis6: 1244.508,
    Eb6: 1244.508,
    E6: 1318.51,
    F6: 1396.913,
    Fis6: 1479.978,
    Gb6: 1479.978,
    G6: 1567.982,
    Gis6: 1661.219,
    Ab6: 1661.219,
    A6: 1760,
    Ais6: 1864.655,
    Bb6: 1864.655,
    B6: 1975.533,
    C7: 2093.005,
    Cis7: 2217.461,
    Db7: 2217.461,
    D7: 2349.318,
    Dis7: 2489.016,
    Eb7: 2489.016,
    E7: 2637.021,
    F7: 2793.826,
    Fis7: 2959.955,
    Gb7: 2959.955,
    G7: 3135.964,
    Gis7: 3322.438,
    Ab7: 3322.438,
    A7: 3520,
    Ais7: 3729.31,
    Bb7: 3729.31,
    B7: 3951.066,
    C8: 4186.009,
    Cis8: 4434.922,
    Db8: 4434.922,
    D8: 4698.636,
    Dis8: 4978.032,
    Eb8: 4978.032,
    E8: 5274.042,
    F8: 5587.652,
    Fis8: 5919.91,
    Gb8: 5919.91,
    G8: 6271.928,
    Gis8: 6644.876,
    Ab8: 6644.876,
    A8: 7040,
    Ais8: 7458.62,
    Bb8: 7458.62,
    B8: 7902.132,
    C9: 8372.018,
    Cis9: 8869.844,
    Db9: 8869.844,
    D9: 9397.272,
    Dis9: 9956.064,
    Eb9: 9956.064,
    E9: 10548.084,
    F9: 11175.304,
    Fis9: 11839.82,
    Gb9: 11839.82,
    G9: 12543.856,
    Gis9: 13289.752,
    Ab9: 13289.752,
    A9: 14080,
    Ais9: 14917.24,
    Bb9: 14917.24,
    B9: 15804.264
}

function example() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audio = new AudioContext();
    (new SoundPlayer(audio)).play(587.3, 0.5, "sine").stop(0.25);
}

function ladder(note, t, octave = 0) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audio = new AudioContext();
    eval("(new SoundPlayer(audio)).play(Notes." + note + "" + octave + ", 0.5, 'sine').stop(" + t + ")");
    if (octave + 1 <= 9)
        setTimeout(ladder, t * 1000, note, t, octave + 1);
}

function play(arr) {
    const regexp = RegExp('/-f\s+[0-9]+\s+-l\s+[0-9]+\s+-d\s+[0-9]+;\n*/g');
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audio = new AudioContext();
    let k = 0;
    if (!Array.isArray(arr)) {
        arr = arr.replace("\n", "");
        arr = arr.split(";");
    }
    let firstElement = arr.shift();
    firstElement = firstElement.split(",");
    const f = firstElement[0].split(" ")[1];
    const l = firstElement[1].split(" ")[2] / 1000;
    const d = firstElement[2].split(" ")[2];
    (new SoundPlayer(audio)).play(f, 0.5, 'square').stop(l);
    console.log("F: " + f + " L: " + l + " D: " + d);
    if (arr.length > 0)
        setTimeout(play, d, arr);
}

// var lines = document.getElementsByTagName("tr");
// var ergebniss = "";
// for (let i = 0; i < lines.length; i++) {
//     const td = lines[i].getElementsByTagName("td");
//     var note = td[0].innerHTML.split("/");
//     if (note.length == 1) {
//         note = note[0];
//         note = note.replaceAll("#", "is");
//         note = note.replaceAll("\n", "");
//         note = note.replaceAll("\t", "");
//         note = note.replaceAll(" ", "");
//         ergebniss += "static " + note + "" + td[1].innerHTML.replaceAll("\n", "").replaceAll("\t", "") + " = " + td[2].innerHTML.replaceAll("\n", "").replaceAll("\t", "") + ";\n";
//     } else {
//         let tmpNote = note;
//         note = tmpNote[0];
//         note = note.replaceAll("#", "is");
//         note = note.replaceAll("\n", "");
//         note = note.replaceAll("\t", "");
//         note = note.replaceAll(" ", "");
//         ergebniss += "static " + note + "" + td[1].innerHTML.replaceAll("\n", "").replaceAll("\t", "") + " = " + td[2].innerHTML.replaceAll("\n", "").replaceAll("\t", "") + ";\n";
//         note = tmpNote[1];
//         note = note.replaceAll("#", "is");
//         note = note.replaceAll("\n", "");
//         note = note.replaceAll("\t", "");
//         note = note.replaceAll(" ", "");
//         ergebniss += "static " + note + "" + td[1].innerHTML.replaceAll("\n", "").replaceAll("\t", "") + " = " + td[2].innerHTML.replaceAll("\n", "").replaceAll("\t", "") + ";\n";

//     }
// }