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
    angular.copy($scope.master, $scope.newCard)
    $scope.submitted = false;
    $scope.qRequired = false;
    $scope.minQLength = false;
    $scope.newCard.answers.forEach(function(element, index) {
      $scope["answer" + index + "maxALength"] = false;
    });
  }
  $scope.reset();
  $scope.validate = function() {
    if($scope.newCardForm.question.$error.required){
      $scope.qRequired = true;
      $scope.minQLength = false;
      flag = true;
    }else if($scope.newCardForm.question.$error.minlength){
      $scope.qRequired = false;
      $scope.minQLength = true;
      flag = true;
    }else{
      $scope.qRequired = false;
      $scope.minQLength = false;
      $scope.newCard.answers.forEach(function(answer, index) {
        if(answer.text === undefined) {
          flag = true;
          $scope['answer' + index + "maxALength"] = true;
        }else{
          $scope['answer' + index + "maxALength"] = false;
        }
      });
    }
  }
  $scope.addFlashCard = function(card) {
    if(flag) return;
    FlashCardsFactory.addFlashCard(card).then(function(success) {
      $scope.reset();
      $scope.$root.$broadcast("newCardAdded",card);
    }, console.error);
  }
  console.log($scope);
});
