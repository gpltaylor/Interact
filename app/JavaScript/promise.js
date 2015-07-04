console.log("init");

var p1 = new Promise(
    function (resolve, reject) {
        console.log("Promise running");

        window.setTimeout(
            function () {
                console.log("setTimeout running");
                resolve({id:1, name:'data to return from promise'});
            }, 5000);
    });

p1.then(function (data) {
    console.log("Done", data);
    $scope.$apply();
}).catch(function () {
    console.log('promise was rejected');
    $scope.$apply();
});
