// Demo : Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

const kgCan = 60, heightCan = 1.68;

const kgAda = 48, heightAda = 1.52;


let IndexCan;
IndexCan = kgCan/(heightCan*heightCan).toFixed(2);
let IndexAda;
IndexAda = kgAda/(heightAda*heightAda).toFixed(2);
console.log(IndexAda.toFixed(2),IndexCan.toFixed(2))
let adaZayıf = (IndexAda>=0) &&(IndexAda<=18.4);
let adaNormal = (IndexAda>=18.5) &&(IndexAda<=24.9);
let adaFazlaKilolu = (IndexAda>=25.0) &&(IndexAda<=29.9);
let adaSisman = (IndexAda>=30.0) &&(IndexAda<=34.9);
console.log("Ada zayıf: "+adaZayıf);
console.log("Ada normal: "+adaNormal);
console.log("Ada fazla kilolu: "+adaFazlaKilolu);
console.log("Ada şişman: "+adaSisman);

