'use strict';

describe('Service: mergedPosition', function () {

    // load the service's module
    beforeEach(module('happoshuApp'));

    // instantiate service
    var mergedPosition;
    beforeEach(inject(function (_mergedPosition_) {
        mergedPosition = _mergedPosition_;
    }));

    it('should do something', function () {
        expect(!!mergedPosition).toBe(true);
    });

});
