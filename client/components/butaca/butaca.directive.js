'use strict';

angular.module('manaTicketApp')
  .directive('butaca', function () {
    return {
      templateUrl: 'components/butaca/butaca.html',
      restrict: 'E',
      scope: {
        location: '=',
        number: '=',
        onClick: '&'
      },
      link: function (scope) {
        scope.itemClick = function(item) {
          item.reserved = !item.reserved;
          scope.onClick(item);
        };
      }
    };
  });
