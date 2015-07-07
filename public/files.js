var myApp = angular.module('myApp', []);

myApp.service('dataService', function ($http) {
    this.getLocalFiles = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/scenarios'
        });
    };

    this.getRemoteFiles = function () {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/remotefiles'
        });
    };
});

myApp.controller('FileController', function ($scope, dataService) {
    $scope.localfiles = null;
    dataService.getLocalFiles().then(function (dataResponse) {
        $scope.localfiles = dataResponse;
    });

    $scope.remotefiles = null;
    dataService.getRemoteFiles().then(function (dataResponse) {
        $scope.remotefiles = dataResponse;
    });
});
