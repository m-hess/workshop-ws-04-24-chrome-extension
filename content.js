/* from "Ok I tried box" */
//create div
var div = document.createElement("div");

//get image
var imgPath = chrome.extension.getURL('img/mohawk.jpg');

//set div's innerHtml
div.innerHTML = `
<div id="displayExtStyles">
<div id="clippy">
</div>
<img id="clippyImg" src=${imgPath} />
</div>
`;

//append div to body
document.body.appendChild(div);


/* from "Ok I tried box" */
//quotes
const quotesURL = chrome.runtime.getURL('quotes.json');
var quotes;
fetch(quotesURL).then((response) => response.json())
  .then((json) => {
    quotes = json;
    // say one right away
    sayQuote(quotes);
    // set an interval with some randomness to update the quote
    setInterval( () => sayQuote(quotes), 5000 + Math.random()*3000);
  })
  .catch((error) => console.log(error, error.message));


/* from "Ok I tried box" */
function sayQuote(qts) {
  var quote = qts.quotes[Math.floor(Math.random() * qts.quotes.length)];
  document.getElementById("clippy").innerHTML = `<div id="speech-bubble"><p>${quote}</p></div>`;
  console.log(quote);
  }