//Local Stroge
const input = localStorage.setItem('girdi','girdi');
const firstName = localStorage.setItem('firstName','furkan');
const lastName = localStorage.setItem('lastName','ozkan');

//application kısmında local stroge altında gözükür
//localstroge sayfa kapatılsa bile local olarak kaydedildiginden local stroge altında kayıtlı kalırlar


//get item
let val = localStorage.getItem('firstName'); //local strogeden firstNameyi aldık
console.log(val);

//remove item
localStorage.removeItem('girdi'); //girdi kayıdını local strogeden siler.

//tüm local strogeyi temizlemek için
localStorage.clear();

//array yada objeyi local stroge atarken json kullanmalıyız yoksa normal string gibi ykaydeder.
//JSON.stringfy('')
let hobies = ["yazılım","kitap","matematik","c++","html","css","matlab","javascript"]
localStorage.setItem('hobies',JSON.stringify(hobies));

//JSON olan bilgiyi local storegeden alırkende JSON.parse('') ile alırız
val = JSON.parse(localStorage.getItem('hobies'));
console.log(val);
//Session Stroge sayfa kapatıldığında kayıtlar silinir

//local strogenin kullanımı ile aynı şekilde kullanılır sessionStorage