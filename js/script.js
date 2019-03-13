/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*function to create random color for the background */
function randomBgColor() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + ", " +  y + ", " + z + ")";

  /* change the document background color */
  document.body.style.background = bgColor;
}

/* Array of Quotes */
var quotes = [
  { quote: "Change your thoughts and you change your world.",
    source: 'Norman Vincent Peale'},
  { quote: "The happiest people don't have the best of everything, they make the best of everything.",
    source: 'Oprah Winfrey' },
  { quote: "I'm king of the world.", 
    source: 'Titanic',
    citation: 'movie',
    year: 1997 },
  { quote: "I'll be back.", 
    source: 'The Terminator',
    citation: 'movie',
    year: 1984 },
  { quote: "Nothing is impossible, the word itself says 'I'm possible'!",
    source: 'Audrey Hepburn'},
  {quote: "Problems are not stop signs, they are guidelines.",
   source: "Robert H. Schuller"},
  {quote: "Life isn't about finding yourself. Life is about creating yourself.",
   source: "George Bernard Shaw"},
  {quote: "The only true wisdom is in knowing you know nothing.",
   source: "Socrates"},
  {quote:"Today you are you! That is truer than true! There is no one alive who is you-er than you!",
   source: "Dr. Seuss"}
  ]

/* function to create a variable to store a random number & 
    to return a random quote object from the quotes array.*/
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  for(var i = 0; i < quotes.length; i++) {
  return quotes[randomNumber];
  }
}

/*the printQuote function to calls the randomQuote function and prints out the quotes onto the targeted html tags*/
function printQuote(){ 

/* calls the randomrgbcolor function to change the background everytime they click the button */
randomBgColor();

var randomQuote = getRandomQuote()
var htmlString = '';
 htmlString += '<p class="quote"> ' + randomQuote.quote + '</p>';
 htmlString += '<p class="source"> ' + randomQuote.source;

/*create if statement to check if array contain any citation or a year property */
if (randomQuote.citation && randomQuote.year !== undefined) {
 htmlString += '<span class="citation">' + randomQuote.citation + '</span>'
 htmlString += '<span class="year">' + randomQuote.year + '</span>';
} else if (randomQuote.citation !== undefined) {
  htmlString += '<span class="citation">' + randomQuote.citation + '</span>'
} else if (randomQuote.year !== undefined) {
  htmlString += '<span class="citation">' + randomQuote.citation + '</span>'
} 

/*close the p html tag */
htmlString += '</p>';

/* target div id "quote-box" and set its innerhtml to htmlString */ 
document.getElementById('quote-box').innerHTML = htmlString;
};

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);























