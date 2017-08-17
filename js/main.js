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

let currentHeight = $('#welcome').css('height');
let currentFontSize = $('#welcome').css('font-size').split('px')[0];

console.log('Current Height');
console.log(currentHeight);

$('#buttonLeeds').click(function() {
    $('#welcome').text("Marching On Together").css("background-color", "black");
    let reducedFontSize = currentFontSize * .40;  
    $('#welcome').css("font-size", reducedFontSize + 'px');  
    $('#welcome').css("line-height", currentHeight);

});

$('#buttonSeahawks').click(function() {
    $('#welcome').text("I'm In").css("background-color", "blue");
    let newFontSize = currentFontSize;
    $('#welcome').css("font-size", newFontSize + 'px');

});

// Add Class to Id
$('#buttonEssex').click(function() {
    
    // Behaviour, adds class essex to welcome id
    // Thus css for welcome is re-run, .essex overwriting my-custom-h1 as it is after in css file
    $('#welcome').addClass('essex');
    
});


// https://github.com/kswedberg/jquery-smooth-scroll/blob/master/readme.md


// Try 1
let socialmedia = document.querySelector('#socialmedia');
console.log(socialmedia);
$(socialmedia).smoothScroll();

// Try 2
$('#socialmedia a').smoothScroll();

// Try 3
$('#socialmedia').bind('click', function() {
var $p1 = $('ul.navbar-nav a').last();
console.log($p1);
var p1Opts = $p1.smoothScroll('options') || {};
p1Opts.speed = p1Opts.speed === 1400 ? 400 : 1400;
$p1.smoothScroll('options', p1Opts);
});



