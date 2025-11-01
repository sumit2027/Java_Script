const promisesOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complite");
    resolve();
  }, 1000);
});

promisesOne.then(function () {
  console.log("Promises consumed 1");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async to reolved 2");
});

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 3');
//         resolve();

//     },3000)
// }).then(function(){
//     console.log('Async to rosolved 3');
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 4');
//         resolve();
//     },4000)
// }).then(function(){
//     console.log('Async to rosolved 4');
// })

// new Promise(function(reolved,reject){
//     setTimeout(function(){
//         console.log('Asyne task 5');
//         reolved();
//     },5000)
// }).then(function(){
//     console.log('Asyne to reolved 5');
// })

const Promisethree = new Promise(function (reolved, reject) {
  setTimeout(function () {
    reolved({ username: "Sumit", email: "sumitkashyap753498@gmail.com" });
  }, 1000);
}).then(function (user) {
  console.log(user);
});

const promisesFour = new Promise(function (reolved, reject) {
  setTimeout(function () {
    let error = false;
    // let error = true
    if (!error) {
      reolved({ username: "sumit", password: "123456" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promisesFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() =>
    console.log("The error is solved and not solved but finally is allways Run")
  );

const promisesFive = new Promise(function (reolved, reject) {
  setTimeout(function () {
    // let error = false;
    let error = true
    if (!error) {
      reolved({ username: "javascript", password: "123456" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promisesFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// let date;
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//         const date = await response.json()
//         console.log(data);
         
//     } catch (error) {
//         console.log("E",error);
//     }
// }
// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/sumit2027')
.then((response)=> {
  return response.json()
})
.then((data)=> {
  console.log(data);
})
.catch((error)=> console.log(error)
)