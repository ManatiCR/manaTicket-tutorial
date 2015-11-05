'use strict';

angular.module('manaTicketApp')
  .controller('EventoCtrl', function ($scope, $stateParams, $state, DataService) {
    if (!$stateParams.id) {
      $state.go('main');
    } else if (!$stateParams.data) {
      DataService.getEventById($stateParams.id).then(function(event) {
        $scope.event = event.data;
      });
    } else {
      $scope.event = $stateParams.data;
    }
  });
