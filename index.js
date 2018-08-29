// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  arr = drivers.map(function(driver) {
    const first = driver.split(' ')[0]
    const last = driver.split(' ')[1]
    
    return {firstName: first, lastName: last} 
  })
  return arr
}

function attributesToPhrase(drivers){
  arr = drivers.map(function (driver) {
    return [`${driver.name} is from ${driver.hometown}`]
  })
  return arr
}
