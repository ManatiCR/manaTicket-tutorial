'use strict';

angular.module('manaTicketApp')
  .factory('DataService', function ($http) {

    // Public API here
    return {
      getEvents: function() {
        return $http.get('/api/eventos');
      }
    };
  });
