// let square=n=>n*n;
// let id=setInterval(() => {
//     console.log("hello World");
    
// }, 2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("Interval cleared");
// },10000);

// let arrayAverage=(arr)=>{
//     let sum=0;
//     for (let number of arr){
//         sum+=number;
//     }
//     return sum/arr.length;
// }


// let arr=[1,2,3,4,5];
// let square=arr.map((ele)=>ele*ele);
// console.log(square);


// let sum=arr.reduce((sum , ele)=>sum+ele);
// console.log(sum)

// let newArray=arr.map(ele=>ele+5);
// console.log(newArray);

// let arr=["samim","sk","ali"];
// let upper=arr.map((ele)=>ele.toUpperCase());
// console.log(upper);

// let doubleAndReturnArgs=(arr, ...args)=>[...arr, ...args.map(ele=>ele*2)];


// console.log(doubleAndReturnArgs([1,2,3],4,5,6,7,8,9));

let mergeObjects=(obj1,obj2)=>(
    {
        ...obj1,
        ...obj2
    });

console.log(mergeObjects({name:"samim",roll:1,class:"cse(aiml)"},{city:"Howrah", clg:"TECB"}));
