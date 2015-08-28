app.controller('NewCardController', function($scope, FlashCardsFactory) {
  var flag = false;
  $scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
  };
  $scope.master = angular.copy($scope.newCard);
  $scope.categories = FlashCardsFactory.categories;
  $scope.reset = function(){
    angular.copy($scope.master, $scope.newCard);
  }
  $scope.reset();
  $scope.addFlashCard = function(card) {
    if($scope.newCardForm.$invalid) return;
    FlashCardsFactory.addFlashCard(card).then(function(success) {
      $scope.reset();
      $scope.$root.$broadcast("newCardAdded",card);
    }, console.error);
  }
  console.log($scope);
});
