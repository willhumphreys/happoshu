'use strict';

angular.module('happoshuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/executionStats', {
        templateUrl: 'app/executionStats/executionStats.html',
        controller: 'ExecutionStatsCtrl'
      });
  });
