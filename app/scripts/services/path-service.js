'use strict';

angular.module('guerillaCademyApp')
  .service('pathService', function pathService(EnvironmentService, $firebase) {
        var firebaseUrl = EnvironmentService.getEnv().firebase;

        this.getPaths = function () {
            return $firebase(new Firebase(firebaseUrl + '/paths'));
        };

        this.getPath = function(pathId){
            return $firebase(new Firebase(firebaseUrl + '/paths/' + pathId));
        };
  });
