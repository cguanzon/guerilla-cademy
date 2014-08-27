'use strict';

angular.module('guerillaCademyApp')
  .controller('PathsCtrl', function ($scope, pathsRef, user) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.paths = pathsRef.$asArray();

    $scope.createPath = function(author, title, description){
        $scope.paths.$add({
           author: $scope.user.username,
           title: title,
           description: description || ''
        });
    };

    $scope.user = user;
    console.log($scope.user);
    console.log($scope.user.username);
  });
