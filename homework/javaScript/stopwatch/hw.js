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
    millisecs += 10
    if (millisecs = 100) {
      millisecs -= 100;
      sec += 1;
    } 
    if (sec = 60) {
      sec -= 60
      min += 1
    }
  },
  reset: function(){
    let $reset = $('#stop');
    $reset.on('click', funtion() {
      if (millisecs !== 00 && sec !== 0 && min !== 0) {
        millisecs = 0
        sec = 0
        min = 0 
      }
     })
  },
  start: function(){
    let $start = $('start');
    $start.on('click', function() {
      isRunning = true;
      this.tickClock()
    })
    
  },
  stop: function(){
    let $stop = $('stop');
    $stop.on('click', function() {
      isRunning = false;
    })
  },
  lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    // Your Code Here
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
  },
  handleClickStart: function() {
    // Your Code Here
  },
  handleClickStopReset: function(){
    // Your Code Here
  },
  handleClickLap: function(){
    // Your Code Here
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
};
