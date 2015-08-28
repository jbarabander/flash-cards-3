app.directive('displayCards', function() {
  return {
    restrict: 'E',
    templateUrl: '/js/directives/displayCards/displayCards.html'
    // require: ["^loader","^flashcard"]
  };
});
