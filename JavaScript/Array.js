// definig array
let arr=[1,2,3,5,6]
console.log(arr)
console.log(arr[0])

//finding the length
console.log(arr.length)

//2nd way of definig array
arr1=Array(1,2,3,4,5)
console.log(arr1)

empty_array=Array(5)
console.log(empty_array)

//3rd way of creatin array. constructor way

fruits=new Array("Apple","Mango","Banana")
console.log(fruits)

//deleting element
delete arr[3]
console.log(arr) //should not use it as length isnot change

//iteration on array

//can use for loop
//here example of for each loop

for(num of arr1){
    console.log(num)
}