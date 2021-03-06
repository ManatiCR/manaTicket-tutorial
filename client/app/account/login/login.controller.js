'use strict';

angular.module('manaTicketApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          userName: $scope.user.userName,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          var next = $location.nextAfterLogin || '/';
          $location.nextAfterLogin = null;
          $location.path(next);
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
