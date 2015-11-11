'use strict';

angular.module('manaTicketApp')
  .controller('EventoCtrl', function ($scope, $stateParams, $state, $filter, Auth, DataService, Notification) {
    $scope.loadingData = true;

    if (!$stateParams.id) {
      $state.go('main');
    } else if (!$stateParams.data) {
      DataService.getEventById($stateParams.id).then(function(event) {
        $scope.event = event.data.data[0];
        $scope.loadingData = false;
      }).catch(function() {
        Notification.error({
          title: 'No encontramos el evento que buscabas',
          message: 'Por favor intenta de nuevo, o contacta al administrador'
        });
        $state.go('main');
      });
    } else {
      $scope.event = $stateParams.data;
      $scope.loadingData = false;
    }

    $scope.total = 0;
    $scope.totalSelected = 0;
    $scope.progress = 100;

    $scope.modalIsActive = false;
    $scope.currentUser = Auth.getCurrentUser();

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

    $scope.toggleInTotal = function(item, basePrice) {
      if (item.reserved && (null === item.for)) {
        $scope.total += $filter('seatPrice')(item, basePrice);
        $scope.totalSelected++;
        if ($scope.highlightedLocation === item) {
          $scope.highlightedLocation = null;
        }
      } else if (!item.reserved && (null === item.for)) {
        $scope.total -= $filter('seatPrice')(item, basePrice);
        $scope.totalSelected++;
      }

      if ($scope.total < 0) {
        $scope.total = 0;
      }
      if ($scope.totalSelected < 0) {
        $scope.total = 0;
      }
    };

    $scope.salvar = function() {
      $scope.progress = 0;

      var total = $scope.totalSelected;
      var increment = 100/total;

      function setProgress() {
        $scope.progress += increment;
        $scope.totalSelected--;
        if ($scope.totalSelected < 1) {
          $scope.modalIsActive = false;
          $scope.total = 0;
          $scope.totalSelected = 0;
          $scope.progress = 100;
        }
      }

      Object.keys($scope.event.locations).forEach(function(key) {
        $scope.event.locations[key].forEach(function (loc) {
          if (loc.reserved && null === loc.for) {
            DataService.saveChair(loc.id, $scope.currentUser.id).then(function() {
              loc.for = $scope.currentUser.id;
              Notification.success({
                title: 'La compra de la silla '+loc.code+'-'+loc.seatNumber,
                message: 'Muchas gracias por comprar en <strong>ManaTicket</strong>'
              });

              setProgress();
            }).catch(function() {
              loc.reserved = false;
              loc.for = null;

              Notification.error({
                title: 'Lo sentimos',
                message: 'Algo salió mal comprando la silla '+loc.code+'-'+loc.seatNumber+', puede ser que haya sido reservada por otra persona. Por favor intenta de nuevo o contacta al administrador '
              });

              setProgress();
            });
          }
        });
      });
    };

    $scope.openModal = function() {
      $scope.modalIsActive = true;
    };
    $scope.closeModal = function() {
      $scope.modalIsActive = false;
    };
  });
