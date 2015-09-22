'use strict';

angular.module('happoshuApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/mergedPosition', {
                templateUrl: 'app/mergedPosition/mergedPosition.html',
                controller: 'MergedPositionCtrl'
            });
    });
