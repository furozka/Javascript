//altGr+,, altgr basılı iken 2 kez virgul tusuna basarak ters tırnak yapılır
//içerisinde ilgili variableler ve işlemleri ${} içerisinde kolayca yapılır pythondaki f'{}' gibi

const fullname =  "furkan";
const yearOfBirth = 1995;
const city = "bolu";
let val;


//eger yaş>=18 ise 1. değilse 2. kısmı yazdırır ternary operator kullanımı deniyor.
val = `My name is ${fullname} I am ${(2021-yearOfBirth>=18)?"over 18":"under 18"} years old and I live in ${city}.`;
console.log(val);