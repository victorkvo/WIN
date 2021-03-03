// ARRAYYS
// data storage that's basically a list of items
//
// all arrays start at 0;

// let teachers = ['Melissa', 'Yusuf', 'Laura'];
// console.log(teachers[1]);
// console.log(teachers[2]);
// teachers[0] // Melissa

// how to access items in an array
// nameOfArray[# of item in the array that you want]
// zero-based (all arrays start at 0);


// ARRAY FUNCTIONS
//.length() : return the length of the array (how many items);
// let teachers = ['bob', 'gabe', 'taylor', 'sarah'];
// // . length chained to the end of the name of the array which you want to find the length of
// console.log(teachers.length);
// let amountOfTeachers = teachers.length;
// console.log(amountOfTeachers);


// PUSH & POP
// push - adds to the end of the array
// pop - removes from the end of the array
// changes the original array
// let teachers = ['bob', 'gabe', 'taylor', 'sarah'];
// teachers.push('Laura');
// console.log(teachers);
// teachers.pop();
// console.log(teachers);


// SHIFT & UNSHIFT
// unshift - adds to the beginning of the array
// shift - removes from the beginning of the array
// let teachers = ['bob', 'gabe', 'taylor', 'sarah'];
// teachers.unshift('Laura');
// console.log(teachers);
// teachers.shift();
// console.log(teachers);


// teachers = ['bob', 'gabe', 'taylor', 'sarah'];
// teachers[4] = "marcus";
// console.log(teachers);
// teachers[2] = "Lydia";
// console.log(teachers);



// FINDING AN ITEM
// let grades = [99,90,89,50];
// let failing = grades.indexOf(50);
// console.log(failing);

// let teachers = ['bob', 'gabe', 'taylor', 'sarah'];
// console.log(TEACHERS.INDEXoF('GABE'));


// SLICING 
// creates a new array
// Starts at first # and ends before second #
// slice(start,end)
//
// let animals = ['frogs', 'bats', 'giraffes', 'gorillas', 'lions', 'ladybug', 'alligator', 'parrot'];
// console.log(animals)
// let newanimals = animals.slice(2,4,);
// console.log(newanimals)

// let otheranimals = (2, animals.length);
// console.log(otheranimals);


// SPLICING
// Does not creat a new array; uses existing array
// arrayname.splice(start, number to remove, ...(things to add))
//
// let animals = ['frogs', 'bats', 'giraffes', 'gorillas', 'lions', 'ladybug', 'alligator', 'parrot'];
// // console.log(animals)

// animals.splice(2,4,'hedgehog','sharks','camel');
// console.log(animals)

// FOR LOOPS
//
// let animals = ['frogs', 'bats', 'hedgehog', 'sharks', 'camel', 'alligator', 'parrot'];
// for(let i = 0; i <= animals.length -1; i++){
//         // code to execute
//         console.log(`My favorite animal today is: ${animals[i]}`);
// }

// let cities = ['Paris', 'Sydney', 'Charlotte', 'San Diego', 'Berlin'];
// for(let i=0; i <= cities.length -1; i++){
//     console.log(`${cities[i]} has the best food`);
// }

// FOR EACH (method; does not return)
//


// // SORTING ARRAYS
// //
// let scores=[5,7,3,4,9];
// scores.sort();
// console.log(scores);

// // REVERSE
//
// console.log(scores.reverse());


// OBJECTS
// way to store a lot of info with labels
// defined with curly bracket {}
// each item within curly is called a key:value pairs
// actual data being stored is a value within each property
//

// let course = {
//     instructor: 'Laura',
//     ta: ['melissa', 'yusuf'],
//     length: 4,
//     students: 36,
//     subject: 'javascript'
// }

// ACCESSING items within an object
// nameOfObject.nameOfProperty
//
// let teacher = course.instructor;
// console.log(teacher);
// console.log(course.students);
// console.log(course["students"]);
// console.log(course.subject);
// console.log(course["subject"]);
// console.log(course);

// REASSIGNING values
//
// let zoo = {
//     reptiles : 'crocodile',
//     amphibian: 'frogs',
//     mammals: 'dolphins',
//     rodents: 'gopher'
// }

// zoo.amphibian = 'newt';
// zoo.mammals = "sheep";
// console.log(zoo);

// // adding a key:value pair to an object
// //

// zoo.marsupials = 'koala';
// console.log(zoo);

// // ADVANCED OBJECTS
// //
// let zoo = {
//     reptiles : ['crocodile', 'snakes', 'lizards', 'horned frogs'],
//     sections: ['safari', 'aquarium', 'aviary'],
//     management: {
//         ceo: 'tom',
//         vp: 'liz',
//         zookeepers: ['jake', 'david', 'rose', 'alexis']
//     }
// }

// zoo.reptiles.push("turkey");
// console.log(zoo.reptiles);


// ******** VALUE TYPES ********
//
// let x = 1;
// let y = 1;
// x === y; //true

// let y = x; 	// x == 1, y == 1
// x === y; 	// true

// x = 2; 		// x == 2, y == 1
// x === y; 	// false


// ******** REFERENCE TYPES ********
//
// let x = {name: 'Evan'}
// let y = {name: 'Evan'}
// x === y; //false;

// let y = x; 		//x and y are {name: 'Evan'}
// x === y;		//true

// x.name = 'Noah'
// y.name; // 'Noah'


// ******* typeof ********** js keyword that provides the data type of a value/variable





// --------- ** FUNCTIONS ** -----------
// function nameoffunction(parameters)
// function : js keyword - defines
// nameoffunction : camelCase
// parameters : define by () - anything that are required for the function to run
//
// let donationMade = prompt('how much are you donating?');
// let amountSoFar = 1000;
// let dollars = Number(donationMade)
// function nameOfFunction(dollars, amountSoFar){
//     console.log(`so far we have ${dollars + amountSoFar}`);
// };

// // Running the function:
// // Calling the name of the function (providing the parameters needed)
// nameOfFunction(dollars, amountSoFar);

// ------- ** FUNCTIONS END ** ---------