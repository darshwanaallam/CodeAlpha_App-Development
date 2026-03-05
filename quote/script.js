const quotes = [

{
quote: "The best way to get started is to quit talking and begin doing.",
author: "Walt Disney"
},

{
quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
author: "Winston Churchill"
},

{
quote: "Don’t let yesterday take up too much of today.",
author: "Will Rogers"
},

{
quote: "If you are working on something exciting, it will keep you motivated.",
author: "Steve Jobs"
},

{
quote: "Dream big and dare to fail.",
author: "Norman Vaughan"
}

];

function newQuote(){

let randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById("quote").innerText = quotes[randomNumber].quote;

document.getElementById("author").innerText = "- " + quotes[randomNumber].author;

}

window.onload = newQuote;