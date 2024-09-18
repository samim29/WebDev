//Arrow Function

//for addition 

const add=(a,b)=>{
    console.log("The sum is:");
    return a+b;
}
console.log(add(3,5));

//function with no returns
const hello=()=>{
    console.log("Hello World");
}

hello();

//funtion with multiple arguments

const sum_of_three=(a,b,c)=>  a+b+c
console.log(sum_of_three(2,3,4));

const checkEvenOdd=x=>x%2==0? "Even":"Odd"
console.log(checkEvenOdd(5))
console.log(checkEvenOdd(4))