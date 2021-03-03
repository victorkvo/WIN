// one
// //Get a single node
// document is a keyword in js 
// .getElementById() -- method that is going to search through the dom's nodes (html file's elements) and its going to FIND the first element with an id of (whatever is in the parameter)
// let el = document.getElementById('username');
// console.log(el);
// end one

// two
// let wordsElement= document.getElementById('words');
// console.log(wordsElement);

// //Get all inputs
// let inputs = document.getElementsByTagName('input');
// let inError = document.getElementsByClassName('error');

// console.log(inputs.length); //2
// console.log(inError.length); //1
// end two

// // three
//     //Get all inputs
    // let firstButton = document.querySelector('button');
    // let inError = document.querySelectorAll('input.error');

//     console.log(firstButton); //single button node
//     console.log(inError); //Node list of inputs with class 'error'

// // end three

// // four
//     let links = document.querySelectorAll('a');

//     //Works!
//     let linkCount = links.length;
//     let firstLink = links[0];

//     //Doesn't work!
//     links.forEach(function(link){
// 	//do something with link
//     });

//     let links = document.querySelectorAll('a');
//     let arrayOfLinks = Array.from(links);
// // end four

// let firstButton = document.querySelector('button');
// let inError = document.querySelectorAll('input.error');
// let inputs = document.getElementsByTagName('input');

// // practice
// let el = document.getElementById('username');
// console.log(el);
// let classname = document.getElementsByClassName('name');
// console.log(classname);
// let inputs = document.getElementsByTagName('input');
// console.log(inputs);
// let inputter = document.querySelectorAll('input');
// console.log(inputter);
// // end practice


// // traversing the dom
// let listItems = document.querySelector('ul').children;
// console.log(listItems.length); //2
// // end traversing the dom


// let selectedItem = document.querySelector('li.selected');
// let first = selectedItem.previousElementSibling;
// let last = selectedItem.nextElementSibling;
// let list = selectedItem.parentElement;
// let header = selectedItem.parentElement.parentElement;
// let section = selectedItem.parentElement.parentElement.nextElementSibling;



// // exercise #1
// let header = document.getElementsByTagName('header');
// let header1 = document.querySelector('header');
// console.log(header);
// console.log(header1);
// let section = document.querySelectorAll('section');
// console.log(section); 
// // end exercise #1


// // // Creating an element and appending a child **********
// // 1. Create a new element using .createdElement()
// let newLI = document.createElement('li');

// // 2. define whats inside of the element - context
// newLI.innerHTML = "Item 2";

// // 3. find an element in the dom to append your new element to
// let list = document.querySelector('ul');
// list.appendChild(newLI); //Insert after item 1
// // // End Creating an element and appending a child



// // *********** EVENT OBJECT *************************
let el = document.getElementById('myEl');
// 1. element that's listening
// 2. starting the method
// 3. (A - the kind of event that we're listening for, B - the function that we want to run when that event happens)
// the event parameter passed into the function is the event itself (whether it's a click, mouseover, keyboard up arrow)
el.addEventListener('click', function(event){
    // alert is a keyword in js
	alert('clicked!');
})

//Combine with DOM editing
el.addEventListener('mouseover', function(event){
	el.innerHTML('over');
})



