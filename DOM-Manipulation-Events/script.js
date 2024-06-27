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


