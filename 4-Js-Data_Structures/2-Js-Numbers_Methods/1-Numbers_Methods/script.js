let val;

val = Number("10");
console.log(val,typeof val);
val = parseInt("10.5")
console.log(val,typeof val);
val = parseFloat("10.8");
console.log(val,typeof val);
val = parseFloat("a1506ğadqwd1"); //NaN not a number demek sayıya çevrilemeyecek değer demek ama typesi number olur.
var numbermi = isNaN("10a"); //isNaN() ile variablenin NaN olup olmadığı öğrenilebilir
console.log("NaN mı?:  "+numbermi);
console.log(val,typeof val);


var num = 10.123456789;
val = num.toPrecision(5); //toPrecision baştan 5 değer getirir typesini string yapar
console.log(val,typeof val);

var num = 10.123456789;
val = num.toFixed(2); //toFixed virgünlden sonra 2 değer getirir typesini string yapar
console.log(val,typeof val);

//Math
val = Math.PI; //pi sayısı
console.log(val)
val = Math.E; //e sayısı
console.log(val)

val = Math.round(2.4); //Math.round yakın olana yuvarlar
console.log(val)
val = Math.round(2.5);
console.log(val)

val = Math.ceil(4.8);//Math.ceil() sayıyı yukarı yuvarlar
console.log(val, typeof val);
val = Math.ceil(4.00001);
console.log(val);
val = Math.floor(4.999999);// Math.floor() sayıyı aşağı yuvarlar
console.log(val);

val = Math.sqrt(64); //Math.sqrt()karekök alma
console.log(val);

val = Math.pow(3,5); //Math.pow(3,5) 3 üzeri 5 i hesaplar
console.log(val);

val = Math.abs(-191); //pozitife çevirir
console.log(val);

val = Math.min(1,968,1,64,8,0,-4,59,7); //istediğin kadar sayı gönder en küçüğünü verir
console.log(val);
val = Math.max(1,968,1,64,8,0,-4,59,7); //istediğin kadar sayı gönder en büyüğünü verir
console.log(val);

val = Math.random(); //0-1 arasında rasgele sayı üretir
console.log(val);

val = Math.round((Math.random())*10);
console.log(val);