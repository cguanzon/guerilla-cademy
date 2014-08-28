'use strict';

/**
 * @ngdoc function
 * @name guerillaCademyApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the guerillaCademyApp
 */
angular.module('guerillaCademyApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.updateUser = function(){
        $scope.user.$save();
    };

  });
