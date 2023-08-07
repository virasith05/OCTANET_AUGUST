// Task list
let tasks = [];

// Add task function
function addTask() {
  const taskInput = document.getElementById("task-input");
  const prioritySelect = document.getElementById("priority-select");
  const deadlineInput = document.getElementById("deadline-input");

  const task = {
    description: taskInput.value,
    priority: prioritySelect.value,
    deadline: deadlineInput.value
  };

  tasks.push(task);
  displayTasks();
  clearForm();
}

// Display tasks function
function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const taskDetails = document.createElement("span");
    taskDetails.textContent = task.description + " (Priority: " + task.priority + ", Deadline: " + task.deadline + ")";
    li.appendChild(taskDetails);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      displayTasks();
    });
    li.appendChild(removeButton);

    taskList.appendChild(li);
  });
}

// Clear form function
function clearForm() {
  const taskInput = document.getElementById("task-input");
  const prioritySelect = document.getElementById("priority-select");
  const deadlineInput = document.getElementById("deadline-input");

  taskInput.value = "";
  prioritySelect.value = "low";
  deadlineInput.value = "";
}