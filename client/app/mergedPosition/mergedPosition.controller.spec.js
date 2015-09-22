'use strict';

describe('Controller: MergedPositionCtrl', function () {

    // load the controller's module
    beforeEach(module('happoshuApp'));

    var MergedPositionCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MergedPositionCtrl = $controller('MergedPositionCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function () {
        expect(1).toEqual(1);
    });
});
