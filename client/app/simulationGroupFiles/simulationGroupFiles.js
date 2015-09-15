'use strict';

angular.module('happoshuApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/simulationGroupFiles', {
                templateUrl: 'app/simulationGroupFiles/simulationGroupFiles.html',
                controller: 'SimulationGroupFilesCtrl'
            });
    });
