//-------Scope
//yazdığımız bir değişkenin hangi kod parçası tarafından ulaşılabilir olup olmaması

//-----Block Scope //bir blok içinde tanımlanan değer:
//let ile tanımlanmışsa dışarıda kullanılamaz var ile tanımlanmışsa kullanılabilir

/* {
    let x = 2;
}
// x can NOT be used here

{
    var x = 2;
}
// x CAN be used here 
*/

//-----Local Scope //fonksiyon içinde tnaımlanan değerler fonksiyon dışında kullanılamazlar globablto demedikçe

/* 
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName
 */
//------Function Scope

/* 
function myFunction() {
    var carName = "Volvo"; // Function Scope
}

function myFunction() {
    let carName = "Volvo"; // Function Scope
}

function myFunction() {
    const carName = "Volvo"; // Function Scope
}
 */
//Global Scope

var x = 2; // Global scope

let x = 2; // Global scope


//fonksiyon içinde tanımlanan değişkenler fonksiyon içinde global değişkenleri ezerler aynı isimde olsalar bile 
//fonksiyonlar kendi scopelerini oluşturur
//block lar kendi scopelerini oluşturmaz global değişkeni etkilerler.

//let ve const block scope oluşturur
//var ile tanımlanan değişken dışarıdan ulaşılabilir yani bir for loopunda i değişkenini let ile tnaımlamamız gerekir