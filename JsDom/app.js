// let links=document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color="green";
// }

// let para1=document.createElement('p');
// para1.innerText="hey, I am Red!";
// let bdy=document.querySelector('body');
// bdy.append(para1);
// para1.classList.add('red');

// let header=document.createElement('h3');
// header.innerText="i am blue h3!";
// bdy.append(header);
// header.classList.add('blue');

// let div=document.createElement('div');

// div.classList.add('outerDiv');

// let h1=document.createElement('h1');
// h1.innerText="I am a div";
// div.append(h1);

// let para2=document.createElement('p');
// para2.innerText="ME TOO!";
// div.append(para2);
// bdy.append(div);


// let input=document.createElement('input');
// let btn=document.createElement('button');
// btn.innerText="Click me";
// document.querySelector('body').append(input);
// document.querySelector('body').append(btn);

// input.setAttribute('placeholder',"username");
// btn.setAttribute('id','btn');

// let btn=document.querySelector('button');
// console.dir(btn);

// btn.onclick=function(){
//     console.warn("button was clicked");
// }

// let btn=document.querySelector('button');


// let getrandomcolor=function () {

//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`rgb(${red}, ${green}, ${blue})`;
//     return color;


// }
// btn.addEventListener('click',function(){
//     let h3=document.querySelector('h3');
//     let randomcolor=getrandomcolor();
//     h3.innerText=randomcolor;
//     let div=document.querySelector('div');
//     div.style.backgroundColor=randomcolor;

// })

let inp=document.querySelector('input');
inp.addEventListener("keydown",function(){
    console.log("key was pressed");
})