//arrays

let names = ["furkan","şifa","nazlı","ibrahim"];
console.log(names, typeof names);

//diziden istenen indexteki elemanı alma 0. indexteki elemanı aldık
var istenen = names[0];
console.log(istenen)

//diziye eleman ekleme
names[names.length] = "ozkan";
console.log(names);

//diziye dizi.push() ile sona eleman ekleme dizi.unshift() ile başa eleman ekleme
names.push(2,"aa",5); //dizinin sonundan eleman ekler
console.log(names);
names.unshift("başa","eklenen"); //dizinin başından eleman ekler
console.log(names);

//diziden eleman silme .pop() sondan .shift() baştan eleman siler.
names.pop();//sondaki elemanı siler
console.log(names);
names.shift();//baştaki elemanı siler
console.log(names);

//istenen elemanın indexi .indexOf()
console.log(names.indexOf("şifa"));

//diziyi ters çevirme .reverse()
names.reverse();
console.log(names);

//dizileri sıralama .sort() strignleri alfebetik sayıları küçükten büyüğe sıralar

names.sort();
console.log(names);

//dizileri concat ile birleştirme .concat()
let years = [1995,1998,2000,2005,2010,2015,1980,2020];
let val = names.concat(years);
console.log(val);
console.log(names);

//.splice()
names.splice(2,0,"ali"); //2. 2. indexe ekleme yap-2. indexten sonra 0 eleman sil-aliyi ekle
console.log(names);
names.splice(1,2,"1. index"); //1. indexe 1.index stringini ekledi ve 1 ve 2. indexteki elemanları sildi(2 eleman);
console.log(names);
names.splice(2,2) //eleman eklemeden 2. indexten itibaren 2 eleman siler eleman silmek içinde kullanılabilir
console.log(names);

//.find(fonsiyon) // find ile dizi elemanlarının hepsi tek tek çağırılan fonksiyonun içine gider bulduğu ilk true değeri çevirir
console.log((years.find(over18)));

//.filter() //filter ile ilk değer yerine tüm değerler çeviririp döndürülür
console.log((years.filter(over18)));

function over18(year){
    let age  = 2021-year;
    return age>=18;
}

// console.log(over18(1995));