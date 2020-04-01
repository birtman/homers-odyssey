const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const authRoute = require("./routes/auth/auth");

// set up the application
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/auth", authRoute); //where authRouter is imported

/// in case path is not found, return the 'Not Found' 404 code
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// implement the API part
app.get("/", (req, res) => {
  res.send("youhou");
});

// launch the node server
let server = app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port " + server.address().port);
});
