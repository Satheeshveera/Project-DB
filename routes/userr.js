const User = require("../models/userm");
const express = require("../node_modules/express");
const router = express.Router();

router.get("/", (req, res) => {
  User.find({}, function (err, data) {
    if (err) throw err;
    res.send(data);
    console.log(data);
  });
});
router.post("/", (req, res) => {
  User.find({}, function (err, data) {
    if (err) throw err;
    res.send(data);
    console.log(data);
  });
});

router.post("/add", (req, res) => {
  const { Name, User_Id, Password } = req.body;
  console.log(req.body);

  const new_User = new User({
    Name,
    User_Id,
    Password,
  });
  new_User.save().then((User) => {
    res.send(User);
    console.log("Added");
  });
});

module.exports = router;
