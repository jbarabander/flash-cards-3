'use strict';
/* global app */
app.directive('answer', function() {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/answer/answer.html'
  };
});
