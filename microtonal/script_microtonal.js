window.onload = function() {
"use strict";

let notesPerOctave = 7;
let baseFrequency = 440;
let noteMultiplier = Math.pow(2, 1/notesPerOctave);

let audioCtx = new AudioContext();
let oscillator = audioCtx.createOscillator();


function playNote(inputFrequency) {
  oscillator.frequency.value = inputFrequency;
  oscillator.type = "sine";
  oscillator.connect(audioCtx.destination);
  oscillator.start();
}

function stopNote() {
  oscillator.frequency.value = 0;
}

/* This part is ugly and should be changed to a loop, same with the html part */
document.querySelector("#key0").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 0))}
document.querySelector("#key1").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 1))}
document.querySelector("#key2").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 2))}
document.querySelector("#key3").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 3))}
document.querySelector("#key4").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 4))}
document.querySelector("#key5").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 5))}
document.querySelector("#key6").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 6))}
document.querySelector("#key7").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 7))}
document.querySelector("#key8").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 8))}
document.querySelector("#key9").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 9))}
document.querySelector("#key10").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 10))}
document.querySelector("#key11").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 11))}
document.querySelector("#key12").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 12))}
document.querySelector("#key13").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 13))}
document.querySelector("#key14").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 14))}
document.querySelector("#key15").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 15))}
document.querySelector("#key16").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 16))}
document.querySelector("#key17").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 17))}
document.querySelector("#key18").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 18))}
document.querySelector("#key19").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 19))}
document.querySelector("#key20").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 20))}
document.querySelector("#key21").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 21))}
document.querySelector("#key22").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 22))}
document.querySelector("#key23").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 23))}
document.querySelector("#key24").onmousedown = function() {playNote(baseFrequency * Math.pow(noteMultiplier, 24))}

onmouseup = function() {stopNote();}
};

/* TO BE IMPLEMENTED! */

/*
while (notesPerOctave > 0) {
  var key = document.createElement("div");
  var key.classname = "key";
  var key.data = "0";
  notesPerOctave--;
}
*/

/* STYLING */
/* VOLUME KNOB*/
