// // const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')
// setInterval(function(){
//     const date = new Date();
//     // console.log(date.toLocaleTimeString());
//     // clock.innerHTML = date.toLocaleTimeString();
//     // clock.innerHTML = date.toLocaleDateString();
//     // clock.innerHTML = date.toLocaleString();
//     console.log(date.toLocaleString());
//     const clock = document.getElementById('clock')
//     // let date = new Date();
//     // console.log(date.toTimeString());

//     // setInterval(function(){
//     // let date = new Date();
//     // console.log(date.toTimeString());
// },1000)
    
// // },1000)



const clock = document.querySelector("#clock");
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleString())
    clock.innerHTML = date.toLocaleDateString();
    clock.innerHTML = date.toLocaleTimeString();
    clock.innerHTML = date.toLocaleString();
});




























