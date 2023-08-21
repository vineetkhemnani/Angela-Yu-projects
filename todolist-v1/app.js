const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

let items=['Buy Food', 'Cook Food', 'Eat Food'];
let workItems=[]

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

// app.get('/', function(req,res){

// });

app.get("/about", function(req, res){
    res.render('about');
})

app.post('/', function (req,res) {
    let item = req.body.newItem;
    // console.log(req.body.list);
    if(req.body.list === 'Work'){
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect("/");
    }
    // console.log(item);
})

app.get('/',function(req, res){
    // res.send('Hello');
    
    let day = date.getDate();
    // if(today.getDay() === 6 || today.getDay() === 0){
    //     day = "Weekend";
    //     // res.send("Yay its the weekend");
    // } else {
    //     day="Weekday";
    //     // res.send("Boo! I have to work");
    // }
    res.render('list', {listTitle: day, newListItems: items});
});

app.get("/work", function(req,res){
    res.render('list', {listTitle: "Work list", newListItems: workItems})
})

// app.post("/work", function(req, res){
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect('/work');
// })

app.listen(3000, function(){
    console.log('Server started at port 3000');
});