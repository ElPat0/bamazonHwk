
const express = require('express');

const exphbs = require("express-handlebars");

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var items = [
    {
      items: "Beet & Goat Cheese Salad with minestrone soup."
    }, {
      items: "Pizza, two double veggie burgers, fries with a Big Gulp"
    }
  ];

const path = require('path');

const mysql = require('MySql');


const app = express();
const axios = require('axios');

const PORT = process.env.PORT || 3000;


//this is very important to have for making api calls
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'));
app.use(express.static('pages'));


var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


// Routes
app.get("/list", function (req, res) {
    res.render("index", items[0]);
});

app.get("/inventory", function (req, res) {
    res.render("index", items[1]);
});

app.get("/sales", function (req, res) {
    res.render("all-items", {
        items: products,
        eater: "david"
    });
});







app.listen(PORT, () => {
    // console.log(process.env.NODE_ENV)
    console.log(`port listening on port ${PORT}`);
})


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
