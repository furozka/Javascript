// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
var d = new Date()

console.log("day: "+d.getDate(),"moth: "+(d.getMonth()+1),"year: "+d.getFullYear())


// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
var dtA = new Date("12/15/2021 14:50:46");
console.log(dtA);

var dtB = new Date(2021,12,15,14,50,46);
console.log(dtB);
// 1/1/1990 tarihinden bir gün öncesini gösteriniz. 
var dt90 = new Date("1/1/1990");
dt90.setDate((dt90.getDate()-1));
console.log(dt90);

// iki tarih arasındaki geçen zamanı bulunuz.
var start = new Date("1/1/1990");
var end = new Date("1/1/1991");
var milisecond = end-start;
var second = milisecond/1000;
var minute = second/60;
var hour = minute/60;
var day = hour/24;
console.log("milisecond: "+milisecond);
console.log(day);
// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2022 yılında ne zaman kutlanacaktır ?
var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2022);
annelerGunu.setMonth(4);
annelerGunu.setDate(1);

while(annelerGunu.getDay() !=0){
    annelerGunu.setDate(annelerGunu.getDate()+1);
};
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log("anneler gunu 2022 yılında : "+annelerGunu);

///annelerGunu diye değişken tanımladık ve saat bilgilerini 0 yıl bilgisini 2022 ay bilgisini mayıs ve ayın 1 ine ayarladık
//sonra while döngüsüyle haftanın pazar günü olana dek ayın gün değerini 1 artırdık.
//pazar günü olunca 7 ekleyerek 2. pazar tarihine erişmiş olduk.



// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date("10/9/1995");
var ageDfMs = Date.now()- birthday.getTime();
var ageDate = new Date(ageDfMs);
console.log("age: "+(ageDate.getFullYear()-1970));
console.log(birthday.getTime()); //milisecond cinsinden değer verir
console.log(Date.now()); //şu anki tarihin milisecond türünden değerini verir


