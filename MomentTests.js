// Testing the Moment.js library

// Importing Moment.js
const moment = require('moment');

// Creating a now moment object.
const now = moment();

// Formatting the now moment object in the YYYY-MM-DD HH:mm:ss format.
console.log(`The current date and time is ${now.format('YYYY-MM-DD HH:mm:ss')}`);

// Getting and logging the month from the now moment object.
// Need to add 1 because months start at 0.
const month = now.month() + 1;
console.log(`The current month is ${month}`);

// Getting and logging the hour from the now moment object.
const hour = now.hour();
console.log(`The current hour is ${hour}`);

// Adding a day to the now moment object.
const tomorrow = now.add(1, 'day');
// Logging the new date and time.
console.log(`The date and time in one day is ${tomorrow.format('YYYY-MM-DD HH:mm:ss')}`);

// Subtracting a month from the now moment object.
const lastMonth = now.subtract(1, 'month');
// Logging the new date and time.
console.log(`The date and time one month ago was ${lastMonth.format('YYYY-MM-DD HH:mm:ss')}`);

// Creating two new moment objects.
const date1 = moment('2019-04-13');
const date2 = moment('2022-03-11');
// Calculating the difference between the two dates in days.
const differenceInDays = date2.diff(date1, 'days');
// Logging the difference in days.
console.log(`The difference between ${date1.format('YYYY-MM-DD')} and ${date2.format('YYYY-MM-DD')} in days is ${differenceInDays}`);