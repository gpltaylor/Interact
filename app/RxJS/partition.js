
var data = Rx.Observable
    .range(0, 10)
    .partition(function(x) {
        // Is divisible by 2?
        return (x % 2) === 0;
    });

// Put the data into nice variable names
var even, odds;
even = data[0];
odds = data[1];

console.log("Even");
even.forEach(function(d) {
    console.log(d);
});

console.log("Odds");
odds.forEach(function(d) {
    console.log(d);
});