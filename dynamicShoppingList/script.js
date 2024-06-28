// Holds references to the list, input, and button elements
const unorderedList = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");

addBtn.addEventListener("click", () => {
    // Hold a reference to the value in the input field and clears the text
    const textInput = input.value;
    textInput.value = "";

    // Creates a list item, span element, and delete button
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    // Appends the span and delete button to the list item
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);

    // Sets the text in the span to the stored input and adds text to the button
    span.textContent = input.value;
    deleteBtn.textContent = "Delete";

    // Appends the list item to the unordered list
    unorderedList.appendChild(listItem);

    deleteBtn.addEventListener("click", () => {
      unorderedList.removeChild(listItem);
      input.focus();
    });

  input.focus();

});