// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  drivers.map(function(driver) {
    const first = driver.substr(0,str.indexOf(' '))
    const last = driver.substr(str.indexOf(' ') + 1)
    
    return {firstName: first, lastName: last}  
  }
}