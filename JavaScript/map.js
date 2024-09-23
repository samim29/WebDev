const nums =[1,2,3,4];

new_array=nums.map((num,index,arr)=>{
    return num*2
})
console.log(new_array)

// new_array=nums.map((num,index,arr)=> num*2) //as arrow function we can ommit return in this case
// console.log(new_array)