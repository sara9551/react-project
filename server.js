const express = require("express");

const mongoose = require("mongoose");
var choresRoutes = require('./routes')
const app = express();
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(choresRoutes);

app.use('/api', choresRoutes)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



