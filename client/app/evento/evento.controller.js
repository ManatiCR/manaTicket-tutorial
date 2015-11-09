'use strict';

angular.module('manaTicketApp')
  .controller('EventoCtrl', function ($scope, $stateParams, $state, DataService, Notification) {
    if (!$stateParams.id) {
      $state.go('main');
    } else if (!$stateParams.data) {
      DataService.getEventById($stateParams.id).then(function(event) {
        $scope.event = event.data;
      }).catch(function() {
        Notification.error({
          title: 'No encontramos el evento que buscabas',
          message: 'Por favor intenta de nuevo, o contacta al administrador'
        });
        $state.go('main');
      });
    } else {
      $scope.event = $stateParams.data;
    }

    var priceRates = {
      VIP: 1.5,
      GEN: 1,
      LUN: 1.75
    };

    $scope.total = 0;
    $scope.modalIsActive = false;

    $scope.stateIncludes = $state.includes;

    $scope.reservar = function() {
      $state.go('evento.reservacion');
    };

    $scope.highlight = function(item) {
      if (!item.reserved) {
        $scope.highlightedLocation = item;
      }
    };

    $scope.clearHighlight = function() {
      $scope.highlightedLocation = null;
    };

    $scope.calculatePrice = function(item, basePrice) {
      return basePrice*priceRates[item.code] || 0;
    };

    $scope.toggleInTotal = function(item, basePrice) {
      if (item.reserved && (null === item.for)) {
        $scope.total += $scope.calculatePrice(item, basePrice);
        if ($scope.highlightedLocation === item) {
          $scope.highlightedLocation = null;
        }
      } else if (!item.reserved && (null === item.for)) {
        $scope.total -= $scope.calculatePrice(item, basePrice);
      }

      if ($scope.total < 0) {
        $scope.total = 0;
      }
    };

    $scope.salvar = function(userName) {
      Object.keys($scope.event.locations).forEach(function(key) {
        $scope.event.locations[key].forEach(function (loc) {
          if (loc.reserved && null === loc.for) {
            loc.for = userName;
          }
        });
      });
      DataService.saveEvent($scope.event._id, $scope.event).then(function(result) {
        $scope.event = result.data;
        $scope.total = 0;
        Notification.success({
          title: 'Su compra está hecha',
          message: 'Muchas gracias por comprar en <strong>ManaTicket</strong>'
        });
      }).catch(function() {
        Notification.error({
          title: 'Lo sentimos',
          message: 'Algo salió mal, por favor intenta de nuevo o contacta al administrador '
        });
      }).finally(function() {
        $scope.modalIsActive = false;
      });
    };

    $scope.openModal = function() {
      $scope.modalIsActive = true;
    };
    $scope.closeModal = function() {
      $scope.modalIsActive = false;
    };
  });