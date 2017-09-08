//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  let lBarrelCost = (total - 120);
  console.log(lBarrelCost / large)
};
barrels(2,3,825)
//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  let circEarth = 24901;
  let gallons = circEarth / milesPerGallon};
  return gallons * fuelPrice
}
shipFuelCost(3, 12)
//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  //your code here
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
