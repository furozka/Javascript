var mothersDay = new Date();
var yearInput = window.prompt("Enter the year you want to learn Mothers Day: ")
mothersDay.setDate(1);
mothersDay.setFullYear(Number(yearInput));
mothersDay.setMonth(4);
mothersDay.setHours(0,0,0,0);

while (mothersDay.getDay() != 0){
    mothersDay.setDate((mothersDay.getDate()+1));
};
mothersDay.setDate((mothersDay.getDate()+7));
console.log(mothersDay);
alert("Mothers Day is : "+ mothersDay);