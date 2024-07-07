const taskList = document.getElementById("task-list");
const addBtn = document.querySelector('.add-btn');

function addTask() {
    const input = document.querySelector('.input-task').value.trim();
    if (input === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="check-btn" onclick="completeTask(this)">
        ${input}
        <button class="x-btn" onclick="removeTask(this)">X</button>
    `;
    taskList.appendChild(li);
    document.querySelector('.input-task').value = "";
}

function completeTask(checkbox) {
    const li = checkbox.parentElement;
    li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    console.log("Task completed");
}

function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
    console.log("Task removed");
}

addBtn.onclick = addTask;

//Event delegation
/*
it means javascript won't know which elemt you are try to add listeners if it's created dynamically then it should add in
the html itself

*/ 