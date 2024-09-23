// const nums=[1,2,3]
// const[one, , three]=nums
// console.log(one)
// console.log(three)

// const str="Sk Samim Ali"

// const[firstName,middleName,lastName]=str.split(" ") //returns an array based on split
// console.log(firstName)
// console.log(middleName)
// console.log(lastName)

// const name="abc"

// const [char1,char2,char3]=name
// console.log(char1)
// console.log(char3)


// const[num1,num2,num3]=new Set([1,2,3])
// console.log(num1)
// console.log(num2)

// //assigning values
// const name1="jhone doe";
// const person={};

// [person.firstName,person.lastName]=name1.split(" ");
// console.log(person)

// //swapping
// let firstName1 = "John";
// let lastName1 = "doe"; // Capitalize "L" in lastName1

// [firstName1, lastName1] = [lastName1, firstName1]; // No issues here
// console.log(firstName1, lastName1); // Outputs: doe John


// const obj ={
//     firstName2: "jhone",
//     lastName2:"Doe"
     
// }

// const {firstName2,midleName2="None",lastName2}=obj //as there is no middle name ,we have set it as None otherwise it will give output as udefined
// console.log(firstName2,midleName2,lastName2)
//2nd case
// const firstName2="ABC"
// const obj ={
//     firstName2: "jhone",
//     lastName2:"Doe"
     
// }

// const {firstName2:fn,midleName2="None",lastName2}=obj //as first name is exist we use fn 
// console.log(fn,midleName2,lastName2) 

// const obj ={
//     firstName2: "jhone",
//     lastName2:"Doe"
     
// }

// const {lastName2}=obj //don't need commas
// console.log(lastName2)

// let options={
//     size:{
//         width:100,
//         height:200
//     },
//     items:["Cake","Donut"],
//     extra:true
// }

// const {
//     size:{width},
//     items:[,item2]
// }=options
// console.log(width,item2)

//function using destructing

// function name({fn,ln}){
//     console.log(`${fn} ${ln}`)
// }

// name({
//     ln:"doe",
//     fn:"john"
// })