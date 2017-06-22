const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();


app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("home.ejs");
});

app.get("/colors", (req, res, next) => {
  res.render("color-list.ejs");
});


app.listen(3000);
