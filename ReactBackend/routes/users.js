var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
    { id: 1, username: "grantAdmin" },
    { id: 2, username: "grant_watson" },
    { id: 3, username: "krissy_watson" },
    { id: 4, username: "ozzy_the_creator" },
    { id: 5, username: "frankOceania" }
  ]);
});

module.exports = router;
