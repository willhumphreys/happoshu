'use strict';

angular.module('happoshuApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute','ngTouch', 'ui.grid'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
