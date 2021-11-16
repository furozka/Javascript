///20.04.2019 tarihinde trafiğe çıkan aracın servis bakım süreleri verilmiştir bu bilgilerle
//servis bakımı uyarısı veriniz
//1.Bakım 1 yıl
//2.Bakım 2 yıl
//3.Bakım 3 yıl
let startTraf = new Date("4/20/2019");
startTraf.setHours(0,0,0,0);
let timeDifMs = Date.now()-startTraf.getTime();
let timeDifDay = (timeDifMs/(1000*60*60*24));
console.log(timeDifDay);
if (timeDifDay<=365){
    console.log("1. Bakım zamanı");
}else if (timeDifDay>365 && timeDifDay<=365*2){
    console.log("2. Bakım zamanı");
}else if  (timeDifDay>365*2 && timeDifDay<=365*3){
    console.log("3. Bakım zamanı");
}else{
    console.log("bilinmeyen aralık");
}


//ikinci uygulama begin-> whos there? (cancel other admin)---admin->password
const userName = 'admin';
const password = 'themaster'
var userNameInput = prompt("Who's there? ");
if (userNameInput=="cancel"){
    console.log("cancelled");
}else if(userNameInput == userName){
    var passwordInput = prompt("Welcome Admin Enter Your password: ");
    if (password == passwordInput){
        console.log("welcome");
    }else if(passwordInput == 'cancel'){
        console.log("cancelled");
    }else{
        console.log("i don't know you");
    };
}else{
    console.log("i don't know you");
};