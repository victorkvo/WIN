// function doHomework(subject) {
//     alert(`Starting my ${subject} homework.`);
//   }

//   doHomework('math');
// // Alerts: Starting my math homework.


// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework.`);
//     callback();
//   }
  
//   doHomework('math', function() {
//     alert('Finished my homework');
//   });




//   function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework.`);
//     callback();
//   }
//   function alertFinished(){
//     alert('Finished my homework');
//   }
//   doHomework('math', alertFinished);

// var yourName = prompt("What is your name?");
// function bye(yourName){
//     console.log("goodbye " + yourName);
// }
// function hello(yourName){
//     console.log("hello " + yourName);
//     setTimeout(function(){
//         bye(yourName)}, 2000)
// }

// hello("peter");

// function output(some){
//     setTimeout(function(){
//         document.getElementById("message").innerHTML = some;},5000);
// }
// function hello(yourName, myCallback){
//     let message=("hello " + yourName);
//     console.log(message);
//     myCallback(message);
// }

// // hello("peter", output);
// https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png

// setTimeout(function() { 
//     myFunction("I love You !!!"); }, 3000);

    function myFunction() {
        var img = document.createElement('img'); 
        img.src =  
'https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png'; 
        document.getElementById('body').appendChild(img); 
        down.innerHTML = "Image Element Added.";
    }

    myFunction();
   