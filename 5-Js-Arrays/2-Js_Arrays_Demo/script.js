// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
let cars = ["Bmw","Mercedes","Opel","Mazda"];
// var arr2 = new Array("Bmw","Merdeces","Opel","Mazda")

// Dizi kaç elemanlıdır ?
console.log((cars.length));
// Dizinin ilk ve son elemanı nedir ?
console.log(cars);
console.log("son eleman: "+cars[cars.length-1]);
console.log("ilk eleman: "+cars[0]);
// "Renault" değerini dizinin sonuna ekleyin.
cars.push("Renault")
console.log(cars);
// "Toyota" değerini dizinin başına ekleyin.
cars.unshift("Toyota");
console.log(cars);
cars.unshift("Seat")
console.log(cars);
// "Seat" değerini siliniz.
cars.shift();
console.log(cars)
// "Toyota" değerini siliniz.
cars.shift()
console.log(cars)
// Dizi elemanlarını ters çevirin
cars.reverse();
console.log(cars);
// Dizi elemanlarını alfabetik olarak sıralayın.
cars.sort();
console.log(cars);
// [1,2,5,80] dizisini sıralayın.
console.log(([1,2,5,80].sort()));
// "Opel" değeri dizinin bir elemanımıdır ?
console.log(cars.includes("Opel"));

var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.
console.log((str.split(",")),typeof (str.split(",")));
// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
let arr = [1,2,3,4]
let arr2 = [5,6,7,8]
let concatArr = arr.concat(arr2)
console.log(concatArr);
// Oluşturulan diziden son 2 elemanı siliniz.
concatArr.splice((concatArr.length-2),2)
console.log(concatArr);
/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/
let studentA = ["Yiğit","Bilgi",2010]
let studentB = ["Sena","Turan",1999]
let studentC = ["Ahmet","Turan",1998]   
let students = [[studentA],[studentB],[studentC]]