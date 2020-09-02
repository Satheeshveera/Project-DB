const express = require("express");

const mongoose = require("mongoose");

const passport = require("passport");

//Passport Config
//require("./config/passport")(passport);

//mongo
mongoose
  .connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

//passport middleware
//app.use(passport.initialize());
//app.use(passport.session());

app.use("/user", require("./routes/userr"));
app.use("/compose", require("./routes/composer"));

app.listen(5000, () => {
  console.log(`App listening on port ${PORT}!`);
});
