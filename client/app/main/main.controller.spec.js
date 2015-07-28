'use strict';

describe('ScenarioController', function () {

    // load the controller's module
    beforeEach(module('myApp'));
    beforeEach(module('socketMock'));

    var MainCtrl,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('http://localhost:9000/api/scenarios')
            .respond({scenario: "good scenario"});

        $httpBackend.expectGET('http://localhost:9000/api/results')
            .respond({result: "first result"});

        scope = $rootScope.$new();
        MainCtrl = $controller('ScenarioController', {
            $scope: scope
        });
    }));

    it('should attach a list of scenarios to the scope', function () {
        $httpBackend.flush();
        expect(scope.simulationGroupNames.data.scenario).toEqual("good scenario");
    });

    it('should attach a list of results to the scope', function () {
        $httpBackend.flush();
        expect(scope.results.data.result).toEqual("first result");
    });

    it('should attach a list of results to the scope', function () {
        $httpBackend.flush();
        expect(scope.gridOptions.data.result).toEqual("first result");
    });
});
