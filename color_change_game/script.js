const randomColor = function(){
    const hax = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hax[Math.floor(Math.random() * 16)];
    }
    return color
};

let intervalId;
const stertChangingColor = function(){

    intervalId = setInterval(changeBGcolor,1000)
     function changeBGcolor (){
        document.body.style.backgroundColor = randomColor();
     }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};
document.querySelector('#start').addEventListener('click',stertChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)