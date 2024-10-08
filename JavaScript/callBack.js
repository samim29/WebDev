
//Synchronus call back
function f1(callback){
    callback()
}

function f2(){
    console.log("I am the call back function: ")
}
f1(f2)