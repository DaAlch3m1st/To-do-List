const btn1 = document.getElementById('btn1'); // We create a variable called btn1 to get the id btn1 which we will use when we want to create a task

function createTask() { // We create a function to add tasks entered in the input
    const input = document.getElementById('inputTask'); 
    const inputValue = input.value.trim();
    // We create two variables: one to get the id of the input and the other to get the value and remove the white spaces with "trim()"
    const list = document.getElementById('list');
    const node = document.createElement('li');

    if (inputValue === '') { // if the input value is a empty string display an alert that show to the user that cannot put a empty value in the to-do list
        alert('invalid input');
        console.error('Invalid input');
    };

    node.append(inputValue); // we append the text of the input into my new element "li"
    list.appendChild(node); // we append the child of the node to my "list"

    const deleteBtn = node.appendChild(createDeleteButton()); // appending the delete button function
    deleteBtn.addEventListener('click', function() { // event to delete the node when the user click the button
        node.remove(); 
    })    

    const doneBtn = node.appendChild(taskDoneButton())
    doneBtn.addEventListener('click', function() {
        node.style.backgroundColor = 'red' // Next: when the user click the button done, move the element "li/node" to a new div
    })

}

function createDeleteButton() { // Function to create the button that delete the node/li
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'delete';
    return deletebtn;
};

function taskDoneButton() {  // function to create the button when the user finish the task 
    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    return doneBtn;
}

btn1.addEventListener('click', createTask); // event to call the function createTask to create a new task with all his elements when the user click the button