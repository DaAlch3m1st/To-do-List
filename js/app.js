const input = document.getElementById('inputTask'); 
const addTaskBtn = document.getElementById('addTaskBtn');
const modal = document.getElementById('modal');

function open_modal() {
    const openModal = document.getElementById('openModalBtn');

    openModal.addEventListener('click', function(e) {
        e.defaultPrevented;
        modal.classList.add('modal--show');
    });
}

function close_modal() {
    const closeModal = document.getElementById('closeModalBtn');

    closeModal.addEventListener('click', function(e) {
        e.preventDefault;
        modal.classList.remove('modal--show');
    })
    modal.classList.remove('modal--show');
}

function createTask(task) {
    const li = document.createElement('li');
    li.classList.add('tasks');
    li.textContent = task;
    return li;
}

function addTask(task) {
    const taskContainer = document.getElementById('list');
    const taskElement = createTask(task);
    taskContainer.appendChild(taskElement);
}

function addTaskToDOMEvent() {
    open_modal();
    addTaskBtn.addEventListener('click', function() {
        const inputValue = input.value.trim();
        if (inputValue === '') {
            alert('error');
            return;
        }
        addTask(inputValue);
        close_modal();
    });
    close_modal();
}

addTaskToDOMEvent();