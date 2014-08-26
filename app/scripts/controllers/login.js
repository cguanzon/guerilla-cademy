'use strict';

angular.module('guerillaCademyApp')
  .controller('LoginCtrl', function ($state, $scope, EnvironmentService, UserService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.env = EnvironmentService.getEnv();

    $scope.logMeIn = function(){
//        EnvironmentService.saveUsername($scope.username);


        $state.go('secure.paths');
    };
  });
