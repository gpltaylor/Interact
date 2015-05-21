// Using a function
var source = Rx.Observable.range(1, 3)
    .select(function (x, idx, obs) {
        return x * x;
    });

source.forEach(function(x) {
   console.log(x);
});
