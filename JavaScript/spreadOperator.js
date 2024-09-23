// const nums=[1,2,3];
// const newArr=[...nums] //spread the elements and as we have used [] it converted into and array
// console.log(newArr)
// newArr1=[...nums,4]
// console.log(newArr1)//it will add 4
// const nums2=[4,5,6,7,8]

// concatArray=[...nums,...nums2]
// console.log(concatArray)

//use in passing parameter
// const nums =[1,2,3]
// const sum=(num1,num2,num3)=>num1+num2+num3

// console.log(sum(...nums))

//using in string

// const str="abc"
// const chars=[...str]
// console.log(chars)

//in object

// let obj1={
//     name:"PW skills",
//     course:"Full stack development"
// }
// let obj2={
//     rating:5,
//     reviews:2000,
//     name:"pw"
// }
// let obj={...obj1,...obj2}//here name value get overwritten
// console.log(obj) 

arr1=[12,13,15]
arr2=[16,17,18]
console.log(arr1.concat(arr2))