﻿angular.module('RxApp')
    .factory('StatusType', function () {
        return { live: 1, pending: 2, declined: 3 };
    });

angular.module('RxApp')
    .factory('PodService',['StatusType', function (statusType) {

        var pods = [{
            catId: 1,
            typeId: 1,
            name: 'Map',
            description: 'A little info about the Map function',
            location: '/RxJS/map',
            status: statusType.live,
            customHelp: true
        }, {
            catId: 1,
            typeId: 1,
            name: 'Select',
            description: 'Loop over the array of items and perform a calculation/transformation on the data within. The following example shows how to loop over an array and pow(2) the number.',
            location: '/RxJS/select',
            status: statusType.live
        }, {
            catId: 1,
            typeId: 1,
            name: 'GroupBy',
            description: 'info about group by',
            location: '/RxJS/groupby',
            status: statusType.live,
            customHelp: true
        }, {
            catId: 1,
            typeId: 1,
            name: 'When',
            description: 'Group together a number of async calls to process a the same time. Can also chain calls to make sure they are performed in a given order without dealing with promises.',
            location: '/RxJS/when',
            status: statusType.live,
            customHelp: true
        }, {
            catId: 1,
            typeId: 1,
            name: 'Interval',
            description: 'Allows you to conditionally run tasks on a given interval. Also allowing you to Chain other RxJS methods together to provide some powerful solutions.',
            location: '/RxJS/interval',
            customHelp: true,
            status: statusType.live
        }, {
            catId: 3,
            typeId: 1,
            name: 'Using Variables',
            description: 'Explains what a variable is, how to create one.',
            location: '/JavaScript/variables',
            status: statusType.live,
            customHelp: true
        }, {
            catId: 3,
            typeId: 1,
            name: 'Function Reuse',
            description: 'Using functions to repeat the same logic/code over and over without copying and pasting. Reusing code is the corner stone to any programming language.',
            location: '/JavaScript/functions/reuse',
            status: statusType.live,
            customHelp: true
        }, {
            catId: 4,
            typeId: 1,
            name: 'format',
            description: 'Formatting Dates using Moment is simple and easy to perform. Using a JavaScript Date type we can format to any requirement you may have.',
            location: '/Moment/format',
            status: statusType.live
        }, {
            catId: 1,
            typeId: 1,
            name: 'Partition',
            description: 'Producing a set of data from a single array based on a given condition.',
            location: '/RxJS/partition',
            customHelp: true,
            status: statusType.live
        },  {
            catId: 4,
            typeId: 1,
            name: 'Time Zone',
            description: 'Working with Time Zones can be confusing at first. Here we show you how moment can make your live easier.',
            location: '/Moment/timezones',
            customHelp: true,
            status: statusType.live
        }, {
            catId: 3,
            typeId: 1,
            name: 'Promise',
            description: 'Changing the order of code execution in an asynchronous world can be tricky. Promises help make this job a little more manageable.',
            location: '/JavaScript/promise',
            customHelp: true,
            status: statusType.live
        }, {
            catId: 3,
            typeId: 1,
            name: 'Arrow Functions',
            description: 'EcmaScript 15 (JS6) includes arrowed functions. Simply put, they\'re an easier way to create functions.',
            location: '/JavaScript/arrow',
            customHelp: true,
            status: statusType.live
        }];

        return {
            pods: pods
        };

    }]);

angular.module('RxApp')
    .factory('CategoryService', ['StatusType', function (statusType) {
        var podCategories = [{
            catId: 1,
            status: statusType.live,
            name: 'Reactive Extensions (RxJS)',
            description: 'The Reactive Extensions for JavaScript (RxJS) is a set of libraries for composing asynchronous and event-based programs using observable sequences and fluent query operators that many of you already know by Array#extras in JavaScript. Using RxJS, developers represent asynchronous data streams with Observables, query asynchronous data streams using our many operators, and parameterize the concurrency in the asynchronous data streams using Schedulers. Simply put, RxJS = Observables + Operators + Schedulers.',
            version: '2.3'
        }, {
            catId: 2,
            status: statusType.pending,
            name: 'Lodash',
            description: 'A JavaScript utility library delivering consistency, modularity, performance, & extras.',
            version: '3.3.0'
        }, {
            catId: 3,
            status: statusType.live,
            name: 'Beginners JavaScript',
            description: 'A quick look at JavaScript. Shows how to create variables, Objects, Functions and then explains Scope. If you\'re wanting to get started with JavaScript this course is the best place to start.',
            version: '4'
        }, {
            catId: 4,
            status: statusType.live,
            name: 'Moment',
            description: 'Moment.JS is a library designed to assit using dates within JavaScript.',
            version: '2.9.0'
        }
        ];

        return {
            categories: podCategories
        };

    }]);

angular.module('RxApp')
    .factory('TypeService', function () {

        var podType = [{
            typeId: 1,
            name: 'Article',
            description: 'Articles are designed to help show the user a given feature. It\'s meant as a tutorials'
        }];

        return {
            types: podType
        };
    });