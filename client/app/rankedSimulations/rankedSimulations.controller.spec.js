'use strict';

describe('Controller: RankedSimulationsCtrl', function () {

    // load the controller's module
    beforeEach(module('happoshuApp'));

    var RankedSimulationsCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        RankedSimulationsCtrl = $controller('RankedSimulationsCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
