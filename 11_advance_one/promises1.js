const promisesOne = new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('thie is first');
        resolve();
        
    },1000)
}).then(()=> {
    console.log('sumit'); 
})
// en(function(){
//     console.log("this is 1"); 
// })
