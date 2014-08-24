'use strict';

/**
 * @ngdoc function
 * @name guerillaCademyApp.controller:SecureCtrl
 * @description
 * # SecureCtrl
 * Controller of the guerillaCademyApp
 */
angular.module('guerillaCademyApp')
  .controller('SecureCtrl', function ($state, $scope, username ) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if(!username){
        $state.go('login');
    }
    $scope.username = username;
  });
