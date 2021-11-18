// Element Selection

//////Multiple Selection

//document.getElementsByClassName() bunda foreach kullanılamıyor diğerlerinde 
//queryselectorallda felan foreach kullanılabiliyor

let val;

val = document.getElementsByClassName('list-group-item');
val = document.getElementsByClassName('list-group-item')[0];

val = document.getElementsByClassName('list-group-item');
let val0 = val[0];

val = document.getElementsByClassName('list-group-item');
val[0].style.color="green";
val[0].style.fontSize="30px";
// val[2].textContent="pokemon";

for (let i=0; i<val.length;i++){
    console.log(val[i].style.color="red");
}
// console.log(val0)


//document.getElemensByTagName()

val = document.getElementsByTagName('div');
val[0].style.backgroundColor="yellow";

val = document.getElementById('task-list').getElementsByTagName('a');
// console.log(val);

//document.querySellectorAll()

val = document.querySelectorAll('li');
val.forEach(function(item,index){
    item.textContent=`${index} - hello`;
})
// console.log(val)

val = document.querySelectorAll('li:nth-child(odd)');

val.forEach(function(item){
    item.style.backgroundColor='#ccc'
})
console.log(val);