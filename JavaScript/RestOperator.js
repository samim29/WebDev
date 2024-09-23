const person={
    name:"john",
    age:30,
    address:{
        city:"kolkata",
        country:"India"
    }
}

const {name,...remaining}=person
console.log(remaining)