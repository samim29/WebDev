function outer(num1){
    var num2=20;
    return function(){
        return num1+num2
    }
}

const closure=outer(10)
console.log(closure())//it has still the access of the parameter of the outer function
