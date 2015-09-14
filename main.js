var mainApp = angular.module("mainApp", []); 

// Random number generator
mainApp.controller("MainController", function($scope){
  $scope.number = 5;

  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
});

// Reverse word
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


// Ping pong score keeper
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

// Search contacts
mainApp.controller("ContactListController", function($scope){
  $scope.users = [{'name': 'tom', 'email': 'email@email.com', 'phoneNum': '234-567-8901'},
    {'name': 'sarah', 'email': 'sarah@email.com', 'phoneNum': '543-567-6578'},
    {'name': 'amber', 'email': 'amber@email.com', 'phoneNum': '897-321-7684'}
  ];
  $scope.name = "";
  $scope.email = "";
  $scope.phoneNum = "";

  $scope.saveUser = function(){
    $scope.users.push({'name':this.name, 'email':this.email, 'phoneNum':this.phoneNum});
  };
});

