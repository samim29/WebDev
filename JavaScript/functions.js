// function greet_students(){
//     console.log("Good Morning")
// }

// greet_students()

// function factorial(num){
//     if (num==0 || num==1) return 1
//     else if (num<0){
//         return console.log("You have entered a negative number")
//     }
//     else{
//         fact=1
//         for(i=2;i<=num;i++){
//             fact*=i
//         }
//         return fact
//     }
    
// }

// console.log(factorial(-5))


//Function Assigned to a variable
// const hello_func = function hello(){
//     console.log("Hello my dear student")
// }

// console.log(hello_func()) //we can not call hello function directly 

// const sum_func=function sum(a,b){
//     return a+b
// }

// console.log(sum_func(5,6))

//function passing as argument

// function operate(a,b,fn){
//     console.log(fn(a,b))
// }
// function sum2(a,b){
//     return a+b
// }

// operate(5,6,sum2)

// Returned function

// function return_greet_fn(){
//     return function(){
//         console.log("hello")
//     }
// }

// return_greet_fn()()


//important concept

function sum(a,b){
    return a+b
}

console.log(sum(3,4,5))