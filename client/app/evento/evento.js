'use strict';

angular.module('manaTicketApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('evento', {
        url: '/evento/:id',
        params: {
          data: null
        },
        templateUrl: 'app/evento/evento.html',
        controller: 'EventoCtrl'
      })
      .state('evento.reservacion', {
        url: '/reservacion',
        views: {
          'info': {
            templateUrl: 'app/evento/reservacion/reservacion.html',
            controller: 'ReservacionCtrl'
          }
        }
      });
  });