'use strict';

describe('Filter: seatPrice', function () {

  // load the filter's module
  beforeEach(module('manaTicketApp'));

  // initialize a new instance of the filter before each test
  var seatPrice;
  beforeEach(inject(function ($filter) {
    seatPrice = $filter('seatPrice');
  }));

  it('should return the input prefixed with "seatPrice filter:"', function () {
    var text = 'angularjs';
    expect(seatPrice(text)).toBe('seatPrice filter: ' + text);
  });

});
