var mainApp = angular.module("mainApp", []); 

mainApp.controller("MainController", function($scope){
  $scope.number = 5;

  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
});

mainApp.controller("ReverseWordController", function($scope){
  $scope.word = "";

  $scope.reverseWord = function(){
    var result = "";
    for (var i=0; i<$scope.word.length; i++) {
      result = $scope.word.charAt(i) + result;
    }
    $scope.word = result;
  };

});

mainApp.controller("PingPongController", function($scope){
  $scope.player1 = 0;
  $scope.player2 = 0;
  $scope.player1Class = 'blue-box';
  $scope.player2Class = 'blue-box';

  $scope.loseWinChangeColor = function(){
    if ($scope.player1 > $scope.player2) {
      $scope.player1Class = 'green-box';
      $scope.player2Class = 'red-box';
    }
    else {
      $scope.player1Class = 'red-box';
      $scope.player2Class = 'green-box';
    }
  };

});
