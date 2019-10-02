var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

var reservations = [];

var waitList = [];

app.get("/hot", function(req, res) {
  res.sendFile(path.join(__dirname, "hot.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitList);
});
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

  app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    if (waitList.length <= 5) {

    newReservation.routeName = newReservation.name
      .replace(/\s+/g, "")
      .toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
    }else {
    var newReservation = req.body;
    
    newReservation.routeName = newReservation.name
      .replace(/\s+/g, "")
      .toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
    }
  });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
