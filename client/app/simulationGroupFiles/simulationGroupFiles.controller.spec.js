'use strict';

describe('Controller: SimulationGroupFilesCtrl', function () {

    // load the controller's module
    beforeEach(module('happoshuApp'));

    var SimulationGroupFilesCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SimulationGroupFilesCtrl = $controller('SimulationGroupFilesCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
