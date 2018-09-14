var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // The following is test data:
  res.json([
    { id: 1, username: "grantAdmin" },
    { id: 2, username: "grant_watson" },
    { id: 3, username: "ozzy_nova" },
    { id: 4, username: "orykia" }
  ]);
});

module.exports = router;