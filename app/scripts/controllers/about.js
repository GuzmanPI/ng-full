'use strict';

/**
 * @ngdoc function
 * @name ngFullApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngFullApp
 */
angular.module('ngFullApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
