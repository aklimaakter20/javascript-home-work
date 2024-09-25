// print even number between 1-100

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
   
}
// Print the even numbers between 1-100 and write the word even next to each number

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log("The number is even " + (i));
    }
} 
// Print the average number of ages of your class mates

let ages = [20,35,32,22,23,26,22,30,24,26,20, 34,23,24,26,]
let addition = ages.reduce((accumulator , currentValue) =>{
    return accumulator + currentValue
}, 0)
let average = addition / ages.length;
console.log("Average age is " + average);