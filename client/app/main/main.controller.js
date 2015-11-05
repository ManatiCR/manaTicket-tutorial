'use strict';

angular.module('manaTicketApp')
  .controller('MainCtrl', function ($scope, $http, $moment, DataService) {

    DataService.getEvents().then(function(eventList) {
      $scope.eventList = eventList.data;
    });

    $moment.locale('es');

  });
