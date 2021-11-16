// if else statements

const firstName = "furkan";
const age = 26;
const isStudent = true;
const school = 'university';
//if
if (firstName === "furkan"){
    console.log("hello "+firstName);
};

//if-else if-else
if (age === 19){
    console.log("age is 19");
}
else if(age != 19){
    console.log("age is not 19 it is : "+age);
};


//boolean değeri koşul yapma
if (isStudent){
    console.log("Öğrenci");
}else{
    console.log("öğrenci değil");
};

//iç içe koşuk kullanma || (or) operatörü
if (age>=18){
    if ((school=="university") || (school=="highschool")) {
        console.log("ehliyet alabilir");
    }else{
        console.log("eğitim durumunuz yetersiz");
    }
    
}else{
    console.log("ehliyet alamaz");
};

//&& and operatörü

if (age<12 && age>0){
    console.log("çocuk");
}else if (age>=12 && age<18){
    console.log("ergen");
}else{
    console.log("yetişkin");
};

//bir değişkenin tanımlanıp tanımlanmadığı
let id;
if (typeof id !="undefined"){
    console.log(`id: `+id);
}else{
    console.log("not defined");
}
///
id=16516;
if (typeof id !="undefined"){
    console.log(`id: `+id);
}else{
    console.log("not defined");
}