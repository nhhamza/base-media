const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");
const callCenterItems = require("./mocks/call-center.mock.json");

// In case you want to manage the server in production state (for example: reading private keys)
// This will use dotenv to read the .env file (in the root folder) with those variables to be usable in here
if (process.env.REACT_APP_ENV !== "prod") require("dotenv");

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

// add app.get / app.post / etc... to mock the response status and data

app.get("/api/GetHelp", (req, res) => {
  res.status(200).send(JSON.stringify({ number: "1" }));
});
