# ONLINE MESSAGE BOARD

One of the major uses that we have for the Internet these days is through the use of social media. In particular, we love to show our support for things we like we "likes" or "up votes" and things we dislike we "reactions" and "down votes".

![](https://cdn.glitch.com/945c67ca-a80c-4709-8265-ad042d08b625%2Fdontboo.gif?v=1593095334950)

## GOAL

You are going to make a small version of Reddit. The initial idea of Reddit is that you get to post something and then people can up vote or down vote what you posted. If something is up voted enough it is "Trending". In our mini-Reddit, if a topic is down voted by a certain amount, the website should remove that post.  
![](https://media.giphy.com/media/j3Jnx8Ntntkf23keVx/giphy.gif)

## TASKS
For today's project you should do the following:
1. Use `document.querySelector` to select for both the up and down arrow. Using `addEventListener()`, update the value of the `div` with a `class="votes"`. The `h1` element should update every time the user clicks the up and down arrow. **REMEMBER** to update the value of `h1` you should be using `innerHTML`.
2. Get the information that the user puts into the form that has an id of `id="userInput"`. You should store this information in a variable using `document.querySelector`.
3. Select for the post button using `document.querySelector()` and attach an event listener to run every time the button is clicked.
4. When the button is clicked, use `innerHTML` to update the `div` that has `class="posting"`. This div should update with the post that the user put in the input field. **NOTE**: Use the `.value` property to get the value from an input field. For example, the following will log the post to the console:
```javascript
var textInput = document.querySelector("#userInput");
post.addEventListener("click", function(event) {
  textInput = textInput.value;
  console.log(textInput);
}
```
5. Declare a function called trending. This function should check if the current post has more than a certain amount of up votes (e.g. the gif checked for when there was more than 10 votes). If the topic has more than that amount of votes, the post should move down to the "Trending Topics" portion of the page.
6. Call the trending function every time the up vote button is clicked. The trending topics should keep updating with new topics *without* clearing out old topics.
7. Declare a function called clearText. This function should check if the current post has a certain amount of down votes. if the topic has this amount of down votes it is clearly not popular, so clear it from the page. 
8. Call the clearText function every time the down vote button is clicked.

## EXTENSIONS
- Currently the input field doesn't clear when you post. Clear the input field every time the person clicks "post"
- Rank the trending topics (think about how Twitter has top 20 trending topics).
- Put a clear button at the bottom of the page that will clear all trending topics when clicked.
- Can you add another type reaction in here that influences how the whether the topic is trending (think of Facebook and the reactions like angry and love)? For example, can you add a love button that is worth more votes than an up vote?
- The user wants to post pictures instead of text (think of how Instagram works). Can you redesign this app so that people can upload and post pictures?
