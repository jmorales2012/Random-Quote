var quotes = {
    quote: [["I've learned that people will forget what you \
said, people will forget what you did, but people will \
never forget how you made them feel.", "Maya Angelou"],
["Whether you think you can or you think you can't \
you're right.", "Henry Ford"], ["Perfection is not \
attainable, but if we chase perfection we can catch \
excellence.", "Vince Lombardi"], ["Life is 10% what \
happens to me and 90% how I react to it.", "Charles \
Swindoll"], ["If you look at what you have in life, \
you’ll always have more. If you look at what you don’t \
have in life, you’ll never have enough.", "Oprah Winfrey"],
["Remember no one can make you feel inferior without your \
consent.", "Eleanor Roosevelt"],["I can’t change the \
direction of the wind, but I can adjust my sails to \
always reach my destination.", "Jimmy Dean"], ["Believe \
you can and you’re halfway there.", "Theodore Roosevelt"],
["Too many of us are not living our dreams because we are \
living our fears.", "Les Brown"], ["Do or do not. There is \
no try.", "Yoda"], ["Whatever the mind of man can conceive and \
believe, it can achieve.", "Napolean Hill"], ["Strive not to \
be a success, but rather to be of value.", "Albert Einstein"],
["I am not a product of my circumstances. I am a product \
of my decisions.", "Stephen Covey"], ["The most difficult \
thing is the decision to act, the rest is merely tenacity",
"Amelia Earhart"],["When everything seems to be going against \
you, remember that the airplance takes off against the wind, \
not with it.", "Henry Ford"], ["The only way to do great work \
is to love what you do.", "Steve Jobs"]]
};

var colors = {
    color: ["77b1a9", "D6B2E8", "3FB15E", "B15500", "B12700",
    "00A397", "CE6919", "540500", "5405E7", "C4CE59"]
};

function getNewQuote() {
/*  This function will choose a random quote/author combo from
    the 'quotes' object as well as a random color combo to
    change the background colors.
*/
    // randomQuote will be an array with [0] being the quote and
    // [1] being the author
    var randomQuote = quotes.quote[Math.floor(Math.random()
        * quotes.quote.length)];
    // Gets a random color for the body bg
    var randomColor = colors.color[Math.floor(Math.random()
        * colors.color.length)];

    // Change the quote text
    document.getElementsByClassName("quote-text")[0].innerHTML =
        randomQuote[0];

    // Change the author text
    document.getElementsByClassName("source")[0].innerHTML =
        "- " + randomQuote[1];

    // Change the body background color
    document.body.style.background = "#" + randomColor;

    // Change the quote-text font color
    //document.getElementsByClassName("quote-text")[0].style.color =
    //"#" + randomColor;

    // Change the new-quote button bg color
    document.getElementsByClassName("new-quote")[0].style.background =
        "#" + randomColor;
}


function tweetQuote() {
/*  This function will open a new tab and post the quote as a tweet to
    Twitter.
*/
    // Store the quote in the quote variable
    var quote = '"' + document.getElementsByClassName("quote-text")[0].innerHTML
        + '"';

    // Store the author in the author variable
    var author = document.getElementsByClassName("source")[0].innerHTML;

    // Takes off the "-" from the quote
    author = author.slice(1);

    var tweetText = quote + author + "#quotes";

    // Encode the quote so we can pass to Twitter
    var uriQuote = encodeURI(tweetText);

    // This is the fully encoded link to post a tweet
    var tweetLink = "https://twitter.com/intent/tweet?text=" + uriQuote;

    // Get the twitter button element and change its link
    var tweetButton = document.getElementsByClassName("tweetQuote")[0];
    //tweetButton.setAttribute("href", "#" + tweetLink);
    window.open(tweetLink);
}

window.onload = function() {
    getNewQuote();
};