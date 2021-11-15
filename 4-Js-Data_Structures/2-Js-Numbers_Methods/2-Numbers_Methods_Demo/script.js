var num = 15.123456789;

// toplamda 3 basamaklı sayı kullan
console.log(num.toPrecision(3));
console.log(num.toFixed(1));

// ondalık kısmı 3 basamakta sınırla
console.log(num.toFixed(3));
// en yakın sayıya yuvarla
console.log(Math.round(num));
// aşağı yuvarla
console.log(Math.floor(num));
// yukarı yuvarla
console.log(Math.ceil(num));
// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul
console.log(Math.min(1,2,10,56,20))
console.log(Math.max(1,2,10,56,20))
// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.
var min = 50;
var max = 100;

console.log(Math.floor(min+Math.random()*(max-min)));
/* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?
*/

var brSalary = 3700;
var brMesai = 10.3;
var kesinti = 0.25;
var mesai = 42;
var toplamSalary = brSalary+brMesai*mesai;
console.log("agustos 42 saat mesai maaş: "+(brSalary+(brMesai*mesai)));
console.log("brüt maaşta %25 kesinti maaş: "+((toplamSalary - (toplamSalary*kesinti)).toFixed(2)));
