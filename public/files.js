var myApp = angular.module('myApp', []);

myApp.service('dataService', function ($http) {
    this.getSimulationGroupNames = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/scenarios'
        });
    };

    this.getSimulationGroupFiles = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/simulationGroupFiles'
        });
    };
});

myApp.controller('FileController', function ($scope, dataService) {

    $scope.logout = function (value) {
        console.log('Hello I was called ' + value);
    };

    $scope.simulationGroupNames = null;
    dataService.getSimulationGroupNames().then(function (dataResponse) {
        $scope.simulationGroupNames = dataResponse;
    });

    $scope.simulationGroupFiles = null;
    dataService.getSimulationGroupFiles().then(function (dataResponse) {
        $scope.simulationGroupFiles = dataResponse;
    });
});

