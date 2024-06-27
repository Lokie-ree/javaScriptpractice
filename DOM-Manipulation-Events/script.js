// Main container holding all child elements
const container = document.querySelector("#container");

// Div with a class of "content" and text added
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// Paragraph element with red text
const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

// H3 element with blue text
const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

// Div element with a black border and pink background color
const blackDiv = document.createElement("div");
blackDiv.style.backgroundColor = "pink";
blackDiv.style.borderColor = "black";

// Second H1 element with some text
const secondH1 = document.createElement("h1");
secondH1.textContent = "I'm in a div";

// Second paragraph element with some text
const secondParagraph = document.createElement("p");
secondParagraph.textContent = "ME TOO!";

// Appending H1 & paragraph to the div
blackDiv.appendChild(secondH1);
blackDiv.appendChild(secondParagraph);

// Appending black div to main container
container.appendChild(blackDiv);

// Adds a click event to button 1 that changes background to blue and text to orange
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", (e) => {
  e.target.style.background = "blue";
  e.target.style.color = "orange";
});

// Adds a keydown event to button 2 that changes the background to black and text to red
const btn2 = document.getElementById("btn2");
btn2.addEventListener("dblclick", (e) => {
  e.target.style.background = "black";
  e.target.style.color = "red";
});

// Declares "buttons" as a node list which acts like an array and adds an event listener
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
  });
});