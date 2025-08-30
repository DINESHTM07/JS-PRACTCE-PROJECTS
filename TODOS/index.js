// Ask the user the first question
let input = prompt("What would you like to do?");

// Create an array to store todos
const todos = ["Collect chicken eggs", "Clean litter box"];

// Game loop: keep asking until the user types "quit" or "q"
while (input !== "quit" && input !== "q") {
  
  if (input === "list") {
    console.log("**********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("**********");

  } else if (input === "new") {
    const newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);

  } else if (input === "delete") {
    const index = parseInt(prompt("Enter index to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Deleted: ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }

  // Ask again until quit/q is entered
  input = prompt("What would you like to do?");
}

// Once we leave the loop
console.log("You quit the app!");
