//UI variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');


//call event listeners
eventListeners();

//define event listeners
function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    taskList.addEventListener('click', deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}


//delete item
function deleteItem(e) {

    if (e.target.className === 'fas fa-times') {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

//delete all items
function deleteAllItems(e) {
    if (confirm('Do you realy want to delete all ?')) {
        // if (result===true){
        //     console.log('confrimed')
        //     for (let i=0;i<taskList.childNodes.length;i++){
        //         if(taskList.childNodes[i].nodeType===1){
        //             console.log(taskList.childNodes[i].remove());
        //         }
        //     }
        // }
        taskList.innerHTML = "";
    }
    e.preventDefault();
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
    li.textContent = input.value;
    //create a
    const a = document.createElement('a');
    a.className = 'float-end';
    a.setAttribute('href', '#')
    a.innerHTML = '<i class="fas fa-times"></i>'
    //add a to li
    li.appendChild(a);
    //add li to taskList
    taskList.appendChild(li);
    //clear input
    input.value = "";
    //escape from refresh
    e.preventDefault();

}