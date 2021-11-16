//Loops with arrays

let cars = ["bmw","pejo","ferrari"];
for (let i=0;i<cars.length;i++){
    console.log(cars[i]);
};

//for-in döngüsü
for (let i in cars){
    console.log(`${i}. index numarası: ${cars[i]}`);
};

//foreach

cars.forEach(function(item){
    console.log(item);
});

let people = [
    {firstName: "furkan", lastName: "ozkan"},
    {firstName: "ali", lastName: "demir"},
    {firstName: "veli", lastName: "çelik"}
];

for(let i=0;i<people.length;i++){
    console.log(people[i].firstName);
};

for(let i in people){
    console.log(people[i].lastName);
};

people.forEach(function(item){
    console.log(item.firstName);
});


//map returns an array

let val = people.map(function(item){
    return item.firstName+" "+item.lastName;
});
console.log(val);


let numbers = [1,2,3,45,6];
let num = numbers.map(function(x){
    return x**2;
})
console.log(num);