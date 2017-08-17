var makeChange = function(price, payment) {
  console.log(`Price: ${price}`);
  console.log(`Payment: ${payment}`);

  var change = Math.floor((payment*100) - (price*100));

  console.log(`change: ${change}`);

  if (change <= 0){
    console.log("No Change\n\r")
    return [0,0,0,0];
  }

  var result = [25,10,5,1].map(function(coin){
    var numberOfCoins = Math.floor(change / coin);
    change %= coin;
    return numberOfCoins;
  });
  console.log(`Result: ${result}\n\r`);

  return result;
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
