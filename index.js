const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  const quadruple = function () {
    return fare ** 2;
  };
  return quadruple;
}

function  fareDoubler(fare) {
  return fare*2
}

function  fareTripler(fare) {
  return fare*3
}
s
function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
  return selectingFunction(arrayOfDrivers);
}

// function returnFirstTwoDrivers(){
//     const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];         
//     return drivers.slice(0,2)
// }

// function returnLastTwoDrivers(){
//     const lastDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//     return lastDrivers.slice(2,4)

// }

// function selectingDrivers(){
// return returnFirstTwoDrivers
// }
