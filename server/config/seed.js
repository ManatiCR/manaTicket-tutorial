/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Evento = require('../api/evento/evento.model');

Evento.find({}).remove(function() {
  Evento.create({
    title: 'Tributo a Thelonious Monk',
    body: '<div><p><span>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</span> <span>Ab illo tempore, ab est sed immemorabili.</span> <span>Nihil hic munitissimus habendi senatus locus, nihil horum?</span> <span>Hi omnes lingua, institutis, legibus inter se differunt.</span> <span>Tu quoque, Brute, fili mi, nihil timor populi, nihil!</span> <span>Magna pars studiorum, prodita quaerimus.</span></p><p><span>Unam incolunt Belgae, aliam Aquitani, tertiam.</span> <span>Fabio vel iudice vincam, sunt in culpa qui officia.</span> <span>Cum ceteris in veneratione tui montes, nascetur mus.</span> <span>Quisque placerat facilisis egestas cillum dolore.</span> <span>Integer legentibus erat a ante historiarum dapibus.</span></p><p><span>Quam diu etiam furor iste tuus nos eludet?</span> <span>At nos hinc posthac, sitientis piros Afros.</span> <span>Paullum deliquit, ponderibus modulisque suis ratio utitur.</span> <span>Quae vero auctorem tractata ab fiducia dicuntur.</span> <span>Donec sed odio operae, eu vulputate felis rhoncus.</span> <span>Etiam habebis sem dicantur magna mollis euismod.</span></p></div>',
    image: 'http://lorempixel.com/400/200/nightlife',
    eventType: 'Concierto',
    basePrice: 50,
    startTime: new Date('2015-11-11T23:00:00.000Z'),
    endTime: new Date('2015-11-12T03:00:00.000Z')
  },{
    title: 'Cuarteto de Vientos Aquarium Marenostrum',
    body: '<div><p><span>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</span> <span>Ab illo tempore, ab est sed immemorabili.</span> <span>Nihil hic munitissimus habendi senatus locus, nihil horum?</span> <span>Hi omnes lingua, institutis, legibus inter se differunt.</span> <span>Tu quoque, Brute, fili mi, nihil timor populi, nihil!</span> <span>Magna pars studiorum, prodita quaerimus.</span></p><p><span>Unam incolunt Belgae, aliam Aquitani, tertiam.</span> <span>Fabio vel iudice vincam, sunt in culpa qui officia.</span> <span>Cum ceteris in veneratione tui montes, nascetur mus.</span> <span>Quisque placerat facilisis egestas cillum dolore.</span> <span>Integer legentibus erat a ante historiarum dapibus.</span></p><p><span>Quam diu etiam furor iste tuus nos eludet?</span> <span>At nos hinc posthac, sitientis piros Afros.</span> <span>Paullum deliquit, ponderibus modulisque suis ratio utitur.</span> <span>Quae vero auctorem tractata ab fiducia dicuntur.</span> <span>Donec sed odio operae, eu vulputate felis rhoncus.</span> <span>Etiam habebis sem dicantur magna mollis euismod.</span></p></div>',
    image: 'http://lorempixel.com/400/200/nightlife',
    eventType: 'Recital',
    basePrice: 79.50,
    startTime: new Date('2015-11-13T23:00:00.000Z'),
    endTime: new Date('2015-11-14T03:00:00.000Z')
  },{
    title: 'El testamento del perro',
    body: '<div><p><span>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</span> <span>Ab illo tempore, ab est sed immemorabili.</span> <span>Nihil hic munitissimus habendi senatus locus, nihil horum?</span> <span>Hi omnes lingua, institutis, legibus inter se differunt.</span> <span>Tu quoque, Brute, fili mi, nihil timor populi, nihil!</span> <span>Magna pars studiorum, prodita quaerimus.</span></p><p><span>Unam incolunt Belgae, aliam Aquitani, tertiam.</span> <span>Fabio vel iudice vincam, sunt in culpa qui officia.</span> <span>Cum ceteris in veneratione tui montes, nascetur mus.</span> <span>Quisque placerat facilisis egestas cillum dolore.</span> <span>Integer legentibus erat a ante historiarum dapibus.</span></p><p><span>Quam diu etiam furor iste tuus nos eludet?</span> <span>At nos hinc posthac, sitientis piros Afros.</span> <span>Paullum deliquit, ponderibus modulisque suis ratio utitur.</span> <span>Quae vero auctorem tractata ab fiducia dicuntur.</span> <span>Donec sed odio operae, eu vulputate felis rhoncus.</span> <span>Etiam habebis sem dicantur magna mollis euismod.</span></p></div>',
    image: 'http://lorempixel.com/400/200/nightlife',
    eventType: 'Teatro',
    basePrice: 10,
    startTime: new Date('2015-11-18T23:00:00.000Z'),
    endTime: new Date('2015-11-19T03:00:00.000Z')
  },{
    title: 'Rocky vs Rambo',
    body: '<div><p><span>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</span> <span>Ab illo tempore, ab est sed immemorabili.</span> <span>Nihil hic munitissimus habendi senatus locus, nihil horum?</span> <span>Hi omnes lingua, institutis, legibus inter se differunt.</span> <span>Tu quoque, Brute, fili mi, nihil timor populi, nihil!</span> <span>Magna pars studiorum, prodita quaerimus.</span></p><p><span>Unam incolunt Belgae, aliam Aquitani, tertiam.</span> <span>Fabio vel iudice vincam, sunt in culpa qui officia.</span> <span>Cum ceteris in veneratione tui montes, nascetur mus.</span> <span>Quisque placerat facilisis egestas cillum dolore.</span> <span>Integer legentibus erat a ante historiarum dapibus.</span></p><p><span>Quam diu etiam furor iste tuus nos eludet?</span> <span>At nos hinc posthac, sitientis piros Afros.</span> <span>Paullum deliquit, ponderibus modulisque suis ratio utitur.</span> <span>Quae vero auctorem tractata ab fiducia dicuntur.</span> <span>Donec sed odio operae, eu vulputate felis rhoncus.</span> <span>Etiam habebis sem dicantur magna mollis euismod.</span></p></div>',
    image: 'http://lorempixel.com/400/200/nightlife',
    eventType: 'Cine',
    basePrice: 25,
    startTime: new Date('2015-11-18T23:00:00.000Z'),
    endTime: new Date('2015-11-19T03:00:00.000Z')
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