'use strict';

/**
 * @ngdoc service
 * @name guerillaCademyApp.UserService
 * @description
 * # UserService
 * Service in the guerillaCademyApp.
 */
angular.module('guerillaCademyApp')
  .service('UserService', function UserService(EnvironmentService, $firebase) {
        var firebaseUrl = EnvironmentService.getEnv().firebase;

        this.getUser = function(userId) {
          return $firebase(new Firebase(firebaseUrl + '/users/' + userId));
        };
  });

