/* Using a disposable */
var source = Rx.Observable.create(function (observer) {
    observer.onNext(42);
    observer.onNext(43);
    observer.onNext(44);
    observer.onCompleted();
    observer.onNext(45);
    

    // Note that this is optional, you do not have to return this if you require no cleanup
    return Rx.Disposable.create(function () {
        console.log('disposed');
    });
});

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

