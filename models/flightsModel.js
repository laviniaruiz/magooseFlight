const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const currentDate = new Date()
currentDate.setFullYear(currentDate.getFullYear() + 1)

const flightsSchema = new Schema({
  airline: {type: String, enum: ['American', 'Southwest', 'United' ]
},

  flightNo: {type: Number, min: 10, max: 9999},
  departs: { type: Date, default: currentDate },
  airport: {type: String, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA' ]
},
destinations: [{
  // an id referencing the Destination 
  type: mongoose.Types.ObjectId,
  // search for it in the Destination collection 
  Ref: 'Destination'
}]
 
 
  // ts: {type: Date, required: true},
})

const Flight = mongoose.model('Flights', flightsSchema)

module.exports = Flight;