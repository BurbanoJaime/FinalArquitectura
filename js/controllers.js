'use strict';


var app = angular.module('app', ['angularRangeSlider']);

app.controller('AppController',['$scope', function($s) {

  $s.items = [{
      name  : 'First Item',
      value : 500
    },
    {
      name  : 'Second Item',
      value : 30000000
    },
    {
      name  : 'Third Item',
      value : 70000000
    }];

}]);
