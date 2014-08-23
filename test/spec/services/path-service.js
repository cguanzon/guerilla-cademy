'use strict';

describe('Service: pathService', function () {

  // load the service's module
  beforeEach(module('guerillaCademyApp'));

  // instantiate service
  var pathService;
  beforeEach(inject(function (_pathService_) {
    pathService = _pathService_;
  }));

  it('should do something', function () {
    expect(!!pathService).toBe(true);
  });

});
