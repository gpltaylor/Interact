var codes = [
    { term: 12, loan: 1000},
    { term: 12, loan: 1000},
    { term: 24, loan: 1000},
    { term: 60, loan: 1000},
    { term: 60, loan: 1000},
    { term: 60, loan: 1000},
    { term: 120, loan: 1000}
];

var source = Rx.Observable
    .from(codes)
    .groupBy(
        function (x) { return x.term; },
        function (x) { return x.loan; }
    );

source.forEach(function(data) {
    data
        .sum()
        .subscribe(function (x) {
            console.log('Total Loans ' + x + ' of Term ' + data.key);
        });
});