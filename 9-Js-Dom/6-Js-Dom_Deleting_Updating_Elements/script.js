

let taskList = document.querySelector('#task-list');
console.log(taskList);


//*****removing element .remove verildiği elemanı siler
// taskList.remove(); 

// taskList.childNodes[1].remove();
// taskList.children[1].remove();

// taskList.removeChild(taskList.children[1]); taskListing child elemanlarından istedigini siler



//******removing attribute

// taskList.children[0].removeAttribute('class');

// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute('class');
// }



//******replacing element

// const cardHeader = document.querySelectorAll('.card-header')[1]
// console.log(cardHeader);

// //create element

// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelectorAll('.card')[1]; burada üst elemana ulaşıp alt elemanı değiştirdik
// parent.replaceChild(h2,cardHeader)

// cardHeader.replaceWith(h2); buradaysa elemanları birbiriyle değiştirdik

let val;
link = taskList.children[0].children[0];
// val = link.className;
// val = link.classList;
// // val = link.classList[2];
// link.classList.add('bg-red');
// link.classList.remove('bg-red');
val = link.getAttribute('class'); //class attributesini aldık
link.setAttribute('href','google.com'); //href attributesini değiştirdik
val = link.hasAttribute('href'); //href attribute varmı true-false

console.log(val);
