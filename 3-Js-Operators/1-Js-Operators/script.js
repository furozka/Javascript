//operatörler

let val;
const a=10;
const b=5;
const d=5;
let c=3;

//1-Aritmetik operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = c++;//önce c yi val içine atar sonra c yi bir artırır
console.log(c);
val = ++c;
val = --c;
val = c--;

//2-Atama Operatörleri
val = a;
val += a; //val = val+a
val -= a; 
val *= a;
val /= a;
val %= a;

//3-Karşılaştırma operatörleri

val = a==b;
val = b==d;
val = b===d; //hem tür hem değer kontrolü yapar
val = 5=="5"; //true çevirir
val = 5==="5"; //false değeri verir çünkü biri number diğeri string
val = a!=b;
val = a>b;
val = a<b;
val = a<=b;
val = a>=b;

//4-Mantıksal operatörler

//& and
val = (a<b) && (b==d);
//| or
val = (a<b) || (b==d);
//! not
val = !(a>b);
val = !true; //false olur



console.log(val);
console.log(typeof val);