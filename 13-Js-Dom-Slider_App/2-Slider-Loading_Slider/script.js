var models = [
    {
        name : "BMW",
        image : "../img/bmw.jpg",
        link : "http://www.arabalar.com.tr/"
    },
    {
        name : "HONDA",
        image : "../img/honda.jpg",
        link : "http://www.arabalar.com.tr/"
    },
    {
        name : "MAZDA",
        image : "../img/mazda.jpg",
        link : "http://www.arabalar.com.tr/"
    },
    {
        name : "SKODA",
        image : "../img/skoda.jpg",
        link : "http://www.arabalar.com.tr/"
    },
    {
        name : "VOLVO",
        image : "../img/volvo.jpg",
        link : "http://www.arabalar.com.tr/"
    }

];

var index = 1;
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-link').setAttribute('src',models[index].link);
document.querySelector('.card-title').textContent=models[index].name;