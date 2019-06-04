//express
const express = require('express');

const path = require("path");

//we make an instantiation of express
const app = express();
const axios = require("axios");

const PORT = process.env.PORT || 3000;


//this is very important to have for making api calls
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'))


app.listen(PORT, () => {
    // console.log(process.env.NODE_ENV)
    console.log(`port listening on port ${PORT}`);
})


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
