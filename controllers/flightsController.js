const Flight = require('../models/flightsModel')

const Destination = require('../models/destinationsModel')

module.exports.index = async (req, res) => {
    // const flights = await Flight.find().sort({ createdAt: 1 })
    try {
        const flightData = await Flight.find()
        res.render('flights/Index', {flight: flightData})
    } catch (err) {
        console.log(err)
        res.send(err.message)
    }
}


module.exports.new = async (req, res) => {
    const newFlight = new Flight();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/New', {departsDate});

}
module.exports.show = async (req, res) => {
      const flight = await Flight.findById(req.params.id).populate("destinations");
      res.render("flights/Show", { flight });
  };
// Create to add new flights 
module.exports.create = async (req, res) => {
 try {
    await Flight.create(req.body);
    res.redirect('/flight')

}catch (err){
    console.log(err);
    res.send(err.message)
}
}

module.exports.createDestination = async (req, res) => {
  // create a document in our destination collection
  const destination = await Destination.create(req.body)
  console.log("destination:"+ destination)
  // find the flight
  await Flight.findByIdAndUpdate(req.params.id, {
      // and push the new destination document's id
      $push: {
          // to the destination's flight field/property
          destinations: destination._id
      }
  })
  res.redirect(`/flight/${req.params.id}`)
}

module.exports.indexDestination = async (req, res) => {
  // target the destination property 
  res.send('')
}

