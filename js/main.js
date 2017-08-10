// https://www.w3schools.com/js/js_examples.asp

/*
// Finds the first h1 tag and replaces it
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

/*
// Finds element and replaces text, note : id on section does not work
let myWelcome = document.getElementById('welcome'); // -- ElementId no #
myWelcome.textContent = "I'm teOut";
*/

// https://www.w3schools.com/js/js_regexp.asp
// f_size.replace(/\D/g,''); // the number - find any non digit character, replace with blank i.e. 300px -> 300
// f_size.replace(/\d/g,''); // px - find any numbers and replace with blank i.e. 300px -> px
// / / search for contents with slashs
// g = global match
// \D = find a digit
// \d = find a digit

// +cakes takes the numeric representation of the variable cakes

/*
// Single Element
let elems = document.querySelector('#welcome'); // -- Query Selector #
let font_size = getComputedStyle(elems).fontSize;
let number = font_size.replace(/\D/g,''); // the number
let string = font_size.replace(/\d/g,''); // px
let new_font_size = (+number * 0.75) + string; // Reduce to 75%
elems.style.fontSize = new_font_size;
elems.textContent = "I'm Out";
*/

/*
// Multiple Elements
var elems = document.querySelectorAll('*');
for (var i=elems.length; i--;) {
    var f_size = getComputedStyle(elems[i]).fontSize;
    var numb   = f_size.replace(/\D/g,''); // the number
    var val    = f_size.replace(/\d/g,''); // px
    elems[i].style.fontSize = (+numb / 3) + val;    
}
*/

// *********************//
// * Work in Progress * //
// *********************//

let elems = document.querySelector('#welcome');
let font_size = getComputedStyle(elems).fontSize;
let number = font_size.replace(/\D/g,''); // the number
let string = font_size.replace(/\d/g,''); // px
let new_font_size = (+number * 0.75) + string; // Reduce to 75%
elems.style.fontSize = new_font_size;
elems.textContent = "I'm Out";

// On contact button click, re-set Welcome text
document.getElementById("button").addEventListener("click", myFunction);
function myFunction() {
    let elems = document.querySelector('#welcome');
    elems.textContent = "I'm In";
}