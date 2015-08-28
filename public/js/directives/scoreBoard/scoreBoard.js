'use strict';
/* global app */
app.directive('scoreBoard', function() {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/scoreBoard/scoreBoard.html'
  };
});
