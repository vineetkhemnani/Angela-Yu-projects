const express = require('express');

const app = express();
// app refers to the express module

//nodemon is a utility that will monitor for changes in your server and automatically restart it

app.get("/", function(req, res){               //   "/" represents home route
    res.send("<h1>Hello World</h1>");
});
// "/" specifies home route so basically we are specifying what will happen
// if we go to localhost:3000/
// req--> request         res--> response

app.get("/contact", function(req, res){
    res.send("contact me at vineetkhemnani09@gmail.com");
});
// "/contact" specifies new route for contact page

app.get("/about", function(req, res){
    res.send("<h2>Hey this website is owned by Vineet who is learning to code</h2>")
});
// "/about" get requests made to the about route

app.listen(3000, function(){
    console.log("Server started on port 3000")
});
// listen to HTTP requests on a certain specified port on our server