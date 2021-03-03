// console.log('hello world');
// var myAge = 30;
// console.log(myAge);
// const favePizza = 'pepperoni';
// console.log(favePizza);
// var myNum = 5;
// let greeting = 'hello world';
// let wrong = false;
// myAge = 21
// console.log(myAge, greeting);


// let amountraisedsofar = 1000;
// let donation = prompt("How much?");

// console.log(typeof donation);

// amountraisedsofar = Number(donation) + amountraisedsofar

// console.log(amountraisedsofar)


// Type Casting//
// let x = parseInt("10");
// console.log(x);
// x = parseFloat("10.55");
// console.log(x);
// let l = 5;
// console.log(l);
// let y = l.toString();
// console.log(y);
// console.log(typeof(y));


// if statements //

// let x = true;
// console.log(typeof(x));

// if (something in here iss true) then {
//    execute code that's inside these curly brackets
// }

// let raining = false

// if(!raining) {
//     console.log("i'll go to the park");
// } else {
//     console.log("no thanks, I'm staying home");
// }


//Multiple if else statements
// let temp = 90;

// if (temp > 45) {
//     console.log("I'm going hiking!");
// } else if (temp < 45 && temp > 20) {
//     console.log("It's too cold to go hiking");
// } else {
//     console.log("I'll stay home");
// }

//color
// let color = "red";

// if( color == "red"){
//     console.log('color is red')
// } else if (color == "orange"){
//     console.log('color is orange')
// } else if (color == "yellow"){
//     console.log('color is yellow')
// }
// else if (color == "green"){
//     console.log('color is green')
// }
// else if (color == "blue"){
//     console.log('color is blue')
// } else {
//     console.log("color isn't in the rainbow");
// }


// FOR LOOP
// for (starting point; keep going until you reach a certain point; how you want to iterate through data set ) {
//     whatever code you want to run and be applied at EACH item in your loop.
// }

// i + 1  //i++
// 10 + 1  == 10++  //11

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let i = 0; i<=9; i++) {
//     console.log("currently at item:" + i);
//     console.log(`current + 2) ${i + 2}`);
// }

// how to loop through a set of numbers 0-20
// how to add 2 to each imtem ONLY IF that item is an even number
// for(let i=0; i<=20; i++) {
//     if(i % 2 == 0) {
//         console.log(i+2)
//     } else {
//         console.log("odd")
//     }

// }



// how to loop through a set of numbers 0-20;
// how to add 2 to each item ONLY IF that item is an even number
// for (let i = 0; i <= 20; i++) {
//     console.log("current item: "+ i);

    // is it even?
    // if a number is divisible by 2 == even
    // i = current item in our loop
    // divide i by 2 and give us any remainder 
    // is the result of that division

//   if (i % 2 == 0) {
//     console.log(i + 2);
//   } else {
//     console.log("odd");
//   }
// }


// FOR STATEMENT

// var i;
// for (i = 0; i < 3; i = i + 1)
// {
//     console.log(i);
// }

// var myArray = ["A", "B", "C"];
// for (var i = 0; i < myArray.length; i++)
// {
//     console.log("The member of myArray in index " + i + " is " + myArray[i]);
// }


// WHILE STATEMENT

// var i = 99;
// while (i > 0)
// {
//     console.log(i + " bottles of beer on the wall");
//     i -= 1;
// }


// BREAK STATEMENT

// var i = 99;
// while (true)
// {
//     console.log(i + " bottles of beer on the wall");
//     i -= 1;
//     if (i == 0)
//     {
//         break;
//     }
// }

// CONTINUE STATEMENT

// for (var i = 0; i < 100; i++)
// {
//     // check that the number is even
//     if (i % 2 == 0)
//     {
//          continue;
//     }
//     // if we got here, then i is odd.
//     console.log(i + " is an odd number.");
// }


// var personObject = {
//     firstName : "John"
//     lastName : "Smith"
//     age : 23
//     employed : true
// }

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.employed);

// var person = {
//     firstName : "Jack",
//     lastName : "Smith",
//     age : 19,
//     employed : true
// }

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.employed);




// var multiplyFive = function (Number) {
//     return Number * 5;
// }
// console.log(multiplyFive(3));
// console.log(multiplyFive(4));
// console.log(multiplyFive(5));
// console.log(multiplyFive(6));


// CHALLENGE #2 SWIMMING POOL TEMP

// let temp = 85;
// let precipitation = false;
// let indoors = true;

// console.log("The temperature is " + temp + " degrees");

// if (temp > 80 && precipitation === false) {
//   console.log("time to swim!");
// } else if (indoors) {
//   console.log("time to swim!");
// }


// ROOT BEER COUNTDOWN

// for (let bottle = 99; bottle >= 0; bottle --){

//     if (bottle === 0) {
//       console.log("Hey! Go buy more root beer!");
//     } else {
//         console.log(bottle + " bottles of root beer on the wall");
//     }
//   }


// student = true;
// if(student == true){
//     // execute any code  
//     console.log('you have hw today') ; 
// }

// students = ['mary', 'thomas', 'frank','sue','grant'];
// // looping through a set data
// for(let i = 0; i < students.length; i++){
//     // execute any code
//     // applied to EACH ITEM individually 
//     // ${any variable goes inside of this}
//     console.log(` ${students[i]}  you get 5 extra points today!`);
// }

// FOR LOOP

// for(let i = 0; i <=10; i++){
//     console.log(`num + 5:  ${i+5}`)
// }


// let paper = 2;
// while(paper <= 10){
//  paper = paper + 1;
//     console.log(paper)
// }
//  paper++
//  paper +=1


// DO WHILE LOOP
// let paper = 2;
// do{
//     paper = paper +1;
//     console.log(paper);
// } while(paper <=10)


// BREAK AND CONTINUE
// for(let i = 0; i < 10; i++) {
// 	console.log(i);
// 	console.log('before break'); // will only print once
// 	break; // exits the next loop
// 	console.log('after break'); //never happens
// }

// for(let i = 0; i < 10; i++) {
// 	console.log(i);
// 	console.log('before continue'); // will print 10 times
// 	continue; // continues to the next iteration
//     i + 10;
// 	console.log('after continue'); //never happens
// }

// SWITCH
// let x = 1
// switch(x) {
// 	case 3:
// 		console.log('three')
// 	case 1:
// 		console.log(1);
// 		//break;
// 	case 2:
// 		console.log(2);
// 		break;
// 	default:
// 		console.log('default')
// }


// let myNumber = 3;
// switch(myNumber) {
//     case 3:
//         console.log ('three')
//         break;
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log('default')
// }


// DIFFERENCE BETWEEN VAR AND LET
// console.log(test); //console: undefined
// if(!test){ //true
//   var test = true; //create and assign test
//   console.log(test); //console: true
// }
// console.log(test); //this is dangerous! 

// let test = true; 
// if(test){ 
//   let test = false; //this is a completely new variable that only exists in this scope
//   console.log(test); //console: false
// }
// console.log(test); //console: true

// let test = true;
// console.log(test); // true
// if(test){
//   test = false;
//   console.log(test); // false
// }
