/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Evento = require('../api/evento/evento.model');

var locations = {
  vip: [
    { code: 'VIP', reserved: false, for: null, seatNumber: 1 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 2 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 3 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 4 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 5 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 6 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 7 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 8 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 9 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 10 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 11 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 12 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 13 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 14 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 15 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 16 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 17 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 18 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 19 },
    { code: 'VIP', reserved: false, for: null, seatNumber: 20 }
  ],
  general: [
    { code: 'GEN', reserved: false, for: null, seatNumber: 1 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 2 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 3 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 4 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 5 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 6 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 7 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 8 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 9 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 10 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 11 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 12 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 13 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 14 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 15 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 16 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 17 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 18 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 19 },
    { code: 'GEN', reserved: false, for: null, seatNumber: 20 }
  ],
  luneta: [
    { code: 'LUN', reserved: false, for: null, seatNumber: 1 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 2 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 3 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 4 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 5 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 6 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 7 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 8 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 9 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 10 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 11 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 12 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 13 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 14 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 15 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 16 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 17 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 18 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 19 },
    { code: 'LUN', reserved: false, for: null, seatNumber: 20 }
  ]
}

Evento.find({}).remove(function() {
  Evento.create({
    title: 'Tributo a Thelonious Monk',
    body: '<div><p><span>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</span> <span>Ab illo tempore, ab est sed immemorabili.</span> <span>Nihil hic munitissimus habendi senatus locus, nihil horum?</span> <span>Hi omnes lingua, institutis, legibus inter se differunt.</span> <span>Tu quoque, Brute, fili mi, nihil timor populi, nihil!</span> <span>Magna pars studiorum, prodita quaerimus.</span></p><p><span>Unam incolunt Belgae, aliam Aquitani, tertiam.</span> <span>Fabio vel iudice vincam, sunt in culpa qui officia.</span> <span>Cum ceteris in veneratione tui montes, nascetur mus.</span> <span>Quisque placerat facilisis egestas cillum dolore.</span> <span>Integer legentibus erat a ante historiarum dapibus.</span></p><p><span>Quam diu etiam furor iste tuus nos eludet?</span> <span>At nos hinc posthac, sitientis piros Afros.</span> <span>Paullum deliquit, ponderibus modulisque suis ratio utitur.</span> <span>Quae vero auctorem tractata ab fiducia dicuntur.</span> <span>Donec sed odio operae, eu vulputate felis rhoncus.</span> <span>Etiam habebis sem dicantur magna mollis euismod.</span></p></div>',
    image: 'http://lorempixel.com/400/200/nightlife/1',
    eventType: 'Concierto',
    basePrice: 50,
    startTime: new Date('2015-11-11T23:00:00.000Z'),
    endTime: new Date('2015-11-12T03:00:00.000Z'),
    locations: locations
  },{
    title: 'Cuarteto de Vientos Aquarium Marenostrum',
    body: '<div><p><span>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</span> <span>Ab illo tempore, ab est sed immemorabili.</span> <span>Nihil hic munitissimus habendi senatus locus, nihil horum?</span> <span>Hi omnes lingua, institutis, legibus inter se differunt.</span> <span>Tu quoque, Brute, fili mi, nihil timor populi, nihil!</span> <span>Magna pars studiorum, prodita quaerimus.</span></p><p><span>Unam incolunt Belgae, aliam Aquitani, tertiam.</span> <span>Fabio vel iudice vincam, sunt in culpa qui officia.</span> <span>Cum ceteris in veneratione tui montes, nascetur mus.</span> <span>Quisque placerat facilisis egestas cillum dolore.</span> <span>Integer legentibus erat a ante historiarum dapibus.</span></p><p><span>Quam diu etiam furor iste tuus nos eludet?</span> <span>At nos hinc posthac, sitientis piros Afros.</span> <span>Paullum deliquit, ponderibus modulisque suis ratio utitur.</span> <span>Quae vero auctorem tractata ab fiducia dicuntur.</span> <span>Donec sed odio operae, eu vulputate felis rhoncus.</span> <span>Etiam habebis sem dicantur magna mollis euismod.</span></p></div>',
    image: 'http://lorempixel.com/400/200/nightlife/2',
    eventType: 'Recital',
    basePrice: 79.50,
    startTime: new Date('2015-11-13T23:00:00.000Z'),
    endTime: new Date('2015-11-14T03:00:00.000Z'),
    locations: locations
  },{
    title: 'El testamento del perro',
    body: '<div><p><span>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</span> <span>Ab illo tempore, ab est sed immemorabili.</span> <span>Nihil hic munitissimus habendi senatus locus, nihil horum?</span> <span>Hi omnes lingua, institutis, legibus inter se differunt.</span> <span>Tu quoque, Brute, fili mi, nihil timor populi, nihil!</span> <span>Magna pars studiorum, prodita quaerimus.</span></p><p><span>Unam incolunt Belgae, aliam Aquitani, tertiam.</span> <span>Fabio vel iudice vincam, sunt in culpa qui officia.</span> <span>Cum ceteris in veneratione tui montes, nascetur mus.</span> <span>Quisque placerat facilisis egestas cillum dolore.</span> <span>Integer legentibus erat a ante historiarum dapibus.</span></p><p><span>Quam diu etiam furor iste tuus nos eludet?</span> <span>At nos hinc posthac, sitientis piros Afros.</span> <span>Paullum deliquit, ponderibus modulisque suis ratio utitur.</span> <span>Quae vero auctorem tractata ab fiducia dicuntur.</span> <span>Donec sed odio operae, eu vulputate felis rhoncus.</span> <span>Etiam habebis sem dicantur magna mollis euismod.</span></p></div>',
    image: 'http://lorempixel.com/400/200/nightlife/3',
    eventType: 'Teatro',
    basePrice: 10,
    startTime: new Date('2015-11-18T23:00:00.000Z'),
    endTime: new Date('2015-11-19T03:00:00.000Z'),
    locations: locations
  },{
    title: 'Rocky vs Rambo',
    body: '<div><p><span>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</span> <span>Ab illo tempore, ab est sed immemorabili.</span> <span>Nihil hic munitissimus habendi senatus locus, nihil horum?</span> <span>Hi omnes lingua, institutis, legibus inter se differunt.</span> <span>Tu quoque, Brute, fili mi, nihil timor populi, nihil!</span> <span>Magna pars studiorum, prodita quaerimus.</span></p><p><span>Unam incolunt Belgae, aliam Aquitani, tertiam.</span> <span>Fabio vel iudice vincam, sunt in culpa qui officia.</span> <span>Cum ceteris in veneratione tui montes, nascetur mus.</span> <span>Quisque placerat facilisis egestas cillum dolore.</span> <span>Integer legentibus erat a ante historiarum dapibus.</span></p><p><span>Quam diu etiam furor iste tuus nos eludet?</span> <span>At nos hinc posthac, sitientis piros Afros.</span> <span>Paullum deliquit, ponderibus modulisque suis ratio utitur.</span> <span>Quae vero auctorem tractata ab fiducia dicuntur.</span> <span>Donec sed odio operae, eu vulputate felis rhoncus.</span> <span>Etiam habebis sem dicantur magna mollis euismod.</span></p></div>',
    image: 'http://lorempixel.com/400/200/nightlife/4',
    eventType: 'Cine',
    basePrice: 25,
    startTime: new Date('2015-11-18T23:00:00.000Z'),
    endTime: new Date('2015-11-19T03:00:00.000Z'),
    locations: locations
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
