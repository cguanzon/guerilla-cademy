'use strict';

describe('Controller: PathsCtrl', function () {

  // load the controller's module
  beforeEach(module('guerillaCademyApp'));

  var PathsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PathsCtrl = $controller('PathsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
