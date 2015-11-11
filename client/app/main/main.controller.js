'use strict';

angular.module('manaTicketApp')
  .controller('MainCtrl', function ($scope, $http, $moment, DataService) {
    $scope.loadingData = true;

    DataService.getEvents().then(function(eventList) {
      $scope.eventList = eventList.data;
      $scope.loadingData = false;
    });

    $moment.locale('es');

  });
