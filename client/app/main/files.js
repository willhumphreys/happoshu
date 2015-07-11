var myApp = angular.module('myApp', ['ngTouch', 'ui.grid', 'ui.grid.resizeColumns']);

myApp.service('dataService', function ($http) {
    this.getSimulationGroupNames = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:9000/api/scenarios'
        });
    };

    this.getResults = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:9000/api/results'
        });
    };

    this.getSimulationGroupFiles = function (simulationGroupName) {
        console.log('service time with ' + simulationGroupName);
        return $http({
            method: 'GET',
            url: 'http://localhost:9000/api/scenarios/' + simulationGroupName
        });
    };
});

myApp.controller('FileController', function ($scope, dataService, uiGridConstants) {

    $scope.columns =
        [
            {field: 'RunName'},
            {field: 'Account', width: '5%', maxWidth: 200, minWidth: 100},
            {field: 'Profit', type: 'number', width: '5%', maxWidth: 200, minWidth: 90},
            {field: 'Winners', type: 'number', width: '5%', maxWidth: 200, minWidth: 90},
            {field: 'Losers', type: 'number', width: '5%', maxWidth: 200, minWidth: 90},
            {
                field: 'ProfitPerTrade', type: 'number', width: '5%', maxWidth: 250, minWidth: 190,
                sort: {
                    direction: uiGridConstants.DESC,
                    priority: 1
                }

            }
        ];

    $scope.gridOptions = {
        enableColumnResizing: true,
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