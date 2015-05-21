var source = Rx.Observable.range(1, 3)
    .map(function (x, idx, obs) {
        return x * x;
    });

source.forEach(function(x) {
   console.log(x);
});