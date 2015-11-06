'use strict';

angular.module('manaTicketApp')
  .controller('ReservacionCtrl', function ($scope, $state) {
    $scope.back = function() {
      $state.go('evento');
    };
  });
