'use strict';

angular
  .module('guerillaCademyApp', []).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/paths');

    $stateProvider
        .state('login', {
            url: '/login'
        })
        .state('paths', {
            url: '/paths',
            templateUrl: 'views/paths.html',
            controller: 'PathsCtrl',
            resolve: {
               pathsRef: function(pathService){
                return pathService.getPaths();
               }
            }
        })
        .state('path', {
            url: '/paths/:pathId'
        });
});


