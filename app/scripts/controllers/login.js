'use strict';

angular.module('guerillaCademyApp')
  .controller('LoginCtrl', function ($state, $scope, UserService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logMeIn = function (email, password) {
        UserService.logIn(email, password).then(function (user) {
            $state.go('secure.paths');
        }, function (error) {
            alert(error);
        });
    };

    $scope.register = function (username, email, password) {
        UserService.register(username, email, password).then(function (user) {
            UserService.logIn(email, password).then(function () {
                $state.go('secure.paths');
            });

        }, function (error) {
            alert(error);
        });
    };
  });
