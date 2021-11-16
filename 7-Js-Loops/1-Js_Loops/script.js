//Loops

//for loop

for (let i=1;i<=10; i++){
    
    if (i==3){
        console.log("en sevdigim rakam 3");
        continue;
    }
    
    if (i==6){
        console.log("6 güzel sayı");
        break;
    }
    console.log(i);
}

//while loop
i=0
while(i<10){
    console.log(i);
    i++;
}

while(true){
    for (i=10;i<15;i++){
        console.log(`███${i}`);
    }
    break;
}

i=10;
do {
    console.log(i);
    i++
}while(i<20);

let result=0
for (let i=10;i>0;i--){
    result+=i
}
console.log(result);

result=1
for (let i=10;i>0;i--){
    result*=i
}
console.log(result);

result=1
for (let i=10;i>0;i--){
    if (i%2==1){
        result*=i;
    }
}
console.log(result);

console.clear();
let val="";
for (let i=0;i<10;i++){
    for (let j=0;j<10;j++){
        val+="* ";
    }
    val+="\n";
}
console.log(val);