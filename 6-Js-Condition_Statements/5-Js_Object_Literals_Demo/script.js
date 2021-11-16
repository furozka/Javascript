/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/

let cars = [
    {
    id: "bmw116d_1234",
    model: "116d",
    year: 2015,
    color: "white",
    service_records: [{
        id: "bmw116d_1234_1",
        date: "30.01.2016",
        km: 13000,
        totaly_payment: 900,
        service_details: [{
            id: 1,
            action: "oil change",
            payment: 300
        }, {
            id: 2,
            action: "filter change",
            payment: 300
        }, {
            id: 1,
            action: "break hydrolic",
            payment: 300
        }]
    }, {
        id: "bmw116d_1234_2",
        date: "10.01.2017",
        km: 28000,
        totaly_payment: 1800,
        service_details: [{
            id: 1,
            action: "oil change",
            payment: 350
        }, {
            id: 2,
            action: "filter change",
            payment: 350
        }, {
            id: 3,
            action: "break hydrolic",
            payment: 300
        }, {
            id: 1,
            action: "lining change",
            payment: 800
        }]
    }]
}, 
{
    id: "bmw116d_1234",
    model: "116d",
    year: 2015,
    color: "white",
    service_records: [{
        id: "bmw116d_1234_1",
        date: "30.01.2016",
        km: 13000,
        totaly_payment: 900,
        service_details: [{
            id: 1,
            action: "oil change",
            payment: 300
        }, {
            id: 2,
            action: "filter change",
            payment: 300
        }, {
            id: 1,
            action: "break hydrolic",
            payment: 300
        }]
    }, {
        id: "bmw116d_1234_2",
        date: "10.01.2017",
        km: 28000,
        totaly_payment: 1800,
        service_details: [{
            id: 1,
            action: "oil change",
            payment: 350
        }, {
            id: 2,
            action: "filter change",
            payment: 350
        }, {
            id: 3,
            action: "break hydrolic",
            payment: 300
        }, {
            id: 1,
            action: "lining change",
            payment: 800
        }]
    }]
},
 {
    id: "bmw116d_1234",
    model: "116d",
    year: 2015,
    color: "white",
    service_records: [{
        id: "bmw116d_1234_1",
        date: "30.01.2016",
        km: 13000,
        totaly_payment: 900,
        service_details: [{
            id: 1,
            action: "oil change",
            payment: 300
        }, {
            id: 2,
            action: "filter change",
            payment: 300
        }, {
            id: 1,
            action: "break hydrolic",
            payment: 300
        }]
    }, {
        id: "bmw116d_1234_2",
        date: "10.01.2017",
        km: 28000,
        totaly_payment: 1800,
        service_details: [{
            id: 1,
            action: "oil change",
            payment: 350
        }, {
            id: 2,
            action: "filter change",
            payment: 350
        }, {
            id: 3,
            action: "break hydrolic",
            payment: 300
        }, {
            id: 1,
            action: "lining change",
            payment: 800
        }]
    }]
} ]

console.log(cars);
console.log("ilk araba: ",cars[0]);
console.log("ilk araba 1. sevis kayıtları : ",cars[0].service_records[0]);
console.log("ilk araba 1. servis detayları: ",cars[0].service_records[0].service_details[0]);
console.log("ilk araba uygulanan işlem: ",cars[0].service_records[0].service_details[0].action);
