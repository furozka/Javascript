//car database
var models = [{
        name: "BMW",
        image: "img/bmw.jpg",
        link: "http://www.arabalar.com.tr/"
    },
    {
        name: "HONDA",
        image: "img/honda.jpg",
        link: "http://www.arabalar.com.tr/"
    },
    {
        name: "MAZDA",
        image: "img/mazda.jpg",
        link: "http://www.arabalar.com.tr/"
    },
    {
        name: "SKODA",
        image: "img/skoda.jpg",
        link: "http://www.arabalar.com.tr/"
    },
    {
        name: "VOLVO",
        image: "img/volvo.jpg",
        link: "http://www.arabalar.com.tr/"
    }

];

//variables 
//index for moving on cars in database
var index = 1;
//taking number of cars in database
var indexCount = models.length;
//automatic slide change attribute settings (1s and random index)
var settings = {
    duration: '1000',
    random: true
}
//variable for clearInterval(interval)... we define it as interval = setInterval()....
var interval;

//right-left arrows eventlistener click to change index and show related index number cars attributes at html objects
document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showCar(index);


})
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showCar(index);

})


//creating random index
function randomIndex() {
    //keep index value before generating random index
    var indexHolder = index;
    index = Math.floor((Math.random() * 10) % indexCount);
    //if new index same with before generete new random index
    if (indexHolder === index) {
        console.log(`same index ${index}`);
        randomIndex()
        //else return random index
    } else {
        return index;
    }
}

//setTimeout belirli bir süre sonra başlayacak olan fonksiyonu belirtir 1 kere fonksiyon çalıştırılır ve bitirilir
//setInterval clearInterval ile durdurulmadıkça fonksiyon çağarılmaya devam eder
//continuous slide flow
function init(s) {
    interval = setInterval(function () {
        if (s.random) {
            randomIndex();
        } else {
            index++;
        }
        showCar(index);
    }, s.duration)
}

//Otomatik slide flow sürdürülmesi ve kesilmesi
document.querySelectorAll(".arrow").forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
})
document.querySelectorAll(".arrow").forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
})
document.querySelector('.card-link').addEventListener('mouseenter', function () {
    clearInterval(interval);
})
document.querySelector('.card-link').addEventListener('mouseout', function () {
    init(settings)
})

function showCar(i) {
    if (i > indexCount - 1) {
        i = i % indexCount;
    } else if (i < 0) {
        i = Math.abs(i) % indexCount;
    }
    //ilgili indexteki arabanın özelliklerinin html öğelerine aktarılması
    document.querySelector('.card-img-top').setAttribute('src', models[i].image);
    document.querySelector('.card-link').setAttribute('href', models[i].link);
    document.querySelector('.card-title').textContent = models[i].name;
}


//slider card'ın çalıştırılması.
init(settings);