const btn1 = document.getElementById('btn1'); // We create a variable called btn1 to get the id btn1 which we will use when we want to create a task

function createTask() { // We create a function to add tasks entered in the input
    const input = document.getElementById('inputTask'); 
    const inputValue = input.value.trim();
    // We create two variables: one to get the id of the input and the other to get the value and remove the white spaces with "trim()"
    if (inputValue) {
        const list = document.getElementById('list');
        const newElement = document.createElement('li');
        newElement.textContent = inputValue;
        // Here we create two variables: "list" will store the tasks added by the user, and "newElement" will create an "li" element that will be added according to the user's input

        // We create a const variable to delete the task that we want to delete
        const deleteButton = deleteTaskButton();
        deleteButton.addEventListener('click', function() {
            list.removeChild(newElement); // Remove the task's 'li' element
        });

        // Append the delete button to the new element
        newElement.appendChild(deleteButton);
        
        // Create a done button for the task
        const doneButton = doneTaskButton();
        newElement.appendChild(doneButton);

        // Append the new element (with buttons) to the list
        list.appendChild(newElement);

        input.value = '';
        // Here we use the "newElement" variable and the "textContent" property to add the user's input content
        // Then we append this text to the "list" variable, which is the parent of the "newElement" variable
        // Finally, in our function, every time the user adds a task, the input will be reset to a blank space
    };
};

function deleteTaskButton() { // when you click this the task is deleted and not display anymore in the page
    const button = document.createElement("button");
    button.textContent = "DELETE";
  
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash");  // Assuming Font Awesome
    button.appendChild(trashIcon);

    return button;
};

function doneTaskButton() { // this function is when the user finish his task and click the button the task crossed out (this can change in a future)
    const button = document.createElement("button");
    button.textContent = "DONE";
  
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fas", "fa-check");  // Assuming Font Awesome
    button.appendChild(checkIcon);

    return button;
};



btn1.addEventListener('click', createTask);
 // Now, every time the user adds a task, they need to click the button for it to be reflected on the page (as long as the input is not empty)
