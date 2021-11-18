//Traversing DOM

let val;

let list = document.querySelector('.list-group');

val = list; //ul ye eriştik

val = list.childNodes; //nodelist döndürür text nodeleride olur

val = list.children; //html collection döndürür sadece li elemanları olur

val = list.childNodes[0]; //ilk childnote text yani boşluk
val = list.childNodes[0].nodeName; //nodun adı text
val = list.childNodes[0].nodeType; //nodun typı 0-1-2-3-4 w3 schooldan ne anlama geldiklerine bakabilirsin nodeType numbers yaz
val = list.childNodes[1].nodeType; //nodeType 1


val = list.children;
val = list.children[0];
val = list.children[1];
val = list.children[2].textContent='new item'; //textcontent yazınca içindeki a etiketi siklinir
val = list.children[3].children;

val = list.firstChild; //ilk nodu getirir
val = list.firstElementChild; //ilk etiketi getirir
val = list.lastChild; //son nodu getirir
val = list.lastElementChild; //son etiketi getirir

val = list.childElementCount;

val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement.parentElement.parentElement;

val = list.children[0].nextSibling; //ilk li elemanından sonraki noda geçer text tir //aynı seviyededirler
val = list.children[0].nextElementSibling;//ilk liden sonraki etikete geçer li dir. //aynı seviyededirler
val = list.children[1].previousSibling; //2. li elemanından önceki noda geçer text tir //aynı seviyededirler
val = list.children[1].previousElementSibling;//2. liden önceki etikete geçer li dir. //aynı seviyededirler
// console.log(val);


//döngü ile tüm etiket olan elemanlara ulaşma ul altındaki
for(let i=0;i<list.children.length;i++){
    console.log(list.children[i]);
}

//döngü ile tüm nodlara veya istenen nodlara ulaşma
for (let i=0;i<list.childNodes.length;i++){
    if(list.childNodes[i].nodeType===3){
        console.log(list.childNodes[i]);
    }
    
}