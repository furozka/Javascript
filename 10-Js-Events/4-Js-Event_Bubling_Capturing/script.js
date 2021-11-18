//Event Bubling

const form = document.querySelector("form");
const cardBody = document.querySelector('.card-body');
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//tıklama işlemi iç içe elemanlarda yapıldığında en içten itibaren her event tetiklenir
//bunu durdurmak için evente .stopPropogation() eklenir

/* form.addEventListener('click',function(e){
    console.log("form");
    e.stopPropagation(); //bunu eklemesen üst etiketlerin olaylarıda sırayla gerçekleşir içten dışa doğru
})
cardBody.addEventListener('click',function(e){
    console.log("cardBody");
    e.stopPropagation();
})
card.addEventListener('click',function(){
    console.log("card");
    e.stopPropagation();
})
container.addEventListener('click',function(){
    console.log("container");
    e.stopPropagation();
})
 */



//Event Capturing adEventListener'e 3. parametre olarak true verirsek iç içe olan eventler dıştan içe doğru gerçekleşir
//yani önce dış element container sonra card cardbody ve form şeklinde.
//bu şekilde kullanmak pek mantıklı değildir. çünkü stopPropogation yaptığında
//forma tıklasan bile container eventi gerçekleşip durur.


/* form.addEventListener('click',function(e){
    console.log("form");
    
},true)
cardBody.addEventListener('click',function(e){
    console.log("cardBody");
},true)
card.addEventListener('click',function(){
    console.log("card");
},true)
container.addEventListener('click',function(){
    console.log("container");
},true) */


//listedeki x linklerine erişip event ekledik
/* const deleteItems = document.querySelectorAll(".fa-times");

deleteItems.forEach(function(item){
    item.addEventListener('click',function(e){
        console.log(e.target);
        e.preventDefault();
    })
}) */

//ul ye erişip ul altındaki x iconlarına tıklandığında üst elementlerden olan li leri sildirmek. ikon parenti a parenti li 
//bu yüzden 2 kez parentElemnte gittik
const ul = document.querySelector('#task-list')
ul.addEventListener('click',function(e){

    if (e.target.className==='fas fa-times'){
        console.log(e.target.parentElement.parentElement.remove());
        e.preventDefault();
    }
})