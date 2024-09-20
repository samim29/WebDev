//Array Methods

arr=[3,4,5,6,7,8,9,10]
console.log(arr)

console.log(arr.pop()) //remove last element
console.log(arr) //remaining array

console.log(arr.push(11))//add element at end
console.log(arr)//new array

//removing first element
console.log(arr.shift())
console.log(arr.unshift(23))

//concatenation
arr1=[2,3,4,5]
arr2=[6.7,8,9]
arr=arr1.concat(arr2)
console.log(arr)

//join
 fruits=['apple','banana','carrot']
 result=fruits.join()
 console.log(result)

 //slice
 arr3=[3,4,5,6,7,8,9,10,11,12,13,14,15]
sliced_array=arr3.slice(2,5)
console.log(sliced_array)
console.log(arr3.slice(-4,-1))

//splice method
arr3.splice(4,1)

console.log(arr3)
arr3.splice(4,1,100)
console.log(arr3)

//reverse

console.log(arr3.reverse())
console.log(arr3.sort((a,b)=>a-b))
arr3=[3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(arr3.sort((a,b)=>b-a))

//tostring

arr4=[2,3,4,5,1,7]
str=arr.toString()
console.log(str)
console.log(arr4)

//flatinig

arr=[3,4,5,[7,6,8]]
flat_array=arr.flat()
console.log(flat_array)