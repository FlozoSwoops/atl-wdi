// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    var numericDisplay = document.getElementById('numeric-display');
    numericDisplay.textContent = timerValue;
}
  drawProgressBars: function(timerValue){
    const countdown = 100 - timervalue;
    $('.progressBars').style.width = countdown + '%'

  },
  drawLitFuses: function(timerValue){
    var percentUnburnt = timerValue/100;
    $('.unburnt').style.width = percentUnburnt*98 + '%';
    $(('burnt').style.width = (1 - percentUnburnt)*98 + '%';  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
