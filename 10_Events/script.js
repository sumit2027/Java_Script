// // type, timestemp, defaultPrevented
// // EventTarget, toElement, srcElement, currentTarget
// // clientX, clientY, screenX, screeny
// // altkey, ctrlkey, shiftkey, keyCode

// document.getElementById('images').addEventListener('click', function(e){
//     // alert('Owl is clicked again')
//     // console.log(e);
//     console.log('clicked inside the ul');
// },false)
// document.getElementById('owl').addEventListener('click', function(e){
//     // alert('Owl is clicked again')
//     // console.log(e);
//     console.log('owl clicked');
//     e.stopPropagation()
// },false)
// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('googel clicked');
    
// },false)

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
    let removeit = e.target.parentNode;
    removeit.remove();

    }
    // removeit.remove();
    // removeit.parentNode.removeChild(removeit)
})
 
