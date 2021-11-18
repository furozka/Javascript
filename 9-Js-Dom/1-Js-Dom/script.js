//What is DOM

/* 
Document Object Model
Document objesi window objesinin bir alt obje elemanıdır.
Document objesi tarayıcının iskeletini verir. Root(en baş element) <html> dir.
html altında head ve body elementleri vardır.
aynı şekilde head ve body dede alt elementler vardır.
bu yapıya DOM denir. 
*/

//document objesinin içerisindeki methodla istenen element alınıp içeriği deiştirilebilir düzenlenebilir silinebilir.

let val;

val = window.document; //tüm html yi getirir
//.all ı kullanma artık eskidi
val = document.all; //tüm elementleri getirir
val = document.all.length; //element sayısını verir
val = document.all[12]; //card elemanını getirir
val = document.head; //tag adı yazılarak istenen kısım gelir
val = document.body; //body etiketi
val = document.anchors; //a etiketlerini getirir kullanma eski
val = document.URL; //sayfanın urlsi
val = document.domain; //sadece domain kısmını alır urlnin domain kısmı
val = document.images; //sayfadaki tüm imagelere ulaşır
val = document.title; //sayfanın title'ı
val = document.forms; //sayfadaki formların hepsi
val = document.forms[0];//0. indexteki form
val = document.forms[0].id; //0. indexteki formun idsi
val = document.forms[0].method;//0.indexteki formun methodları
val = document.forms[0].action; //0.indexteki forum actionları
val = document.scripts; //sayfadaki scriptler
val = document.scripts[2]; //2. indexteki script
val = document.scripts[2].getAttribute("src"); //2. indexteki scriptin src attributesi



console.log(val);