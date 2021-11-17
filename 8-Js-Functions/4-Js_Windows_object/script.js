// Browserlerde Js Engine yanı sıra window objeside vardır.
// Window objesi kullanılarak herhangi bir etikete kolaylıkla erişilebiliyor
// window objesi alert kutusu, prompt kutusu, confirm, tarayıcıdaki elemanlar , adress bilgisi gibi bir çok şeye ulaşmamızı 
// sağlar.

// sayfada tanımlanan elemanlar window objesinin elemanı olur

// var ile a yı tanımlanıdğımızda windowsun içinde oluyor.

var a = 10;

// aynı şekilde abc() metoduda windows objesi içine girer
function abc(){
    return 0;
}

let val;
val = window;
console.log(val)

//bazı windows metodlarının kullanımı

//alert
// alert("merhaba");

// prompt
// val = prompt("girdi alma");
// console.log(val);

//confrim
// val = confirm("Onaylıyormusunuz");
// console.log(val);
// if (val){
//     console.log("ok");
// }else{
//     console.log("no");
// }


//scroll barların x ve y deki konumları
val = [window.scrollX,window.scrollY];
console.log(val);

//location ile tarayıcının adresi ile ilgili bilgiler alınabilir hostname href port protocol
//location üzerinden alt özelliklerede kolayca ulaşabilirsin

val = window.location;
console.log(location)
val = window.location.href;
console.log(val);
val = window.location.hostname;
console.log(val);
val = window.location.port;
console.log(val);
val = window.location.protocol;
console.log(val);
val = window.location.search; //query string kısmını alır ?id=123&name=... li kısım
console.log(val);

// window.location.href = 'https://www.google.com/'; hrefi değiştirerek istenen linke gidebilirsin

//reload ile sayfa yenileme sürekli reload eder
// window.location.reload();

//window.navigator gibi birçok obje var window içinde kullandıkça öğreneceksin
//en önemlileri window.document html sayfasını getirir

val = window.document;
console.log(val);
val = val.getElementById("baslik");
console.log(val);
