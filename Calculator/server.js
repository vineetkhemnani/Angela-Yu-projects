const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // res.send("Hello World");
    res.sendFile(__dirname + '/index.html');
});
// __dirname gives current working directory
// console.log(__dirname);
// res.send(""); --> sends individual bits of data
// for a complete html file we need to use something different
// for complete file we use, res.sendFile()

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("the result of the calculation is " + result);
});

/* End of Calculator code */

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var BMI = weight / (height * height);
    res.send("BMI is " + BMI);
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});