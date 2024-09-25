for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
   
}

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log("The number is even " + (i));
    }
}

let ages = [20,35,32,22,23,26,22,30,24,26,20, 34,23,24,26,]
let addition = ages.reduce((accumulator , currentValue) =>{
    return accumulator + currentValue
}, 0)
let average = addition / ages.length;
console.log(average);