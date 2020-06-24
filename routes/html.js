let path = require("path");

function htmlRoutes(app) {
  // Fitness Tracker : Used to add a new exercise to DB 
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // Workout Dashboard 
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};

module.exports = htmlRoutes;
