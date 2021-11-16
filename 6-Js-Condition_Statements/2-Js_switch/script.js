//switch statements


let category = "bilgisayar"


switch(category){
    case 'phone':
        console.log("telefon kategorisi");
        break;
    case (('computer') || ('bilgisayar')):
        console.log("bilgisayar kategorisi");
        break;
    default:
        console.log("kategorisiz");
}

/////////////

let day;

switch (new Date().getDay()){
    case 0:
        day = "pazar";
        console.log(day);
        break;
    case 1:
        day = "pazartesi";
        console.log(day);
        break;
    case 2:
        day = "salı";
        console.log(day);
        break;
    case 3:
        day = "çarşamba";
        console.log(day);
        break;
    case 4:
        day = "perşembe";
        console.log(day);
        break;
    case 5:
        day = "cuma";
        console.log(day);
        break;
    case 6:
        day = "cumartesi";
        console.log(day);
        break;
    default:
        console.log("max value is 6");
}

//hafta içi hafta sonu ayırma caseleri break koymadığımız için birleştirdik

switch (new Date().getDay()){
    
    case 1:      
    case 2:        
    case 3:       
    case 4:       
    case 5:
       day = "haftaiçi";
       console.log(day);
       break;
    case 0:
    case 6:
        day = "haftasonu";
        console.log(day);
        break;
    default:
        console.log("max value is 6");
}

//if else else if le yapılan age örneği

const age = 26;
const firstName = 'furkan';
switch(true){
    case age<12 && age>0:
        console.log(`${firstName} is a child`);
        break;
    case age>=12 && age<18:
        console.log(`${firstName} is a teeneger`);
        break;
    default:
        console.log(`${firstName} is a adult`);
        break;
}