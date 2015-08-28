'use strict';
/* global app */
app.directive('newCardForm', function() {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/addNewFlashCard/addNewFlashCard.html'
  };
});
