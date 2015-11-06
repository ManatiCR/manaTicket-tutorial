'use strict';

describe('Directive: butaca', function () {

  // load the directive's module and view
  beforeEach(module('manaTicketApp'));
  beforeEach(module('components/butaca/butaca.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should do something do something', inject(function ($compile) {
    element = angular.element('<butaca></butaca>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(1).toEqual(1);
  }));
});
