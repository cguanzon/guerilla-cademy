'use strict';

angular.module('guerillaCademyApp')
    .service('EnvironmentService', function EnvironmentService($window) {
        this.getEnv = function () {
                return $window.env;
        };

        this.getUsername = function(){
            return $window.localStorage.getItem('username');
        };

        this.saveUsername = function(username){
            $window.localStorage.setItem('username', username);
        };
    });