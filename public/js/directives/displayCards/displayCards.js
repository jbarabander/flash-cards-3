app.directive('displayCards', function() {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/displayCards/displayCards.html',
    scope: {
      loader:"=",
      flashcard:"="
    }
    // require: ["^loader","^flashcard"]
  };
});
