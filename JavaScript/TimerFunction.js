// let count=10

// const countdown=()=>{
//     console.log(count--)
//     if(count==0){
//         clearInterval(timer)
//     }
// }
// const timer=setInterval(countdown,1000)

//function to simulate starting a download
// function StartDownload(){
//     console.log("Download Started. Please wait..");
//     //simulate download logic
// }

// function initiateDownload(){
//     console.log("Initiating download. The download will start in 3 seconds")
//     setTimeout(StartDownload,3000);
// }

// initiateDownload();

const timeoutId=setTimeout(()=>console.log("hi"),1000);
clearTimeout(timeoutId)
console.log("Timeot has been cleared");