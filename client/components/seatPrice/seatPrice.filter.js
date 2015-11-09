'use strict';

angular.module('manaTicketApp')
  .filter('seatPrice', function () {
    return function (seat, basePrice) {
      var priceRates = {
        VIP: 1.5,
        GEN: 1,
        LUN: 1.75
      };

      if (angular.isDefined(seat.code) && !isNaN(basePrice)){
        return basePrice*priceRates[seat.code] || 0;
      } else {
        return NaN;
      }
    };
  });
