'use strict';

angular
  .module('guerillaCademyApp', ['firebase', 'ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('secure', {
            abstract: true,
            template: '<a ng-click="logOut()">Log Out</a><div ui-view>',
            controller: 'SecureCtrl',
            resolve: {
                currentUser: function (UserService) {
                    return UserService.getCurrentUser();
                },
                user: function (UserService) {
                    return UserService.getUser();
                }
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: '/views/login.html',
            controller: 'LoginCtrl'
        })

        .state('dashboard', {
            url:'/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'UserCtrl'
        })

        .state('secure.paths', {
            url: '/paths',
            templateUrl: 'views/paths.html',
            controller: 'PathsCtrl',
            resolve: {
               pathsRef: function(pathService){
                return pathService.getPaths();
               }
            }
        })
        .state('secure.path', {
            url: '/paths/:pathId'
        });
});


