// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').innerHTML = timerValue;
  },
  drawProgressBars: function(timerValue){
    var barWidth = 100 - timerValue;
      document.getElementsByClassName('progress-bar')[0].style.width = barWidth + '%';
  },

  drawLitFuses: function(timerValue){
    var unburntFuse = timerValue/100;
      document.getElementsByClassName('unburnt')[0].style.width = (unburntFuse*98) + '%';
      document.getElementsByClassName('burnt')[0].style.width = (1-unburntFuse)*98 + '%';
  },
  drawCrawlers: function(timerValue){
    var elapsedTime = 100 - timerValue;
      if(timerValue % 2 === 0) {
        document.getElementsByClassName('crawler')[0].style.marginTop = 0 + 'px';
      } else {
        document.getElementsByClassName('crawler')[0].style.marginTop = 10 + 'px';
      }
    document.getElementsByClassName('crawler')[0].style.marginLeft = (elapsedTime * 10) + 'px';
  }
};
