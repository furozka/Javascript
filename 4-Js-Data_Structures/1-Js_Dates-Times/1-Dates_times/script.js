let d = new Date();

console.log(d, typeof d);

//new Date() set methodları
d.setFullYear(2030); //yılı 2030 yaptık
d.setMonth(5);
d.setDate(10);
d.setHours(22);
d.setMinutes(45);
d.setMilliseconds(99);


//new Date() get methodları
console.log("year: "+d.getFullYear());
console.log("day: "+d.getDate());
console.log("week of day: "+d.getDay());
console.log("month: "+d.getMonth());
console.log("time: "+d.getTime());
console.log("hour: "+d.getHours());
console.log("milisec: "+d.getMilliseconds());


let birthDay = new Date(1990,1,5);

console.log("yıllar arası fark: "+(d.getFullYear()-birthDay.getFullYear()));
console.log(d.getMonth()-birthDay.getMonth());
console.log(d.getDate()-birthDay.getDate());
