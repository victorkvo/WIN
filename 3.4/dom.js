// // a <p> with red text that says “Hey I’m red!”
// let newP = document.createElement('p');
// newP.style.color = "red";
// newP.innerHTML = "Hey I'm red";
// container.append(newP);

// // another way to do it
// // a <p> with red text that says “Hey I’m red!”
// let newP1 = document.createElement("p"); newP1.id='p1';
// let newP1text = document.createTextNode("Hey I'm red");
// newP1.append(newP1text);
// document.body.append(newP1);
// document.getElementById('p1').style.color="red";


// // an <h3> with blue text that says “I’m a blue h3!”
// let newH3 = document.createElement("h3"); newH3.id='h3blue';
// let newH3t = document.createTextNode("I'm a blue h3!");
// newH3.append(newH3t);
// document.body.append(newH3);
// newH3.style.color ="blue";

// // // difference between innerHTML and assigning createTextNode to a var.
// // innerHTML will replace text
// let newtext1 = document.createTextNode(" 1111 ");
// let newtext2 = document.createTextNode(" 2222 ");
// // newH3.append(newtext1);
// // newH3.innerHTML = "something";
// // newH3.append(newtext2);


// // // Testing out bg color
// // document.getElementById('h3blue').setAttribute("style", "color:blue; background-color:black");
// // document.getElementById('container').setAttribute("style", "background-color:black");



// // a <div> with a black border and pink background color with the following elements inside of it:
// // another <h1> that says “I’m in a div”
// // a <p> that says “ME TOO!”
// // Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
// let newDiv = document.createElement("div"); newDiv.id='divbbpbg';
// let newH1 = document.createElement("h1"); newH1.id='H1new';
// let newPa = document.createElement("p"); newPa.id='pnew';
// newH1.innerHTML = "I'm in a div";
// newPa.innerHTML = "ME TOO!";
// newDiv.append(newH1);
// newDiv.append(newPa);
// document.body.append(newDiv);
// document.getElementById('divbbpbg').setAttribute("style", "background-color:pink; border:thick solid #000000");




// // a <p> with red text that says “Hey I’m red!”
// // an <h3> with blue text that says “I’m a blue h3!”
// // a <div> with a black border and pink background color with the following elements inside of it:
// // another <h1> that says “I’m in a div”
// // a <p> that says “ME TOO!”
// // Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.


// let list = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
// list[4] = 'fair trade coffee';
// list.push('fruit loops');
// list.splice(2,2,'rice', 'beans');

// let cart = [];
// cart.push(list.pop());
// cart.push(list.shift());

// while(list.length > 0)
//     cart.push(list.pop());

// cart.sort().reverse();
// console.log("My cart contains: ", cart.join(','));


// var collection = ["boots"],{
//     add: function(stuff){
//         this.collection.push(stuff);
//     },
//     remove: function(stuff){
//         this.collection.splice(stuff)
//     }
// }




// var inventory = {
//     collection: ["boots"],
//     add: function(stuff){
//         this.collection.push(stuff);
//     },
//     remove: function(stuff){
//         this.collection.splice(stuff);
//     }
    
// };




// var inventory = {
//     collection:[],

//     add: function(name){
//         this.collection.push(name);
//     },
//     remove: function(name){
//         this.collection.splice(name);
//     }
// };


function inventoryList() {


    let inventoty={
         items:[],
         add:function(item) {
          if(this.items.length<10 && item.length!=0){// The size of the collection will not exceed 10 and the item added not empty
             if(this.items.find(value=> value===item))
             console.log("This item is already there")
           else
             this.items.push(item)
            }
          },
    
          remove:function(item) {
            if(item.length!=0)
              for(let i=0;i<this.items.length;i++)
                { 
                 if(this.items[i]===item)
                 {    this.items.splice(i,1);
                 break;
                 }
                 }    
                  },
                  getList:function() {
                    if(this.items.length==0)
                        console.log("No Items")
                     else   
                      console.log(this.items.join(","))
                    
                  }
    
    }
    return inventoty;
    }
      
    


