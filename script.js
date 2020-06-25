// prints "hi" in the browser's dev tools console
console.log("hi");

// Put query selectors on necessary components
var post = document.querySelector(".post");
var upVote = document.querySelector("#upVote");
var downVote = document.querySelector("#downVote");
var votes = document.querySelector("#votes");
var textArea = document.querySelector(".posting");
var textInput = document.querySelector("#userInput");
var trending = document.querySelector("#trending");
var trend = 1;
console.log(textArea);
var counter = 0;

// Create event listeners for the post, up vote, and down vote buttons
post.addEventListener("click", function(event) {
  textInput = textInput.value;
  document.getElementById('userInput').value = ""
  textArea.innerHTML += `<p>${textInput}</p>`;
});

upVote.addEventListener("click", function(event) {
  counter += 1;
  votes.innerHTML = `<h1>${counter}</h1>`;
  if (counter >= 10) {
    trendingTopic();
  }
});

downVote.addEventListener("click", function(event) {
  counter -= 1;
  votes.innerHTML = `<h1>${counter}</h1>`;
  if (counter <= -10) {
    clearText();
  }
});

// Write a function that clears the text and resets the counter
function clearText() {
  counter = 0;
  votes.innerHTML = `<h1>${counter}</h1>`;
  textArea.innerHTML = ``;
}

// Write a function that takes top voted posts and puts them in the trending topic portion of the page
function trendingTopic() {
  counter = 0;
  votes.innerHTML = `<h1>${counter}</h1>`;
  trending.innerHTML += `<div class="col-12"> <p>${trend}. ${textArea.innerHTML} </p></div>`;
  textArea.innerHTML = ``;
  trend += 1;
}
