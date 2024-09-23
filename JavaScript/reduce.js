const nums=[1,2,3,4,5]
const total=nums.reduce((sum,num,index,array)=>{return sum+num},0)
console.log(total)