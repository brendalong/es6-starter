#What the ES6?
A few notes to get started.

ECMAScript is the standard for the JavaScript implementation.

## JavaScript Standards Timeline
* ECMAScript 3 (ES3) was released in December 1999.
* ECMAScript 4 (ES4) was abandoned.
* ECMAScript 5 (ES5) was released in December 2009.
* ECMAScript 6 (ES6) was released in June 2015, and is the latest official version of JavaScript.

##Resources
* http://es6-features.org
* https://developer.mozilla.org
    * [List of JavaScript Methods] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Methods_Index)
    * [List of JavaScript Properties] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Properties_Index)
* Try it out: https://lebab.io/try-it
* New to old: https://babeljs.io/repl

<hr>


## var and let
`var` gets scoped to the current function block, while `let` gets scoped to the current block. Both are global if not in a block. Variables declared with `let` are not accessible before they are declared in their enclosing block.

#### Global
They are identical when used like this outside a function block.

``` javascript 
let color = 'blue'; //globally scoped
var flavor = 'peach'; //globally scoped
```

#### Function
They are identical when used like this in a function block.

``` javascript
function showLikeThis() {
    let description = 'end of summer sport'; //function block scoped
    var activity = 'baseball'; //function block scoped
}
```

#### Block - the difference

`let` is only visible in the for() loop and `var` is visible to the whole function.

```javascript
function showMeTheDifference() {
    //num is *not* visible out here

    for(let num = 0; num < 5; num++ ) {
        //num is only visible in here
    }

    //num is *not* visible out here
}

function getTheDifference() {
    //int *is* visible out here

    for( var int = 0; int < 5; int++ ) {
        //int is visible to the whole function
    }

    //int *is* visible out here
}
```

## Const
Constants are block scoped and cannot be changed or re-assigned. All-caps is typical.

``` javascript
const MY_FAVORITE_NUMBER = 3;

//MY_FAVORITE_NUMBER = 12; //Syntax Error
```

## Arrow Functions

``` javascript
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

```

## Object Literal Property Value Shorthand
``` javascript
//define the variables and set values in object.
let wow = "Hi there",
    es6 = "ES6",
    myMessage = () => {
        console.log("howdy");};

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
```
