//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
//Find the distance of the earth circumference in miles
var circumference = 24901;
var miles = 12;
var fuel = 3;
//Calculate the # of gallons used to travel around the earth
//circumference / MPG (miles per gallon)
var numberOfGallonsUsed = circumference/miles;
//Calculate the cost:
var cost = numberOfGallonsUsed * fuel;
//total gallons used * cost of fuel
  return cost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
//Find the total amount of pure fruit juice (gal)
//  Total of Costco pure fruit juice:
// var costco =3;
// var costcoFruitPercent = 20/100;
// //    percentage pure fruit juice * number of gallons
// var costcoTotal = costcoGallonsUsed * costcoFruitPercent;
// //  Total of Kirkland pure fruit juice:
// var kirklandGallonsUser = 2;
// var kirklandFruitPercent = 55/100;
// //    percentage pure fruit juice * number of gallons
// var kirklandTotal = kirklandGallonsUser * kirklandFruitPercent;
// //  Add Costco pure fruit juice total + Kirkland pure fruit juice total
// //Find the total amount of juice (gal):
// //  Total of Costco juice + Total of Kirkland Juice
// var total = costcoTotal + kirklandTotal;
// //Calculate (total pure fruit juice) / (total juice)
// var final = (costcoFruitPercent+kirklandFruitPercent) / total;
// return (final);

var costco = (b / 100) * a;
  var kirkland = (d / 100) * c;
  var totalJuice = a + c;
  var totalPFJ = costco + kirkland;

  var finalAnswer = totalPFJ / totalJuice;
  return finalAnswer;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
