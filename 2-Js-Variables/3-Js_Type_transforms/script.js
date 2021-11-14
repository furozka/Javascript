//Tür Dönüşümü

let num1 = "5";
console.log(typeof num1);
let num2 = "10";
console.log(num1+num2); //ikiside string olduğundan yazıları birleştirir

//string to number
let num3 = Number("5"); //Number() ile string sayıya dönüştürülür
let num4 = Number("10");
console.log(num3+num4)
console.log(typeof (num3+num4))

//number to string
let val;
val = String(10); //String() ile numberi stringe çevirdik
console.log(typeof val);
console.log(val.length); //string ilfadelerde length özelliği ile karekter uzunluğu alınabilir. string.length

//boolean to string
let isActive = true;
isActive = String(isActive);
console.log(typeof isActive);
console.log(isActive.length);

//Date() object türünde to string
val = new Date(); //full tarih
val = new Date().getFullYear(); //yıl
val = new Date().getDay(); //haftanın kaçıncı günü
val = new Date().getMonth(); //kaçıncı ay
val = new Date().getDate(); //ayın kaçı
console.log(val);
console.log(typeof val);
val = String(val);
console.log(typeof val);
console.log(val.length);

//array to string
let numbers = [1,2,4,3,5,8];
console.log(typeof numbers);
numbers = String(numbers);
console.log(typeof numbers);
console.log(numbers.length); //vargülleride sayar 11 elemanlı string

//toString() kullanımı daha kolay
val = (10).toString();
console.log(typeof val);
val = (false).toString();
console.log(typeof val);

//numbere çevirme ve number methodları
val = Number("10");
console.log(typeof val);
console.log(val.toFixed(2)); //virgulden sonra kaç eleman yazılacağı toFixed(x) ile yapılır
//true 1 false 0 dır null 0 dır number değeri olarak 
val = Number("a"); //sayi olmayan bir değer number fonksiyonuyla numbere cevrildiğinde
console.log(val); //Not a Number NaN yazdırır
console.log(typeof val); //tip yine numbere dönüşür
//dizilerde aynı şekilde number ile dönüştürüldüğünde NaN yazdırır.

//Number() methodu yerine parseInt() ve parseFloat() kullanılır
val = parseInt("10,5"); //küsüratı yuvarlar 10 yazdırır
console.log(val,typeof val);

val = parseFloat("12.5"); //küsüratları korur
console.log(val,typeof val);
