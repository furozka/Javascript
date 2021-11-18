//Creating Elements



//ul nin altına li ekleme adım adım 
//create element li yi oluştur
const li = document.createElement('li'); //sınıf eklemeden önce sınıfsız

//add class li ye classları ekle

li.className='list-group-item list-group-item-secondary'; //className 0 dan class ları belirler classList mevcutlara ekler


// li.id='createdli'; id ekleme

//attribute ekleme li ye attributeleri ekle
li.setAttribute('title','new item'); //title attributune new item eklendi
li.setAttribute('data-id',"5");

//text node oluşturup .appendChild ile li nin içine ekledik. li nin içindeki yazıyı oluşturup li ye ekle
const text = document.createTextNode('new item'); // text content oluşturup append child ile li nin içine atabilirsin
//ama innerHTML ile daha kolay
li.innerHTML='new item';

//kapatmak için olan x işaretini oluşturmak için link etiketi oluşturup içini düzenledik
const a = document.createElement('a');
a.setAttribute('href','#');
a.className='list-group-link text-decoration-none float-end';
a.innerHTML='<i class="fas fa-times"></i>';

//a etiketini linin içine koyduk
li.appendChild(a);

//html sayfasındaki ul yi aldık //ul ye li yi ekledik
let list = document.querySelector('#task-list').appendChild(li);
console.log(a);
console.log(li);