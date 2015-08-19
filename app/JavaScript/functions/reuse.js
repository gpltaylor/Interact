// Creates a variable called add that holds the function
var add = function(a, b) { return a + b; };

// Creates a function called adder.
// This will be available to the whole script, even code above this line!
function adder(a,b) { return a + b; }

// Creates a function that returns a function.
// A little odd but can be useful in some OOP design patterns
function iMath() {
    return function(a, b) { return a + b; };
}

var gas = 20;
var electric = 35;

console.log(add(gas, electric));
console.log(adder(gas, electric));
console.log(iMath()(gas, electric));