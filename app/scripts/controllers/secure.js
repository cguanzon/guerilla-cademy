'use strict';

/**
 * @ngdoc function
 * @name guerillaCademyApp.controller:SecureCtrl
 * @description
 * # SecureCtrl
 * Controller of the guerillaCademyApp
 */
angular.module('guerillaCademyApp')
  .controller('SecureCtrl', function ($scope, $state, currentUser, user, UserService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if (!currentUser) {
        $state.go('login');
    }

    $scope.currentUser = currentUser;

    $scope.user = user;

    $scope.logOut = function () {
        delete $scope.currentUser;

        $scope.user.$destroy(); // Stop listening... failure to stop listening results in errors.

        UserService.logOut().then(function () {
            $state.go('login');
        });
    };
  });
