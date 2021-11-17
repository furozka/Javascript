//Bankamatik uygulaması kullanıcı hesabına girecek para çekecek veya yatıracak
//çekmek istediği para varsa çekebilecek yoksa ek hesap kontrol edilecek

var hesapA = {
    name: "furkan",
    hesapNo: "1365165",
    bakiye: 25000,
    ekHesap: 1500
}
var hesapB = {
    name: "İbrahim",
    hesapNo: "5416498",
    bakiye: 35006,
    ekHesap: 2000
}

function paraCek(hesapAdı, cekilecekMiktar=0) {
    console.log(`Merhabalar ${hesapAdı.name}`);
    if (cekilecekMiktar <= hesapAdı.bakiye) {
        hesapAdı.bakiye -= cekilecekMiktar;
        console.log(`${cekilecekMiktar} TL para çektiniz bakiyenizde: ${hesapAdı.bakiye} TL kaldı`);
    } else if (cekilecekMiktar > hesapAdı.bakiye) {
        if (cekilecekMiktar <= (hesapAdı.bakiye + hesapAdı.ekHesap)) {
            if (confirm("Ek hesabı kullanmak istermisiniz?")){   
                hesapAdı.ekHesap-=(cekilecekMiktar-hesapAdı.bakiye);
                hesapAdı.bakiye=0;
                console.log(`Bakiyenizde 0 TL ve ek hesabınızda ${hesapAdı.ekHesap} TL kalmıştır çekilen miktar: ${cekilecekMiktar} TL`)
            }else{
                console.log("işlem sonlandı")
            }
        }else{
            console.log(`${cekilecekMiktar} TL çekmek için ek hesapla bile yeterli bakiyeniz olmuyor.`)
        }


    }
}

paraCek(hesapA,25000);
paraCek(hesapA,1500);