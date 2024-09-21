
////call method

// const person1={
//     firstName: "jhon",
//     lastName:"doe"
// }

// const person2={
//     fullname:function(city,country){
//         console.log(`${this.firstName} ${this.lastName} lives in ${city} in ${country}`)
//     }
// }

// person2.fullname.call(person1,"New Delhi","India")

////apply method

// const person1={
//     firstName: "jhon",
//     lastName:"doe"
// }

// const person2={
//     fullname:function(city,country){
//         console.log(`${this.firstName} ${this.lastName} lives in ${city} in ${country}`)
//     }
// }

// person2.fullname.apply(person1,["New Delhi","India"])

////bind method

// const person1={
//     firstName: "jhon",
//     lastName:"doe"
// }

// const person2={
//     fullname:function(city,country){
//         console.log(`${this.firstName} ${this.lastName} lives in ${city} in ${country}`)
//     }
// }

// const bound=person2.fullname.bind(person1)

// bound("New Delhi",'india')
// bound('washinfton','usa')