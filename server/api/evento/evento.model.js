'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    EventTypes = ['Concierto', 'Recital', 'Teatro', 'Cine'];

var locations = {
  vip: [
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null },
    { code: 'VIP', reserved: false, for: null }
  ],
  general: [
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null },
    { code: 'GEN', reserved: false, for: null }
  ],
  luneta: [
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null },
    { code: 'LUN', reserved: false, for: null }
  ]
}

var EventoSchema = new Schema({
  title: String,
  body: String,
  image: String,
  eventType: {
    type: String,
    enum: EventTypes,
  },
  locations: Schema.Types.Mixed,
  basePrice: Number,
  startTime: Date,
  endTime: Date
});

EventoSchema
.pre('save', function(next) {
  this.locations = locations;
  next();
})

module.exports = mongoose.model('Evento', EventoSchema);