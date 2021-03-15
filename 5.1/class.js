// // The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.
// async function f() {
//     return 1;
//   }
  
//   f().then(alert); // 1



// // The await keyword will pause execution until a promise is resolved. This can ONLY be used within async functions.
// So in this case, the function will pause it's execution at line 7 until the promise is resolved. In this code, it will pause for 1 second.
// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     alert(result); // "done!"
//   }
  
//   f();


// // Fail example of the above function; does NOT include the 'await' keyword
//   async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = promise; // do NOT wait until the promise resolves (*)
  
//     alert(result); // "[object Promise]"
//   }
  
//   f();



function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('http://httpstat.us/500')
  .catch(alert); // Error: 500



