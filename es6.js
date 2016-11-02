"use strict";

// let and const

function func1() {
  if (true) {
      let tmp = 123;
  }
  console.log("func1 tmp", tmp); // tmp is only available inside the code block
}
// func1();

// In contrast, var-declared variables are function-scoped:
function func2() {
  if (true) {
      var tmp = 123;
  }
  console.log("func2 tmp", tmp); // 123
}
//func2();

// Block scoping means that you can shadow variables within a function
// `var` gets scoped to the current function block
// `let` gets scoped to the current block. Both are global if not in a block.
function func3() {
  var foo = 5;
  if (true) {
     var foo = 10;
  }
  console.log("func3 with var", foo);
}
 // func3();

function func4() {
  let foo = 5;
  if (true) {
     let foo = 10; // shadows outer `foo` (uses the same var name)
     console.log("foo inside", foo); // 10
  }
  // console.log("func4 with let", foo); // 5
}
// func4();

//be carefull when expecting a value outside of code block
function func5(){
  for (var i = 0; i < 10; i++){
    //do some stuff
  }
  //want to do something based on i
  console.log("the total number of products", i);
};

// func5();



//block-scoped and cannot change/reassigned
const MY_FAVORITE_NUMBER = 3;
// MY_FAVORITE_NUMBER = 12; // SyntaxError

// console.log("MY_FAVORITE_NUMBER", MY_FAVORITE_NUMBER );



// *************** Arrow functions *******************

var reflect = function(value) {
    return value;
};

// console.log("reflect in ES5: ", reflect("ES5 is so yesterday.") );

// effectively equivalent to:

var reflect = value => value;

// console.log("reflect in ES6: ", reflect("ES6 is the new hotness.") );


//with multiple arguments, previous
var sum = function(num1, num2) {
    return num1 + num2;
};
// console.log("sum the old way", sum(3,3));


// With more than one arg you need parens
var sum = (num1, num2) => num1 + num2;
// console.log("summing new", sum(3,3));

//a function without arguments
var sum = function() {
    return 1 + 2;
};
// console.log("previous without arguments", sum());

// // Without args, you need an empty parens
var sum = () => 1 + 2;
// console.log("I'm sum pretty", sum());




// // ****************** Object Literal Property Value Shorthand ****************

//define the variables and set values in object.
let wow = "Hi there",
    es6 = "ES6",
    myMessage = () => {console.log("howdy");};

let myOldObj = {
  wow: wow,
  es6: es6,
  myMessage: myMessage
};

// console.log("myOldObj", myOldObj );
//new shorthand
let myNewObj = {
  wow, es6, myMessage
};

// console.log("my New Obj", myNewObj);
// myNewObj.myMessage();

