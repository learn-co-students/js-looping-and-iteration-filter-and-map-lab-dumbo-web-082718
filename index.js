// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(function(driver){
    return driver.revenue > revenue;
  });
}
function driverNamesWithRevenueOver(driver, revenue){
  return driversWithRevenueOver(driver, revenue).map(function(driver){
    return driver.name;
  })
}
function exactMatch(driver, obj){
  let key = Object.keys(obj)[0];
  return driver.filter(function(e){
    return e[key] === obj[key];
  });
}

function exactMatchToList(driver, obj){
  return exactMatch(driver, obj).map(function(driver){
    return driver.name;
  })
}
