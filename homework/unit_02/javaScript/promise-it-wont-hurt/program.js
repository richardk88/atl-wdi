//WARM UP
setTimeout(function(){
    console.log('TIMED OUT!');
}, 300);


//FULFILL A PROMISE
var promise = new Promise(function (fulfill, reject) {
    setTimeout(function(){
        fulfill('FULFILLED!');
    }, 300);
});
promise.then(console.log);


//REJECT A PROMISE
var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
        reject(new Error('REJECTED!'));
    }, 300);
});
function onReject (error) {
    console.log(error.message);
}
promise.then(null, onReject);


//TO REJECT OR NOT TO REJECT
var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});
function onReject(error) {
    console.log(error.message);
}
promise.then(console.log, onReject);


//ALWAYS ASYNCHRONOUS
var promise = new Promise (function (fulfill, reject){
    fulfill('PROMISE VALUE');
})
promise.then(console.log);
console.log('MAIN PROGRAM');


//SHORTCUTS
var message;
var promise;

function randomBytes(n) {
  return (Math.random() * Math.pow(256, n) | 0).toString(16);
}

message =
  'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
  randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
  'terminated in 3 seconds.';

promise = Promise.reject(new Error(message));

promise.catch(function (err) {
  var i = 3;

  process.stderr.write(err.message);

  setTimeout(function boom() {
    process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
    if (!i) {
      process.stderr.write('\n..... . . . boom . . . .....\n');
    } else {
      setTimeout(boom, 1000);
    }
  }, 1000);
});


//PROMISE AFTER PROMISE
var firstPromise = first();
var secondPromise = firstPromise.then(function(val){
    return second(val);
});
secondPromise.then(console.log);
