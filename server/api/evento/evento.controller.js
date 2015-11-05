'use strict';

var _ = require('lodash');
var Evento = require('./evento.model');

// Get list of eventos
exports.index = function(req, res) {
  Evento.find(function (err, eventos) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(eventos);
  });
};

// Get a single evento
exports.show = function(req, res) {
  Evento.findById(req.params.id, function (err, evento) {
    if(err) { return handleError(res, err); }
    if(!evento) { return res.status(404).send('Not Found'); }
    return res.json(evento);
  });
};

// Creates a new evento in the DB.
exports.create = function(req, res) {
  Evento.create(req.body, function(err, evento) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(evento);
  });
};

// Updates an existing evento in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Evento.findById(req.params.id, function (err, evento) {
    if (err) { return handleError(res, err); }
    if(!evento) { return res.status(404).send('Not Found'); }
    var updated = _.merge(evento, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(evento);
    });
  });
};

// Deletes a evento from the DB.
exports.destroy = function(req, res) {
  Evento.findById(req.params.id, function (err, evento) {
    if(err) { return handleError(res, err); }
    if(!evento) { return res.status(404).send('Not Found'); }
    evento.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}