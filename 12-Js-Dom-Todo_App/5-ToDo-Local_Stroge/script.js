//UI variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;

//call event listeners
eventListeners();

//load items
loadItems();

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

            //delete item from local storoge
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}

function deleteItemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function (item, index) {
        if (item === text) {
            items.splice(index, 1);
        }
    })
    localStorage.setItem('items', JSON.stringify(items));
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
        localStorage.clear();
    }
    e.preventDefault();
}

//load items
function loadItems() {

    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}

//set item to local stroge
function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

//get items from local storoge
function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}


//create new item
function createItem(text) {
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    // li text content input value
    li.textContent = text;
    //create a
    const a = document.createElement('a');
    a.className = 'float-end';
    a.setAttribute('href', '#')
    a.innerHTML = '<i class="fas fa-times"></i>'
    //add a to li
    li.appendChild(a);
    //add li to taskList
    taskList.appendChild(li);
}


//add new item
function addNewItem(e) {


    if (input.value === "") {
        alert('Add New Item');
    } else {

        //create item
        createItem(input.value);

        //addto local stroge
        setItemToLS(input.value);
        //clear input
        input.value = "";

    }
    //escape from refresh
    e.preventDefault();

}