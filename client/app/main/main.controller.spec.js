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
            .respond({
                "IsTruncated": false,
                "Marker": "",
                "Contents": [],
                "Name": "livedata-matcha",
                "Prefix": "",
                "Delimiter": "/",
                "MaxKeys": 1000,
                "CommonPrefixes": [{"Prefix": "BasicScriptBuilder_Buy_SPX/"}, {"Prefix": "BasicScriptBuilder_Buy_SPX_90SMA/"}, {"Prefix": "BasicScriptBuilder_Buy_SPX_Below1SD/"}, {"Prefix": "BasicScriptBuilder_Buy_SPX_Below2SD/"}, {"Prefix": "BasicScriptBuilder_Buy_SPX_Below3SD/"}, {"Prefix": "BasicScriptBuilder_Buy_SPX_BuyGapRange/"}, {"Prefix": "BasicScriptBuilder_Buy_SPX_CrossOver_Monday/"}, {"Prefix": "BasicScriptBuilder_Sell_SPX/"}, {"Prefix": "BasicScriptBuilder_Sell_SPX_90SMA/"}, {"Prefix": "BasicScriptBuilder_Sell_SPX_Above1SD/"}, {"Prefix": "BasicScriptBuilder_Sell_SPX_Above2SD/"}, {"Prefix": "BasicScriptBuilder_Sell_SPX_CrossOver_Monday/"}, {"Prefix": "SPXBuyAtTimeAndDayOfWeek/"}, {"Prefix": "SPXBuyAtTimeAndDayOfWeek_Buy/"}, {"Prefix": "SPXBuyAtTimeAndDayOfWeek_Buy_GapRange/"}, {"Prefix": "SPXBuyAtTimeAndDayOfWeek_Sell/"}, {"Prefix": "SPXNegativeGap/"}, {"Prefix": "SPXNegativeGap3BandsScenario/"}, {"Prefix": "SPXNegativeGapRangesMoreStopsScenario/"}, {"Prefix": "SPXNegativeGapRangesStdDevScenario/"}, {"Prefix": "SPXPositiveGapMoreStopsCrossOverScenario/"}, {"Prefix": "SPXPositiveGapMoreStopsScenario/"}, {"Prefix": "SPXPositiveGapRangesMoreStopsScenario/"}, {"Prefix": "SPXPositiveGapRangesStdDevScenario/"}, {"Prefix": "SPXSellAtTimeAndDayOfWeek/"}, {"Prefix": "logs/"}, {"Prefix": "results/"}]
            });

        $httpBackend.expectGET('http://localhost:9000/api/results')
            .respond({});

        scope = $rootScope.$new();
        MainCtrl = $controller('ScenarioController', {
            $scope: scope
        });
    }));

    it('should attach a list of things to the scope', function () {
        $httpBackend.flush();
        expect(scope.simulationGroupNames.data.Delimiter).toEqual("/");
    });
});
