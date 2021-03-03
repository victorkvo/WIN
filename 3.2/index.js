//Declare an add function
// function add(number1, number2) {
// 	return number1 + number2;
// }

// //Declare a function that takes a function as an argument
// function doMath(operation, number1, number2) {
// 	return operation(number1,number2);
// }

// console.log(doMath(add,4,6));

// // // //Pass a function into another.
// // let sum = doMath(add, 1, 2);




// // *******FILTER ARRAY FUNCTION
// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.filter(function(student){
// 	return student.average > 60;
// });

// console.log(passingStudents);
// passingStudents === [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Paul McCartney', average: 82}
// ];


// Return all elements of an array that pass a truth test.
// How to write a filter function without using the .filter
// filter = function (collection, test) {
//     const passedArray = [];
//     each(collection, (element, index, array) => {
//       if (test(element, index, array)) {
//         passedArray.push(element)
//       }
//     })
//     return passedArray;
//   };


//   each(array, function (item, index) {
// 	if (item === target && result === -1) {
// 	  result = index;
// 	}
//   });

//   return result;
// };
// END *** Return all elements of an array that pass a truth test.
// How to write a filter function without using the .filter





// // // ********FIND ARRAY FUNCTION
// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.find(function(student){
// 	// it will find the first item in the array that matches this conditional statement
// 	return student.average > 50;
// });

// passingStudents === [
// 	{name: 'John Lennon', average: 90}
// ];




// // ********* MAP ARRAY FUNCTION
// The Array's Map function lets you iterate over an array and produce another array with a new value for each item, essentially transforming each element in the array. Note that this is a 1:1 transformation, so each element that existed in the original array will produce some value in the new array.
// let students = [
// 	{firstName: 'Cam', lastName: 'Newton'},
// 	{firstName: 'Ted', lastName: 'Ginn'},
// 	{firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullNames = students.map(function(student){
// 	return `${student.firstName} ${student.lastName}`;
// })

// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]





// // REDUCE ARRAY FUNCTION
//Sometimes you want to calculate a single value based on all the items in an array. The Array's Reduce function lets you iterate over an array and calculate a value.
// let students = [
// 	{name: 'Cam Newton', assignmentsCompleted: 6},
// 	{name: 'Ted Ginn', assignmentsCompleted: 10},
// 	{name: 'Greg Olsen', assignmentsCompleted: 8}
// ]

// let totalAssignments = students.reduce(function(sum,current){
// 	return sum + current.assignmentsCompleted;
// }, 0);

// totalAssignments === 24;




// // ******** CHALLENGE #1
// let superHeroes = [
// 	["Batman", "Bruce Wayne"],
// 	["Spiderman", "Peter Parker"],
// 	["The Flash", "Barry Allen"]
//   ]

// let secretIdentity = superHeroes.map(function(revealArray){
// 	return revealArray.join(" is ");
// })

// console.log(secretIdentity.join("\n"));





// // CALLBACK FUNCTION
// setTimeout(fx, time in milliseconds);
// run the function - first parameter AFTER time in milliseconds goes by
// setTimeout(function(){
// 	console.log('later')
// },2000);

// console.log('now');



// // // EVENT LISTENER
// button.addEventListener('click', function(){
// 	alert('click');
// })



// // // GET DATA FROM APIs
// getData('/my-api/data', function(data) {
// 	console.log('got data', data)
// });




// // THIS IS AN ASYNC FUNCTION
// let teacher = {
// 	name: 'Shane',
// 	// saving a function to the key labeled 'speak'
// 	speak: function() {
		
// 		//Maybe you're fetching data from an API, or getting user input
// 		// // setTimeout delays a function by X milliseconds
// 		setTimeout(function(){
// 			// this command will not work because it references the 'window' object from setTimeout
// 			console.log('later my name is ' + this.name);
// 		},1000)
		
// 		//Runs immediately
// 		console.log('Now my name is ' + this.name);
// 	}
// }

// teacher.speak();




// // ****************** ASSIGNING CONTEXT **********************

// // // CLOSURE HACK
// let teacher = {
// 	name: 'Shane',
// 	speak: function() {
		
// 		//Save this to a variable
// 		let self = this;
		
// 		//self is visible inside function because of closure
// 		setTimeout(function(){
// 			console.log('later my name is ' + self.name);
// 		},1000);
// 	}
// }
// teacher.speak();


// // CALL() AND APPLY()
// The only difference is that .apply() takes an array of arguments to pass to the function. .call() passes arguments one by one.
// let teacher = {name: 'Shane'};

// let speak = function(item1, item2){
// 	console.log(this.name, item1, item2);
// }

// speak.call(teacher, 'coffee', 'ramen'); //'Shane', 'coffee', 'ramen'
// speak.apply(teacher, ['coffee', 'ramen']); //'Shane', 'coffee', 'ramen'



// // FUNCTION.BIND
// Explicitly sets the this value at function definition time. This was the preferred method until ES6 came out.
// let teacher = {
// 	name: 'Shane',
// 	speak: function() {
		
// 		//Bind a function to a specific context
// 		var boundFunction = function(){
// 			console.log('later my name is ' + this.name);
// 		}.bind(this);
		
// 		//boundFunction will always run in bound context
// 		setTimeout(boundFunction,1000);
// 	}
// }

// teacher.speak();

// // ************ END OF ASSIGNING CONTEXT **************





// // // **********  ARROW FUNCTIONS  ************
// // og method - function declaration
// let someFunc = function(...params) {
// 	//Some code here
// }

// // arrow function
// let someFunc = (...params) => {
// 	//Some code here
// }

// example of arrow function
// let teacher = {
// 	name: 'Shane',
// 	speak: function() {
		
// 		//Bind a function to a specific context
// 		var boundFunction = () => {
// 			console.log('later my name is ' + this.name);
// 		};
		
// 		//boundFunction will always run in bound context
// 		setTimeout(boundFunction,1000);
// 	}
// }

// teacher.speak();




// // CHALLENGE 4 FROM PREVIOUS SLIDES

// let slideshow = {
// 	photoList: ["vacation", "summer", "animals", "kids"]
// 	currentPhotoIndex: 0;
// 	nextPHone: function{
// 		if currentPhotoIndex < 3,
		
// 	}
// }



// // let math = function (num) { return num + 5 };

// // let arr = [5, 7, 8];

// // arr.foreach(number => math(number));


// let myFunction = function (element, index) {
// 	console.log(index + ":" + element);
//   }
//   //array
//   var fruits = ["apple", "orange", "cherry"];
  
//   // loop through
//   fruits.forEach(myFunction = (element, index) => {
// 	console.log(index + ":" + element);
//   });
  
//   // function
  


//   // let math = function (num) { return num + 5 };

// // let arr = [5, 7, 8];

// // arr.foreach(number => math(number));


// // // To the ^3
// let arr=[1,2,3,4,5,6]
// let powarr=[]
// powarr=arr.map(function(item){return Math.pow(item,3)})
// console.log("to the power of 3 \n"+powarr)



//////////////////////////////////////////////////////////////
// let arr=[1,2,3,4,5,6]


// let newarr=[]
// arr.forEach((item,index) => { newarr.push(item+index); })
// console.log(newarr)


// let evenArr=[]
// evenArr=arr.filter(item=> item%2==0)
// console.log("even numbers\n"+evenArr)


// let powarr=[]
// powarr=arr.map(function(item){return Math.pow(item,3)})
// console.log("to the power of 3 \n"+powarr)

// let sum=arr.reduce((total,item)=>total+item)
// console.log("The sum of the array items \n"+sum)



/////////
// var dollars = [29.76, 41.85, 46.5];
// // accumulator
// var sum = dollars.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);

// // var sum = dollars.reduce(function (total, amount) {
// //   console.log(total);
// //   return total + amount;
// // });

// console.log(sum) // 118.11




function myFunction(parameter, placeHolderName, willBeReplaced){
    return `hello, ${parameter}, today we're talking about: ${placeHolderName},... ${willBeReplaced}`;
}

console.log(myFunction("dookie", "dook", "poop"));
