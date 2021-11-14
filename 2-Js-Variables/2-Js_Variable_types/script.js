// Değişken tipleri

//1-Primitive tipler
   
    //Stringler
    let firstname = "furkan";
    console.log(typeof firstname);
   
    //Number
    let age = 26;
    console.log(typeof age);
    let money = 100.5;
    console.log(typeof money);
   
    //Boolean
    let isActive = true;
    console.log(typeof isActive);
   
    //Null
    let job = null;
    console.log(typeof job); //obje der bu bir bugdur primitive tiptir
   
    //Undefined
    let car; //car değişkenine bir şey atamadığımız için undefined tiptir
    console.log(typeof car);


//2-Referance tipler - Objects

    //Array object döndürür
    let names = ["furkan","şifa","ibrahim"];
    console.log(typeof names);

    //object pythondaki dictionary yapısı object döndürür
    let address = {
        city: "Amasya",
        country: "Turkey"
    }
    console.log(typeof address);

    //Function
    var calculateAge = function(){
        return 0;
    };
    console.log(typeof calculateAge)