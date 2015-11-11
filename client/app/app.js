'use strict';

angular.module('happoshuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
        'ngRoute', 'ngTouch', 'ui.grid', 'ui.grid.resizeColumns', 'ui.bootstrap', 'ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.cellNav'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
