//Functions

function ageCalculate(birthyear){
    return new Date().getFullYear()-birthyear;
}

let age1 = ageCalculate(1995);
let age2 = ageCalculate(2015);
let age3 = ageCalculate(1989);
console.log(age1,age2,age3);


function yearsToRetire(birthday,name="furkan"){
    let age = ageCalculate(birthday);
    let retire = 65-age;
    if (retire<=0){
        return `${name} is retired`;
    }else{
        return `${name} needs to work ${retire} year more for get retired`
    }
}

console.log(yearsToRetire(1950,"ibrahim"));
console.log(yearsToRetire(1995));

