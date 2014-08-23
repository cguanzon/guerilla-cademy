'use strict';

angular.module('rtfmApp')
    .service('EnvironmentService', function EnvironmentService($window) {
        this.getEnv = function () {
                return $window.env;
        };
    });