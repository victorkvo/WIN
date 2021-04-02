// let helloWorld = "Hello World";
// console.log(helloWorld);


// // interefaces are how we define the shape of our objects
// //they are the templates of our objects

// interface User {
//     name: string;
//     id: number;
//   }

//   const user: User = {
//     name: "Hayes",
//     id: 0,
//   };


//   // variable: type = value/literal
//   let completed: boolean = false;
//   let decimal: number = 6;
//   // let big: bigint = 100n;
//   let c: string = "blue";
//   // below is not allowed
//   // color = 4;

//   let numArray: string[] = ["1", "2", "3"];
//   let list: Array<number> = [1, 2, 3]

//   let myTuple: [string, number];
//   myTuple = ["hello", 10];
//   // below will not work at it doesn't follow the corrent order of declaration
//   // myTuple = [10, "hello"];

//   enum Color {
//       Red = 1,
//       Green = 4,
//       Blue
//   }

//   let color: Color = Color.Green;
//   let myColor: Color = Color.Blue;


//   console.log(c);
//   console.log(`This is my color: ${myColor}`);

// let notSure: unknown = 4;
// notSure = "maybe a string instead";

// console.log(notSure);

// declare function getValue(key: string): any;
// // OK, return value of 'getValue' is not checked
// const str: string = getValue("myString"); 


// // any allows us to
// let looselyTyped: any = 4;
// // OK, ifItExists might exist at runtime
// looselyTyped.ifItExists();
// // OK, toFixed exists (but the compiler doesn't check)
// looselyTyped.toFixed();

// // let strictlyTyped: unknown = 4;
// // strictlyTyped.toFixed();
// // // Object is of type 'unknown'.

// function warnUser(): void {
//     console.log("This is my warning message");
//   }

// warnUser();


/////// END

// let someValue: unknown = "this is a string";

// let strLength: number = (someValue as string).length;



// let someValue: unknown = "this is a string";

// let strLength: number = (<string>someValue).length;


interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }
  
  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
      }
    constructor(h: number, m: number) {}
  }




  interface Shape {
    color: string;
  }
  
  interface PenStroke {
    penWidth: number;
  }
   
  interface Square extends Shape, PenStroke {
    sideLength: number;
  }
   
  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;

