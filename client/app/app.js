'use strict';

angular.module('happoshuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
    'ngRoute', 'ngTouch', 'ui.grid', 'ui.grid.resizeColumns'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
