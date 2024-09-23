const nums =[1,2,3,4];

new_array=nums.filter((num,index,arr)=>{
    return num%2==0
})
console.log(new_array)