//Object Literals pythondaki dictionary ye benzer içinde fonksiyon tnaımlaanbiliyor.

let val;

let person = {
    firstName: 'ali',
    lastName: 'veli',
    age: 26,
    address: {
        city: 'bolu',
        country: 'turkey'
    },
    numbers: [1, 2, 3, 4, 5],
    getBirthYear: function () {
        return (new Date().getFullYear()-this.age);
    }
};
console.log(person.firstName);
console.log(person.address);
console.log(person.address.city);
console.log(person.numbers);
console.log(person.numbers[0]);
console.log(person.age);
console.log(person.getBirthYear());


let people = [{
        firstName: 'furkan',
        lastName: 'ozkan'
    },
    {
        firstName: 'İbrahim',
        lastName: 'ozkan'
    },
    {
        firstName: 'Nazlı',
        lastName: 'ozkan'
    },
]
let getName = function () {
    let i = prompt('enter index');
    if (i > 2) {
        return `is bigger than length of people object`;
    } else {
        return people[i].firstName;
    };
};
console.log(people[0].firstName);
console.log(people[2].firstName);
console.log(getName());

//döngü kullanımı

for (let j=0;j<people.length;j++){
    console.log(people[j].firstName);
}