'use strict';
/* global app */
app.directive('question', function() {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/question/question.html'
  };
});
