var myApp = angular.module('myApp', ['ngTouch', 'ui.grid']);




myApp.service('dataService', function ($http) {
    this.getSimulationGroupNames = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/scenarios'
        });
    };

    this.getResults = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/results'
        });
    };

    this.getSimulationGroupFiles = function (simulationGroupName) {
        console.log('service time with ' + simulationGroupName);
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/scenariofiles/' + simulationGroupName
        });
    };
});

myApp.controller('FileController', function ($scope, dataService) {

    $scope.columns = [{field: 'Account'}, {field: 'Profit'}, {field: 'Winners'}, {field: 'Losers'}, {field: 'ProfitPerTrade'}];

    $scope.gridOptions = {
        enableSorting: true,
        columnDefs: $scope.columns

    };


    $scope.logout = function (value) {
        console.log('Hello I was called ' + value);
        $scope.simulationGroupName = value;
    };

    $scope.simulationGroupNames = null;


    dataService.getSimulationGroupNames().then(function (dataResponse) {
        $scope.simulationGroupNames = dataResponse;
    });


    dataService.getResults().then(function (dataResponse) {

        $scope.results = dataResponse;
        $scope.gridOptions.data = dataResponse.data;
    });

    console.log("what is this");
    //
    //$scope.simulationGroupFiles = null;
    $scope.getSimulationGroupFiles = function (value) {
        console.log('Our value is ' + value);
        dataService.getSimulationGroupFiles(value).then(function (dataResponse) {
            $scope.simulationGroupFiles = dataResponse;
        });
    }
});

myApp.directive('targetBlank', function () {
    return {
        compile: function (element) {
            var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
            elems.attr("target", "_blank");
        }
    };
});
