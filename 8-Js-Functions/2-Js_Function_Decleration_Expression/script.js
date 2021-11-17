// Function Decleration

function sumD(a,b){
    var c = a+b;
    return c;
}

console.log(sumD(3,5));

// Function Expression

const sumE = function(a,b){
    var c = a+b;
    return c;
}

console.log(sumD(4,10));

//ES6 ile default parametre ataması gelmiş bundan önce fonksiyon içinde
/*
if (typeof a==="undefined"){
    a=0;
}
şeklinde varsayılan değer atamaası yapılıyormuş.
*/
//şimdipythondaki gibi function(a=0){} şeklinde varsayılan değer ataması yapılabiliyor

const multiple = function(a=1,b=1){ //a ve b yi default parameter olarak 1 yaptık
    c = a*b;
    return c;
}
console.log(multiple(5,10));
console.log(multiple(5));


///istenilen kadar değer girmesi için for döngüsü ile arguments uzunluğuna kadar döngü oluşturulur
function multipleAll(){
    var total=1;

    for (let i=0;i<arguments.length;i++){
        total*=arguments[i];
    }
    return total;
}

console.log(multipleAll(4));


const sumAll = function(){
    totalSum = 0;
    let numbers = [];
    for (let i=0;i<arguments.length;i++){
        totalSum+=arguments[i];
        numbers.push(arguments[i])
    }

    return totalSum
}

console.log(sumAll(5,7,8))