//module
const express = require('express');
const app = express();

//routing
const home = require("./src/routes/home")

//web setting
app.set("views","./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/",home);

module.exports = app;