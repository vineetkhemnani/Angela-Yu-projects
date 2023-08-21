// list0- list v0 without work route
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items=['Buy Food', 'Cook Food', 'Eat Food'];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

// app.get('/', function(req,res){

// });

app.post('/', function (req,res) {
    let item = req.body.newItem;
    items.push(item);
    // console.log(item);
    res.redirect("/");
})

app.get('/',function(req, res){
    // res.send('Hello');
    let today = new Date();
    // var currDay = today.getDay();   // stores current day as a number from 0-6 (Sunday-Saturday)

    let options = {
        weekday:"long",
        day: "numeric",
        month: "long"
    };

    day = today.toLocaleDateString("en-US", options);
    

    // if(today.getDay() === 6 || today.getDay() === 0){
    //     day = "Weekend";
    //     // res.send("Yay its the weekend");
    // } else {
    //     day="Weekday";
    //     // res.send("Boo! I have to work");
    // }
    res.render('list0', {kindOfDay: day, newListItems: items});
});

app.listen(3000, function(){
    console.log('Server started at port 3000');
});