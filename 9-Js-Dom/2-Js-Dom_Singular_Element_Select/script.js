// Selecting Elements

///////singular element selection .getElementById() //// .querySelector()


//.getElementById
let val;

val = document.getElementById("header");
val = document.getElementById("header").id;
val = document.getElementById("header").className;

val = document.getElementById("header");
let valid = val.id;
let valclassName = val.className;


val.style.fontSize="45px";
val.style.color="red";
val.style.fontWeight="bold";
// val.style.display="none";
val.innerText="Hello Welcome My to Do App"; //val header di headerin inner textini değiştirdik
val.innerHTML="<u>Hello Welcome My to Do App</u>"; //headerin inner textini değiştirdik içerisine taglar koyabildik
// console.log(val);


//document.querySelector()

val = document.querySelector("#header");
val = document.querySelector(".card"); //ilk card sınıfına sahip olanı seçer
val = document.querySelector("a"); //ilk a etiketini seçer
val = document.querySelector("li").style.color="red";
val = document.querySelector("li:last-child").style.color="blue";
val = document.querySelector("li:nth-child(2)").style.color="green";
val = document.querySelector("li:nth-child(3)").innerHTML="task item";


val = document.querySelector("li:nth-child(1)").className="list-group-item list-group-item-dark py-3"; //classları baştan yaz

val = document.querySelector("li:nth-child(1)").classList.add('active'); //active classını ekler




console.log(val);