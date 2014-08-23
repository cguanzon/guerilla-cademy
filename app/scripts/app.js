'use strict';

angular
  .module('guerillaCademyApp', []).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/paths');

    $stateProvider
        .state('login', {
            url: '/login'
        })
        .state('paths', {
            url: '/paths'
        })
        .state('path', {
            url: '/paths/:pathId'
        });
});


