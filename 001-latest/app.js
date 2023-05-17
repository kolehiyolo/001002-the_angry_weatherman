//jshint esversion:6

// * MERN Essentials
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


// const https = require("https");
// const url = require("url");

const app = express();

app.use(express.static("public"));
app.set(`view engine`, `ejs`);
app.use(bodyParser.urlencoded({
    extended: true
}))

// mongoose.connect("mongodb://127.0.0.1:27017/theAngryWeathermanDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const weatherHTTPSPrefix = `https://api.openweathermap.org/data/3.0/onecall?`;
// const openweathermapKey = `092e0f7f9c74b92b1d8ba0cd87abf2b7`;
// let weatherResults;

app.get("/", function (req, res) {
    console.log(`GET /`);

    res.render("pages/home");
});

app.get("/weather", function (req, res) {
    res.render("pages/weather");
});

// app.get("/weather/:city", function (req, res) {
//     console.log(`GET /weather/${req.params.city}`);

//     console.log(req.params.city);

//     const city = req.params.city;
//     const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermapKey}`;

//     https.get(weatherURL, function (response) {
//         console.log(response.statusCode);

//         response.on("data", function (data) {
//             res.send(JSON.parse(data));
//             // res.render("pages/weather", {
//             //     showingResults: true,
//             //     weatherResults: JSON.parse(data)
//             // });
//         });
//     });

// });

// app.post("/weather/", function (req, res) {
//     console.log(`POST /weather`);

//     console.log(req.body.city);

//     res.redirect(`/weather/${req.body.city}`);
// });

app.listen(3000, function () {
    console.log(`Server started on port 3000`);
});