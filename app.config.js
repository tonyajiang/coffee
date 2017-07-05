'use strict';

angular.
  module('coffeeApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/coffees', {
          template: '<coffee-list></coffee-list>'
        }).
        when('/coffees/:coffeeId', {
          template: '<coffee-detail></coffee-detail>'
        }).
        otherwise('/coffees');
    }
  ]);
