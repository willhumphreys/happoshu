'use strict';

angular.module('happoshuApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/simulationGroups', {
        templateUrl: 'app/simulationGroups/simulationGroups.html',
        controller: 'SimulationGroupsCtrl'
      });
  });
