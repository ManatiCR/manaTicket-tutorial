'use strict';

angular.module('manaTicketApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = false;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    Auth.isLoggedInAsync(function(loggedIn) {
      if (loggedIn) {
        Auth.getCurrentUser().$promise.then(function(user) {
          $scope.isLoggedIn = true;
          $scope.userName = user.label;
        });
      }
    });

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });