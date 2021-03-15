///////////////////////////////////////
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);



////////////////////////////////////////////
//   function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
//   }
  
//   myCalculator(5, 5);
  

 /////////////////////////////////// 
//   function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);


////////////////////////////////////
// console.log('1')

// setTimeout(function afterTwoSeconds() {
//   console.log('2')
// }, 2000)

// console.log('3')



// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }



/////////////////////// This is synchronous
// XMLHttpRequest - is a JS keyword; allows us to create new instances of an xml http request
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     // open, onload, and send are all required to return an xml http request.
//     req.open('GET', "https://jsonplaceholder.typicode.com/posts/1");
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(this.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.send();
//   }
  
//   getFile(myDisplayer); 



// ///////////////////////////////////// This is asynchronous

//   function ajaxCall() {
//     let ajaxRequest = new XMLHttpRequest();
  
//     ajaxRequest.onreadystatechange = function() {
//       if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
//         if (ajaxRequest.status == 200) {
//           let myDiv = document.getElementById('main');
//           let newDiv = document.createElement('div');
//           newDiv.innerHTML = ajaxRequest.responseText;
//           myDiv.appendChild(newDiv);
//         }
//         else if (ajaxRequest.status == 400) {
//           console.log('There was an error 400');
//         }
//         else {
//           console.log('something else other than 200 was returned');
//         }
//       }
//     };
  
//     ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
//     ajaxRequest.send();
//   }
//     ajaxCall();



// ///////////////// using js to make a post via server request
// var form = document.querySelector('form')
// form.onsubmit = function (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, function (err, response, body) {
//     var statusMessage = document.querySelector('.status')
//     if (err) return statusMessage.value = err
//     statusMessage.value = body
//   })
// }



// //////////// same as above but with a named function
// var form = document.querySelector('form')
// form.onsubmit = function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, function postResponse (err, response, body) {
//     var statusMessage = document.querySelector('.status')
//     if (err) return statusMessage.value = err
//     statusMessage.value = body
//   })
// }


// ////////////// now the functions can be moved to the top level of the code (example from above)
// document.querySelector('form').onsubmit = formSubmit

// function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, postResponse)
// }

// function postResponse (err, response, body) {
//   var statusMessage = document.querySelector('.status')
//   if (err) return statusMessage.value = err
//   statusMessage.value = body
// }



/////////////////////
// To modularizie, turn code into a module by splitting it up into a couple of files. Below is a new file called formuploader.js that contains the two previous functions:

// module.exports.submit = formSubmit

// function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, postResponse)
// }

// function postResponse (err, response, body) {
//   var statusMessage = document.querySelector('.status')
//   if (err) return statusMessage.value = err
//   statusMessage.value = body
// }




// ////////////////Next is require and use formuploader.js.  
// Below is how code looks currently:
// var formUploader = require('formuploader')
// document.querySelector('form').onsubmit = formUploader.submit



/////////////////////// With callbacks the most popular way to handle errors is the Node.js style where the first argument to the callback is always reserved for an error.

// var fs = require('fs')

// fs.readFile('/Does/not/exist', handleFile)

// function handleFile (error, file) {
//   if (error) return console.error('Uhoh, there was an error', error)
//   // otherwise, continue on and use `file` in your code
// }



function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "https://jsonplaceholder.typicode.com/posts/1");
    req.onload = function() {
      if (req.status == 200) {
        console.log(this.responseText);
        var parseD = JSON.parse(this.responseText); 
        console.log(parseD);
        myCallback(parseD.id);
        console.log(typeof parseD.id);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer); 





//   function ajaxCall() {
//     let ajaxRequest = new XMLHttpRequest();
  
//     ajaxRequest.onreadystatechange = function() {
//       if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
//         if (ajaxRequest.status == 200) {
//           let myDiv = document.getElementById('main');
//           let newDiv = document.createElement('div');
//           let parseD = JSON.parse(this.responseText); 
//         //   newDiv.innerHTML = ajaxRequest.responseText;
//           newDiv.innerHTML = parseD.title;
//           myDiv.appendChild(newDiv);
//           console.log(parseD.body); 
//         }
//         else if (ajaxRequest.status == 400) {
//           console.log('There was an error 400');
//         }
//         else {
//           console.log('something else other than 200 was returned');
//         }
//       }
//     };
  
//     ajaxRequest.open("GET", 'https://jsonplaceholder.typicode.com/posts/1', true);
//     ajaxRequest.send();
//   }
//   ajaxCall();

// function jsonPlaceHolderRequest(){
//     let req= new XMLHttpRequest();
//     req.open("Get","https://jsonplaceholder.typicode.com/users",true);
//     req.onload=function(){
//         if(req.status>=200 && req.status<400){
//         var data= JSON.parse(this.response)
       
//        data.forEach((user)=>{ document.getElementById('main').innerHTML+=`<ul><li>${user.name}</li><li>${user.email}</li><li>${user.username}</li></ul>`})
//         }
//         else {
//             document.getElementById('error').innerHTML=`Error: It's not working!`
             
//           }
//     }
//   req.send();
// }

// jsonPlaceHolderRequest()
