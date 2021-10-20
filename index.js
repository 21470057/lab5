/* Display a single Booking */
router.get('/bookings/read/:id', function (req, res) {

    console.log(req.params.id)
  
    let result = db.getCollection("bookings").findOne({ $loki: parseInt(req.params.id) });
  
    if (result)
      res.render('booking', { booking: result });
    else
      res.status(404).send('Unable to find the requested resource!');
  
  });
  // Delete a single Booking 
router.post('/bookings/delete/:id', function (req, res) {

    // db.getCollection("bookings").findAndRemove({ $loki: parseInt(req.params.id) });
  
    let result = db.getCollection("bookings").findOne({ $loki: parseInt(req.params.id) });
    
    if (!result) return res.status(404).send('Unable to find the requested resource!');
   
    db.getCollection("bookings").remove(result);
    
    res.send("Booking deleted.");
     
  });