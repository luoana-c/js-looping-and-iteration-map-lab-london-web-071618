// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  drivers.map(function(driver) {
    const first = driver.split(' ')[0]
    const last = driver.split(' ')[1]
    console.log(first)
    
    return {firstName: first, lastName: last}  
  })
}