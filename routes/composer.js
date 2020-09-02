const Compose = require("../models/composem");
const express = require("../node_modules/express");
const router = express.Router();

router.get("/", (req, res) => {
  Compose.find({}, function (err, data) {
    if (err) throw err;
    res.send(data);
    console.log(data);
  });
});
router.post("/", (req, res) => {
  Compose.find({}, function (err, data) {
    if (err) throw err;
    res.send(data);
    console.log(data);
  });
});

router.post("/add", (req, res) => {
  const { From, To, Subject, Description } = req.body;
  console.log(req.body);

  const new_Compose = new Compose({
    From,
    To,
    Subject,
    Description,
  });
  new_Compose.save().then((Compose) => {
    res.send(Compose);
    console.log("Added");
  });
});

module.exports = router;
