function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  
  
  function fareDoubler(fare) {
    return fare * 2;
  }
  

  function fareTripler(fare) {
    return fare * 3;
  }
  
  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  
  const driversArray = ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4'];
  
  const firstTwoDrivers = selectDifferentDrivers(driversArray, returnFirstTwoDrivers);
  console.log(firstTwoDrivers); 
  

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function invokeFunctionAtIndex(index, drivers) {
  return selectingDrivers[index](drivers);
}
// Code your solution in this file!
