'use strict';

angular.module('manaTicketApp')
  .factory('DataService', function ($http) {

    // Public API here
    return {
      getEvents: function() {
        return $http.get('/api/eventos');
      },
      getEventById: function(id) {
        return $http.get('/api/eventos/'+id);
      },
      saveEvent: function(id, data) {
        return $http.put('/api/eventos/'+id, data);
      }
    };
  });
