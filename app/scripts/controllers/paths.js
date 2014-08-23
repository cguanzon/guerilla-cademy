'use strict';

angular.module('guerillaCademyApp')
  .controller('PathsCtrl', function ($scope, pathsRef) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.paths = pathsRef.$asArray();
  });
