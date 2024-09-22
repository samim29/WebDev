 //Implement a findIndex function that returns the index of the first element in an array that satisfies a
// given condition.

function checkIndex(arr,callback){
    for (i=0;i<arr.length;i++){
        if(callback(arr[i])){
            return i
        }
    }
    return -1
}

let arr=[1,2,3,4,5,6,7]
console.log(checkIndex(arr,(num)=>num>5))