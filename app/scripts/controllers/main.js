'use strict';

/**
 * @ngdoc function
 * @name ngFullApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngFullApp
 */
angular.module('ngFullApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
