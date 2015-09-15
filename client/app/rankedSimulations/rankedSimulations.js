'use strict';

angular.module('happoshuApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/rankedSimulations', {
                templateUrl: 'app/rankedSimulations/rankedSimulations.html',
                controller: 'RankedSimulationsCtrl'
            });
    });
