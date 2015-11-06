'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    EventTypes = ['Concierto', 'Recital', 'Teatro', 'Cine'];

var EventoSchema = new Schema({
  title: String,
  body: String,
  image: String,
  eventType: {
    type: String,
    enum: EventTypes,
  },
  locations: {
    vip: Array,
    luneta: Array,
    general: Array
  },
  basePrice: Number,
  startTime: Date,
  endTime: Date
});

module.exports = mongoose.model('Evento', EventoSchema);
