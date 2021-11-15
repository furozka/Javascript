

const firstname = 'furkan';
const lastname = "ozkan";
const age = 26;
let hobies = "yazılım,c++,python,javascript,nodejs"
//string concat string birleştirme

let val;

val = firstname+" "+lastname;
console.log(val);

val = "zuhal";
val+=" ozkan";
console.log(val);

val = "benim adım: "+firstname+" "+lastname+" ve yaşım: "+age+" boluda'da yasıyorum.";
console.log(val);

//methodlar 

//string.concat() ile concat yapar birleştirir.
val = "furkan".concat(" ",lastname);
console.log(val);

//string.length karekter sayısı
console.log(val.length);

//string.toUpperCase strging.toLowerCase
console.log(val.toUpperCase());
console.log(val.toLowerCase());

// val = val[0]; indexlere ulaşma

//string.indexOf("x") strgingdeki istenen harfin indexini verir yoksa  -1 çevirir
console.log(val.indexOf("o"));

//string.subString(0,5) stringin 0. indexinden 5. indexine kadar alır 5 dahil değil
//string.substr(1,5) ise başlangıç indexinden verilen uzunluğa kadar 1. indexten baslar 5 harf alır.
// val = val.substring(1,5);
// console.log(val)

//string.slice(0,5) kesme işlemi yapar 0 dan baslar 5. indexe kadar 5 dahil değil.
// val = val.slice(0,5);
// console.log(val)

//string.replace("a","b") stringdeki a yı b ile değiştirir
// val = val.replace("furkan","ali");
// console.log(val)


//string.trim(); başta ve sondaki boşlukların silinmesinde kullanılır.
val = "  furkanff  ";
val = val.trim();
console.log(val);

//string.split(",") stringi virgüllerden split edip arraye çevirir.
hobies = hobies.split(",");
console.log(hobies, typeof hobies);
