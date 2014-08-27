'use strict';

angular.module('guerillaCademyApp')
  .controller('LoginCtrl', function ($state, $scope, UserService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logMeIn = function (email, password) {
        UserService.logIn(email, password).then(function () {
            $state.go('secure.user', {'userId':UserService.getUser().$id});
        }, function (error) {
            alert(error);
        });
    };

    $scope.register = function (username, email, password) {
        UserService.register(username, email, password).then(function () {
            UserService.logIn(email, password).then(function () {
                $state.go('secure.user', {'userId':UserService.getUser().$id});
            });

        }, function (error) {
            alert(error);
        });
    };
  });
