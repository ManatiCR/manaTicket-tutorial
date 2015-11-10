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
    expect(1).toBe(1);
  });

});
