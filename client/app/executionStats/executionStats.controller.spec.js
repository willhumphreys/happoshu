'use strict';

describe('Controller: ExecutionStatsCtrl', function () {

  // load the controller's module
  beforeEach(module('happoshuApp'));

  var ExecutionStatsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExecutionStatsCtrl = $controller('ExecutionStatsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
