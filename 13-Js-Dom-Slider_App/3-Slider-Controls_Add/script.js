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
var indexCount = models.length;



document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    if(index>0){
        index--;
        console.log(index);
        showCar(index);
    }else{
        index = indexCount-1;
        console.log(index);
        showCar(index);
    }
    
})
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    if(index<indexCount-1){
        index++;
        console.log(index);
        showCar(index);
    }else{
        index = 0;
        console.log(index);
        showCar(index);
    }
})

function showCar(i){
    document.querySelector('.card-img-top').setAttribute('src',models[i].image);
    document.querySelector('.card-link').setAttribute('src',models[i].link);
    document.querySelector('.card-title').textContent=models[i].name;
}
