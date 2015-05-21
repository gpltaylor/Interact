//Simulate a time delay that you might get when calling and Web Service
var getPriceFrom = function(arg, price, time) {
    return Rx.Observable.timer(time).thenDo(function() {
        return {name: arg, price: price};
        }
    );
};

var data = Rx.Observable.when(
    getPriceFrom('Johns Ice Creams', 3.99, 1000),
    getPriceFrom('Fredricks ice Cream', 2.99, 2000),
    getPriceFrom('Bills Ice Cream', 12.99, 4000),
    getPriceFrom('Joe ice Cream', 1.99, 800),
    getPriceFrom('Kates ice Cream', 5.99, 2000)
);

// This allows you to customise how you wish to compare objects.
// Here we are comparing based on the price of the Ice Cream.
var IceCreamCompare = function(curr, pre){
  if(curr.price < pre.price) { return -1; }
  else
  if(curr.price > pre.price) { return 1; }

  return 0;
};

// Select all the items as they arrive
data.forEach(function(data) {
   console.log("ForEach:", data);
});

data.min(IceCreamCompare).forEach(function(data) {
    console.log("min forEach", data);
});

data.max(IceCreamCompare).forEach(function(data) {
    console.log("max forEach", data);
});