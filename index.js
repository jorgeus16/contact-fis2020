var express = require('express');
var bodyParser = require('body-parser');

var port = 3000;
var BASE_API_PATH = "/api/v1";

console.log("Starting API server...");

var contacts = [
    {"name" : "Rocío", "phone":"635679218"},
    {"name" : "Jorge", "phone":"636435557"}
]
var app = express();
app.use(bodyParser.json());
app.get("/", (req, res)=>{
    res.send("<html><body><h1>My server</h1></body></html>")
});
app.get(BASE_API_PATH + "/contacts", (req,res)=>{
    console.log(Date() + "-GET /contacts");
    res.send(contacts);
});

app.post(BASE_API_PATH + "/contacts", (req, res) =>{
    console.log(Date() + "-POST /contacts");
    var contact = req.body;
    contacts.push(contact);
    res.sendStatus(201);

});

app.listen(port);

console.log("Server ready!");