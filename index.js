// Code your solution here
function findMatching(arrOfDrivers, name){
    return arrOfDrivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(arrOfDrivers, name){
    return arrOfDrivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()))
}
// Referance of startsWith()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

function matchName (arrOfDriversObs, name){
    return arrOfDriversObs.filter(driver => driver.name.toLowerCase() === name.toLowerCase())
}