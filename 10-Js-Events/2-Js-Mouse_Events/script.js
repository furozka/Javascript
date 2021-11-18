//mouse events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');


//click tıkladıktan sonra
function eventHandler(event){
    console.log(event.type);
}
btn.addEventListener('click',eventHandler);


//double click ikikez tıklandığında hızlıca

btn.addEventListener('dblclick',eventHandler);

//mousedown tıklıyken

btn.addEventListener('mousedown',eventHandler);

//mouseup tıklayıp bıraktığında

btn.addEventListener('mouseup',eventHandler);

//mouseenter  mouse ul listesinin alanına girince tetiklenir

ul.addEventListener('mouseenter',eventHandler);

//mouseleave mouse ul listesinin alanından çıkınca tetiklenir

ul.addEventListener('mouseleave',eventHandler);

//mouseover liste içinde baska elemente geçincede tetiklenir

ul.addEventListener('mouseover',eventHandler);

//mouseout liste içinde baska elemente geçincede tetiklenir

ul.addEventListener('mouseout',eventHandler);

//mousemove liste içinde hareket ettikçe tetiklenir

ul.addEventListener('mousemove',eventHandlerr);
const h5 = document.querySelector('h5');
function eventHandlerr(event){
    console.log(event.type);
    h5.textContent=`X: ${event.offsetX} Y: ${event.offsetY}`
}