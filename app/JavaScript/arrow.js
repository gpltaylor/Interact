'use strict';

console.log('Arrow Functions');

// Old School function
var func = function (msg) {
    return "func: " + msg;
};

// Arrowed Function
var funcNew = (msg)=> {
return "funcNew: " + msg;
};

var funcRunner = function (success, failed) {
    // Do some work then run a callback
    if (Math.random() > 0.5) {
        success();
    } else {
        failed();
    }
};

console.log(func('Old School'));
console.log(funcNew('The new world'));

funcRunner(
    ()=> { console.log('success')}, // Success Function
    ()=> { console.log('failed') } // Failed Function
);