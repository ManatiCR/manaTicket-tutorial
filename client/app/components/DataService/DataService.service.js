'use strict';

angular.module('manaTicketApp')
  .factory('DataService', function ($http, DrupalSettings) {
    var restPath = DrupalSettings.sitePath + DrupalSettings.endPoint;

    // Public API here
    return {
      getEvents: function() {
        return $http.get(restPath+'events', {
          transformResponse: function(response) {
            return JSON.parse(response).data;
          }
        });
      },
      getEventById: function(id) {
        return $http.get(restPath+'events/'+id);
      },
      saveChair: function(id, uid) {
        var values = {
          reserved: true,
          for: uid
        };
        return $http.patch(restPath+'chairs/'+id, values);
      }
    };
  });
