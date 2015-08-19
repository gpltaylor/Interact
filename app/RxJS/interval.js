var source = Rx.Observable
    .interval(500)
    .timeInterval()
    .map(function (x) { return x.value + ':' + x.interval; })
    .take(5);

source.forEach(function(data) {
    console.log(data);
});