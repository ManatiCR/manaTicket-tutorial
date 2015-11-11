'use strict';

angular.module('manaTicketApp')
  .factory('User', function ($resource, DrupalSettings) {
    return $resource(DrupalSettings.sitePath+'api/users/:id', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me',
        },
        transformResponse: function(res) {
          return JSON.parse(res).data[0];
        }
      }
	  });
  });
