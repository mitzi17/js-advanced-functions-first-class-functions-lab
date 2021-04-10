// Code your solution in this file!

// a const variable that is assigned an anonymous function
const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// higher-order function that takes in one argument, and returns a function

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversArr, returnDrivers) {
    return returnDrivers(driversArr)
} 