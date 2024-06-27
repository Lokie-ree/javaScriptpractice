
// Selects the link, stores a reference of it inside a variable, and modifies properties
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// Grabs a reference to the section element and creates a new paragraph
const sect = document.querySelector("section");
const para = document.createElement("p");

// Changes the text of the paragraph and appends it to the end of the section element
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

// Adds a text node to the paragraph containing the link
const text = document.createTextNode( " - the premier source for web development knowledge.",);

// Grabs a reference to the paragraph containing the link and appends the text node
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Moves paragraph down to the bottom of the section
sect.appendChild(linkPara);

// Removes a node
sect.removeChild(linkPara);
linkPara.remove();
//linkPara.parentNode.removeChild(linkPara);

para.setAttribute("class", "highlight");