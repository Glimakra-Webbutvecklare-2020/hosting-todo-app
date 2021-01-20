// Selectors
const submitButton = document.querySelector(".todo-button");
let removeDivs = document.querySelectorAll(".todo-remove");
const todoList = document.querySelector(".todo-list");
const textInput = document.querySelector(".todo-input");

// Functions
function addItem(event) {
    event.preventDefault();
    const text = textInput.value;

    if (text) {
        // create item
        const itemContainer = document.createElement("li");
        itemContainer.classList.add("todo-item-container");
        itemContainer.innerHTML = `
        <div class="todo-item">
            <div class="todo-text">${text}</div>
            <div class="todo-remove">x</div>
        </div>
    `;
        // Append to list
        todoList.appendChild(itemContainer);

        // Update list of remove divs
        removeDivs = document.querySelectorAll(".todo-remove");

        // Add eventlistener to new item
        removeDivs.forEach((b) => b.addEventListener("click", removeItem));

        // reset input
        textInput.value = "";
    }
}

function removeItem(event) {
    // get parent holding all items
    const grandParent = event.target.parentElement.parentElement;

    // remove it
    todoList.removeChild(grandParent);
}

// Event Listeners

// - Adding todos
submitButton.addEventListener("click", addItem);

// - Removing todos
removeDivs.forEach((b) => b.addEventListener("click", removeItem));
