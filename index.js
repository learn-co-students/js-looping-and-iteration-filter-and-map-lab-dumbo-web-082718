// Code your solution here:


function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver=>driver.revenue>revenue)
}


function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver=>driver.name)
}


function exactMatch(drivers, attributeObject){
  return drivers.filter(driver=>driver[Object.keys(attributeObject)]==Object.values(attributeObject))
}

function exactMatchToList(drivers, attributeObject){
  return exactMatch(drivers, attributeObject).map(driver=>driver.name)
}
