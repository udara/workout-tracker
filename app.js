const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// Setting up middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to mongoose DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {  
useNewUrlParser: true,
useFindAndModify: false 
});

// Import api and html routes
require("./routes/api")(app);
require("./routes/html")(app);


// Start node server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
