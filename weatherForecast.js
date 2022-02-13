// WEATHER MESSAGE PORTFOLIO PROJECT
// Author: Henry Chen

/*
VARIABLES WE WILL USE:
* day (array);
* highTemp (random 70-90);
* lowTemp (random 40-60);
* condition (sunny, cloudy, rain, snow, fog, windy);
*/

const day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']; // need a pull a random day
const condition = ['Clear and sunny','Rain','Cloudy','Windy','Snow']; // need to pull a random condition
const highTemp = Math.floor(Math.random() * 21 + 70); // 70 to 90, inclusive. 21 unique numbers
const lowTemp = Math.floor(Math.random() * 21 + 40); // 40 to 60, inclusive. 21 unique numbers

function getDay (day) {
    return day[Math.floor(Math.random() * day.length)];
};

function getCondition (condition) {
    return condition[Math.floor(Math.random() * condition.length)];
};

function weatherMessage() {
    console.log(`For ${getDay(day)}, the high temperature will be ${highTemp}, the low temperature will be ${lowTemp}, and we will have ${getCondition(condition)} conditions.`);
    console.log(`Weather Message function is working.`);
};

weatherMessage();