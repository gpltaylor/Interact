// Is it raining? Yes/No is expressed as true/false
var isRaining = true;
// numbers are typed as the raw number
var minsToAddIfRaining = 10;
// Dates can be used however they are more complicated.. See our Moment.JS course.
var TimeToLeave = new Date(2015,2,24,8,30);

console.log(isRaining);
console.log(minsToAddIfRaining);
console.log(TimeToLeave);

// Use the variable to translate the minsToAddIfRaining to milliseconds.
var milisecToReduce = ((minsToAddIfRaining*60)*1000);
// Create a new date variable but remove the 10 minutes.
var TimeToLeaveIfRaining = new Date(TimeToLeave - milisecToReduce);

// Display the time to leave when it's raining.
console.log(TimeToLeaveIfRaining);