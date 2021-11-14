/* Bir müşterinin aşağıdaki bilgileri için değişkenler oluşturunuz

Müşteri adı
Müşteri soyadı
Müşteri tc kimlik
Müşteri sipariş toplamı
Müşteri cinsiyet
Müşteri adres bilgisi
Müşteri hobiler
*/
var customerName = "furkan";
var customerLastName = "ozkan";
var fullName = "furkan ozkan";
var idnum = '11111111111'; //tc kimlik no yu sayısal bir işlemde kullanmayacağından string olarak saklamak daha mantıklı
var ordertotal = 250;
var gender = true; //true erkek - false kadın olarak tanımlayabilirsin erkek kadın demekten daha az yer kaplar
//object
var address = {
    city: "Amasya",
    country: "Turkey"
}; //address tanımlarken obje içinde taşımak daha mantıklı pythondaki dictionary

//array
var hobies = ["kitap","spor","yazılım","web"];



//Aşağıdaki siparişlerin toplamını hesaplayınız

var order1 = '100';
var order2 = '150';
var totalOrder= Number(order1)+Number(order2);
console.log(totalOrder);
//Aşağıdaki siparişlerin toplamını hesaplayınız

var order3 = '100.2';
var order4 = '150.5';
totalOrder = Number(order3)+Number(order4);
console.log(totalOrder);

//Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız

var order5 = '85.2';
var order6 = '145.5';
totalOrder = parseInt(order5)+parseInt(order6);
console.log(totalOrder);


//Aşağıda verilen doğum tarihine göre yaş hesaplayınız

var yearOfBirth = 1986;

var age = new Date().getFullYear()-yearOfBirth;
console.log("age is:",age);


// Aşağıdaki string ifadenin karekter sayısını bulun

const course = "web geliştirme kursu konu javascript"
console.log("karekter sayısı:",course.length) //boşluklarda sayılır