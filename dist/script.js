// Dont need to use DOMContentLoaded since script is defer in html
// Added anyways for requirements and double checking
function domLoaded() {
  
  // Initialize handlers 
  const addBtn = document.getElementById("addBtn");
  const taskInput = document.getElementById("taskInput");

  addBtn.addEventListener("click", addBtnClick);

  taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      addClick();
    }
  });
  

  // Initialize remove handlers for existing tasks
  const doneButtons = document.querySelectorAll(".done-btn");
  doneButtons.forEach(btn => btn.addEventListener("click", removeTask));
}

function addClick() {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value.trim();

  // Doesn't allow empty tasks
  if (newTask === "") {
    return; 
  }

  // Calls addTask before resetting taskInput
  addTask(newTask);
  taskInput.value = "";
  taskInput.focus();
}

function addTask(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;

  const ol = document.querySelector("ol");
  ol.appendChild(li);

  const doneButtons = document.querySelectorAll(".done-btn");
  const lastButton = doneButtons[doneButtons.length - 1];
  lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
  const li = event.target.parentNode;
  const ol = li.parentNode;
  ol.removeChild(li);
}

document.addEventListener("DOMContentLoaded", domLoaded);
