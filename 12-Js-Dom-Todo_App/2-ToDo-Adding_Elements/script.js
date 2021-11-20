//UI variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');


//call event listeners
eventListeners();

//define event listeners
function eventListeners() {
    form.addEventListener('submit', addNewItem);
}


//add new item
function addNewItem(e) {


    if (input.value === "") {
        alert('Add New Item');
    }
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    // li text content input value
    li.textContent=input.value;
    //create a
    const a = document.createElement('a');
    a.className = 'float-end btn-delete';
    a.innerHTML = '<i class="fas fa-times"></i>'
    //add a to li
    li.appendChild(a);
    //add li to taskList
    taskList.appendChild(li);
    //clear input
    input.value="";
    //escape from refresh
    e.preventDefault();
    
}

