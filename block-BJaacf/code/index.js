// 1. Create an array named numbers and store 5 number values in it
let number =[1,2,3,4,5];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum =0;
for(let i=0 ; i<number.length ; i++){
    sum = sum + number[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let sumVal =0,avg=0;
for(let i=0 ; i<number.length ; i++){
    sumVal = sumVal + number[i];
    
}
avg=sumVal/number.length;
console.log(avg);
// 4. Find the highest number in the array and print it to the console using console.log()
let highestNum =0;
for(let i=0 ;i<number.length;i++){
    if(number[i]>number[i+1]){
        highestNum =number[i];
    }
    else{
        highestNum = number[i+1];
        
    }
}
console.log(highestNum);
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNum;
for(let i=0 ;i<number.length;i++){
    if(number[i]<number[i+1]){
        lowestNum =number[i];
        
    }
    else{
        lowestNum = number[i+1];
        
    }
}
console.log(lowestNum);
// 6. Find the even numbers in the array and print them to the console using console.log()
let even=[];
for(let num of number){
    if(num%2==0){
        even.push(num);
    }
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd=[];
for(let num of number){
    if(num%2!=0){
        odd.push(num);
    }
}
console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let numDivisibleBy5=[];
for(let num of number){
    if(num%5==0){
        numDivisibleBy5.push(num);
    }
}
console.log(numDivisibleBy5);

// 9. Log all the element of the array one by one
console.log(number);
// 10. Find all the number in the array that is divisible by 3
let numDivisibleBy3=[];
for(let num of number){
    if(num%3==0){
        numDivisibleBy3.push(num);
    }
}
console.log(numDivisibleBy3);