'use strict';

describe('Controller: SimulationGroupsCtrl', function () {

  // load the controller's module
  beforeEach(module('happoshuApp'));

  var SimulationGroupsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimulationGroupsCtrl = $controller('SimulationGroupsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
