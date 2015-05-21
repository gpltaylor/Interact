// Load Angular Factory that contains pod data used within our menu
// This can demo how we filter our menu.
var injector = angular.element(document.body).injector();
var PodService = injector.get('PodService');
var CatService = injector.get('CategoryService');

// Map the data together in a usable way
var data = CatService.categories.map(function(cat) {
    return { 
        catId: cat.catId,
        name: cat.name,
        description: cat.description,
        pods: PodService.pods.filter(function(pod) { return pod.catId === cat.catId; })
        .map(function(pod){ return pod;})
    };
});

data.forEach(function(pod) {
    console.log(pod);
});