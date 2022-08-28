const mainInput = document.getElementById('main-input');
const mainButton = document.getElementById('main-button');
const taskContainer = document.getElementById('task-container');

let taskArray = [];
let counter = 0;


const render = () => {
    taskContainer.innerHTML = '';
    taskArray.forEach((element) => {
        const task = document.createElement('div');
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        const taskDeleteButton = document.createElement('button');
        taskDeleteButton.innerHTML = 'X'
        const taskTextArea = document.createElement('span');
        taskTextArea.innerHTML = element.value;

        task.append(taskCheckbox);
        task.append(taskTextArea);
        task.append(taskDeleteButton);
        
        taskContainer.append(task);

    })
    // alert(mainInput.value);
}

const deleteTask = () => {
    event.target
    
}

const addTask = () => {
    let content = mainInput.value;
    if (content) {
    let newTask = {
        value: content,
        status: false,
        id: counter++
    };
    taskArray.push(newTask);
    mainInput.value = '';
    render();
    }
}

const addTaskEnter = (event) => {
    if (event.key === 'Enter') {
        addTask();

    }
}




mainButton.addEventListener('click', addTask);
mainInput.addEventListener('keydown', addTaskEnter);
