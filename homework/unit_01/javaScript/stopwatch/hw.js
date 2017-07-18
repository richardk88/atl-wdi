// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
  //It increases the number of millisecond by ten.
  this.millisecs += 10;
  //if the number of milliseconds reaches 1000,
  if (this.millisecs >= 1000) {
    //it resets the number of milliseconds to zero.
    this.millisecs -= 1000;
    //it increments the number of seconds.
    this.secs += 1;
  }
  //if the number of seconds reaches 60,
  if (this.secs >= 60) {
    //it resets the number of seconds to zero.
    this.secs -= 60;
    //it increments the number of minutes.
    this.mins += 1;
  }
  },
  reset: function(){
  //it resets the counts of minutes, seconds, and milliseconds to zero.
  this.mins = 0;
  this.secs = 0;
  this.millisecs = 0;
  //it resets the list of laps to be empty.
  this.laps = [];
  },
  start: function(){
  //if the stopwatch is not running:
  if (!this.isRunning){
    //it sets the state of the stopwatch to 'running'
    this.isRunning = true;
    //it calls `tickClock` in order to start the ticking of the clock
    this.tickClock();
  //if the stopwatch is running:
    //it does nothing
  }
  },
  stop: function(){
  //if the stopwatch is running:
    //it sets the state of the stopwatch to 'not running'
    this.isRunning = false;
  //if the stopwatch is not running,
    //it does nothing
  },
  lap: function(){
  //if the stopwatch is running:
  if (this.isRunning) {
    //it adds a record of the current values of minutes ('mins'),seconds (`secs`), and milliseconds (`millisecs`) to the list of laps.
    
    this.laps.push({
      mins: this.mins,
      secs: this.secs,
      millisecs: this.millisecs
    });
  
  //if the stopwatch is not running,
    //it does nothing
  }
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
  //displays values of mins, secs, & (tens of) millisecs elapsed in DOM element w/ id `time-display`, in the format
  //`MM:SS:ss`, starting with `00:00:00`.
    $('#mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    $('#secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    $('#millisecs').innerHTML = ViewHelpers.zeroFill(millisecs/10, 2);
  //it pads the values of mins, secs, & (tens of) millisecs w/ zeros so that the strings are at least two characters long.
  },
  updateLapListDisplay: function(laps){
  //displays recorded laps inside the `lap-list` element, representing each lap w/ an `<li>` element that displays the lap's `mins`,
  //`secs`, and `millisecs` values (zero-padded to be at least two characters long, just like `time-display`).
    var laps = Stopwatch.laps;
    var lapList = document.getElementById('lap-list');
    lapList.innerHTML = '';
    for (var i = 0; i < laps.length; i++) {
      lapList.innerHTML += "\
      <li>" +
        ViewHelpers.zeroFill(laps[i].mins, 2) + ":" +
        ViewHelpers.zeroFill(laps[i].secs, 2) + ":" +
        ViewHelpers.zeroFill(laps[i].millisecs/10, 2) +
      "</li>";
    }
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    //if 'number' has fewer digits than 'length'
      
      // it should return a number as a string, padded on the left with zero until its length is equal to length
     var str = number.toString();
    let numZeroes = Math.max(length - str.length, 0);
    for( var i = 0; i < (length - str.length); i++){
      str = '0' + str;
    }
    return str;
  
    
    // if numbers dont have fewer digits than length
      //return number as a string, unaltered.
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
  //retrieves current time values (mins, secs, millisecs) from `Stopwatch`
  //calls `updateTimeDisplay` on `ViewEngine`
  ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
  //if stopwatch isn't running
  if (!Stopwatch.isRunning) {
    //it starts the stopwatch
    Stopwatch.start();
  }
  //if stopwatch is already running
    //it does nothing
  },
  handleClickLap: function(){
  //if stopwatch is running
  if (Stopwatch.isRunning) {
    //it records a lap
    Stopwatch.lap();
    //it updates the display of laps
    ViewEngine.updateLapListDisplay(Stopwatch.laps);
  }
  //if the stopwatch is not running
    //it does nothing
  },
  handleClickStopReset: function(){
  //if stopwatch is running
  if (Stopwatch.isRunning) {
    //it stops the stopwatch
    Stopwatch.stop();
  }
  //if the stopwatch is not running
  else {
    //it resets the stopwatch
    Stopwatch.reset();
    //it updates the time display so that it shows `00:00:00`
    ViewEngine.updateTimeDisplay(0, 0, 0);
    //it updates the lap list display so that it is empty
    ViewEngine.updateLapListDisplay(Stopwatch.laps);
  }
  }
};

$(function() {
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', function() {
    event.stopPropagation();
    AppController.handleClickStart;
  })

  $('#stop').on('click', function() {
    AppController.handleClickStopReset;
  })

  $('#lap').on('click', function() {
    AppController.handleClickLap;
  })  
// };
});