/* 12.26
Grant  */
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Incomplete';
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
        completeButton.textContent = li.classList.contains('completed') ? 'Incomplete' : 'Complete';
    });

    li.appendChild(removeButton);
    li.appendChild(completeButton);

    taskList.appendChild(li);

    taskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);