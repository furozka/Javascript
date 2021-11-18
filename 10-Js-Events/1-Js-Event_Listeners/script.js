// Event Listeners

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');


function btnClick(e){
    console.log('btn clicked')
    e.preventDefault();
}

function btnClick2(){
    console.log('btn 2 clicked')
}
// btn.addEventListener('click',btnClick);
// // btn.addEventListener('click',btnClick2); bir butona birden fazla event atayabilirsin
// btn2.addEventListener('click',btnClick2);


//eventing method ve özelliklerine erişmek

btn.addEventListener('mouseover',function(e){
    let val;
    // val = e.target;
    val = e.type;
    console.log(val);
    
})