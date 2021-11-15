// Demo : Strings


var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";

// cümle kaç karakterlidir ?
console.log(sentence.length);
// kaç kelimeden oluşuyor ?
console.log(sentence.trim().split(" ").length);
// Tüm cümleyi küçük harfe çevirin.
console.log(sentence.toLowerCase());
// Cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim());
// '-' karakterini silin.
console.log(sentence.replace("-", ""));
// url'nin içinden str http kısmını çıkarınız.
var str = "http://"
console.log(url.slice(str.length))
console.log(url.substring(str.length))
console.log(url.replace("http://", ""));
// url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith("http"));
console.log(url.startsWith("https"));
// url, '.com' ifadesini içeriyor mu?
console.log(url.includes(".com"));
console.log(url.indexOf(".com"));
// url string ifadesini geçerli bir url olarak düzenleyiniz.
console.log(url)
console.log(url.toLowerCase()
                .replace(/ /g, "-")
                .replace(/ı/g, "i")
                .replace(/ü/g, "u")
                .replace(/ö/g, "o")
                .replace(/ş/g, "s")
                .replace(/ğ/g, "g")
                .replace(/ç/g, "c"));
    