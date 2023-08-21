const express = require('express')
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    // res--> server response
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req,res){
// console.log(req.body.cityName);
    const query = req.body.cityName;
    const apiKey = "2b8ee0dd638393283e4bd62d5a4f5487";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid="+ apiKey +"&units=" + unit;
    https.get(url, function(response){
        console.log(response.statusCode);
        // response--> api response
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            // console.log(weatherData);
            const temp = weatherData.main.temp;
            // console.log(temp);
            const weatherDescription = weatherData.weather[0].description; // describes weather-cloudy,clear,haze etc
            // console.log(weatherDescription);
            const icon = weatherData.weather[0].icon;
            const imgURL = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
            // https://openweathermap.org/img/wn/10d@2x.png
            res.write("<p>The weather is currently "+ weatherDescription +"</p>");
            res.write("<h1>The Temperature in "+ query + " is " + temp + " degrees Celsius</h1>");
            res.write("<img src=" + imgURL + ">");
            res.send();
        });
    });
    // one app.get() function can only have one res.send
    // res.send('Server is up and running');
});


app.listen(3000, function(){
    console.log("Server running at port 3000");
});